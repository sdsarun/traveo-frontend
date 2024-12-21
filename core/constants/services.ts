export const CORE_SERVICES = {
  traveoMain: process.env.TRAVEO_MAIN_SERVICE_BASE_URL ?? "http://localhost:3456",
  traveoLocal: process.env.TRAVEO_BASE_URL ?? "http://localhost:3000"
} as const;