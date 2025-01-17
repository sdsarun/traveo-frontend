"use server";

import { api } from "@/core/services/api";
import type { ServerActionState } from "@/core/shared/types/action";
import { parseYupValidationError } from "@/core/utils/common/yup";
import * as yup from "yup";
import { createPlanSchema, type CreatePlanValues } from "../components/ui/form-create-plan";

export type CreatePlanActionState = ServerActionState;

export async function createPlanAction(payload: CreatePlanValues): Promise<CreatePlanActionState> {
  try {
    await createPlanSchema.validate(payload);

    const response = await api.traveoMain("/api/v1/trips", {
      body: JSON.stringify(payload),
      method: "POST"
    });

    const result = await response.json();

    if (!response.ok) {
      return { status: "request/failed", reason: { message: result?.message } };
    }

    return { status: "request/success", result: result ?? {} };
  } catch (error) {
    console.error(error);

    if (error instanceof yup.ValidationError) {
      return { status: "error/validation", error: parseYupValidationError(error) };
    }

    return { status: "error/unexpected", error };
  }
}
