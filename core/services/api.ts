import { CORE_SERVICES } from "../constants/services";
import { fetcherFactory } from "../utils/factory/fetcher";

export const api = {
  traveoMain: fetcherFactory(CORE_SERVICES.traveoMain),
  traveoLocal: fetcherFactory(CORE_SERVICES.traveoLocal)
} as const;