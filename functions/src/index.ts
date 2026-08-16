import axios from "axios";
import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import { getFunctionsConfig } from "./config/env";
import { fetchKegiatans, KegiatanResponse } from "./services/kegiatan.service";

const errorResponse: KegiatanResponse = {
  success: false,
  message: "Gagal mengambil data kegiatan",
  payload: [],
};

export const kegiatans = onRequest({ region: "us-central1" }, async (req, res) => {
  let config: ReturnType<typeof getFunctionsConfig>;

  try {
    config = getFunctionsConfig();
  } catch (error) {
    logger.error("Firebase Functions environment is invalid", error);
    res.status(500).json(errorResponse);
    return;
  }

  const origin = req.get("origin");
  if (origin && config.allowedOrigins.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
    res.set("Vary", "Origin");
  }

  if (req.method === "OPTIONS") {
    if (origin && !config.allowedOrigins.includes(origin)) {
      res.status(403).end();
      return;
    }

    res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).end();
    return;
  }

  if (origin && !config.allowedOrigins.includes(origin)) {
    res.status(403).json(errorResponse);
    return;
  }

  if (req.method !== "GET") {
    res.set("Allow", "GET");
    res.status(405).json(errorResponse);
    return;
  }

  try {
    const laravelResponse = await fetchKegiatans(config.laravelApiUrl);

    if (laravelResponse.status < 200 || laravelResponse.status >= 300) {
      logger.error("Laravel returned a non-success status", {
        status: laravelResponse.status,
      });
      const status = laravelResponse.status >= 500 ? 502 : laravelResponse.status;
      res.status(status).json(errorResponse);
      return;
    }

    if (!Array.isArray(laravelResponse.data?.payload)) {
      logger.error("Laravel returned an invalid kegiatan payload");
      res.status(502).json(errorResponse);
      return;
    }

    res.status(200).json(laravelResponse.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logger.error("Laravel request failed", {
        code: error.code,
        message: error.message,
      });
    } else {
      logger.error("Unexpected kegiatan proxy error", error);
    }

    res.status(502).json(errorResponse);
  }
});
