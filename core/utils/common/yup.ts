import type { ValidationError } from "yup";

export type ValidationErrors<ObjectSchema = Record<string, any>> = Record<keyof ObjectSchema, string>;

export function parseYupValidationError<ObjectSchema extends Record<string, any>>(
  error: ValidationError
): ValidationErrors<ObjectSchema> {
  const errors = {} as ValidationErrors<ObjectSchema>;

  error.inner.forEach((err) => {
    if (err.path) {
      errors[err.path as keyof ObjectSchema] = err.message;
    }
  });

  return errors;
}
