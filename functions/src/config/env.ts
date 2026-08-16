const removeTrailingSlash = (value: string) => value.replace(/\/$/, "");

export const getFunctionsConfig = () => {
  const laravelApiUrl = process.env.LARAVEL_API_URL?.trim();
  const allowedOrigins = process.env.ALLOWED_ORIGIN?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (!laravelApiUrl) {
    throw new Error("LARAVEL_API_URL is not configured");
  }

  if (!allowedOrigins?.length) {
    throw new Error("ALLOWED_ORIGIN is not configured");
  }

  return {
    laravelApiUrl: removeTrailingSlash(laravelApiUrl),
    allowedOrigins,
  };
};
