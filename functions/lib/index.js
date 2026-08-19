"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kegiatans = void 0;
const axios_1 = require("axios");
const firebase_functions_1 = require("firebase-functions");
const https_1 = require("firebase-functions/v2/https");
const env_1 = require("./config/env");
const kegiatan_service_1 = require("./services/kegiatan.service");
const errorResponse = {
    success: false,
    message: "Gagal mengambil data kegiatan",
    payload: [],
};
exports.kegiatans = (0, https_1.onRequest)({ region: "us-central1" }, async (req, res) => {
    let config;
    try {
        config = (0, env_1.getFunctionsConfig)();
    }
    catch (error) {
        firebase_functions_1.logger.error("Firebase Functions environment is invalid", error);
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
        const laravelResponse = await (0, kegiatan_service_1.fetchKegiatans)(config.laravelApiUrl);
        if (laravelResponse.status < 200 || laravelResponse.status >= 300) {
            firebase_functions_1.logger.error("Laravel returned a non-success status", {
                status: laravelResponse.status,
            });
            const status = laravelResponse.status >= 500 ? 502 : laravelResponse.status;
            res.status(status).json(errorResponse);
            return;
        }
        if (!Array.isArray(laravelResponse.data?.payload)) {
            firebase_functions_1.logger.error("Laravel returned an invalid kegiatan payload");
            res.status(502).json(errorResponse);
            return;
        }
        res.status(200).json(laravelResponse.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            firebase_functions_1.logger.error("Laravel request failed", {
                code: error.code,
                message: error.message,
            });
        }
        else {
            firebase_functions_1.logger.error("Unexpected kegiatan proxy error", error);
        }
        res.status(502).json(errorResponse);
    }
});
//# sourceMappingURL=index.js.map