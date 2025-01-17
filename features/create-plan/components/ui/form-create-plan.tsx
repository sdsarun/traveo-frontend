"use client";

import FormSubmitMessage, { FormSubmitMessageProps } from "@/core/components/ui/form-submit-message";
import SubmitButton from "@/core/components/ui/submit-button";
import { useIsMobile } from "@/core/utils/hooks/use-media-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { Autocomplete } from "@nextui-org/autocomplete";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Controller, useForm } from "react-hook-form";
import * as y from "yup";

export const createPlanSchema = y.object({
  name: y.string().required("Choose a destination to start planning"),
  start_date: y.string().required("Please select trip date"),
  end_date: y.string().required("Please select trip date"),
});

export type CreatePlanValues = y.InferType<typeof createPlanSchema>;

export type FormCreatePlanProps = {
  onSubmit?: (formValues: CreatePlanValues) => void;
  isSubmiting?: boolean;
  submitMessageProps?: FormSubmitMessageProps;
};

export default function FormCreatePlan({
  onSubmit,
  isSubmiting,
  submitMessageProps,
}: FormCreatePlanProps) {
  const isMobile = useIsMobile();

  const { control, handleSubmit, formState, setValue } = useForm({
    mode: "all",
    resolver: yupResolver(createPlanSchema),
    values: {
      name: "",
      end_date: "",
      start_date: "",
    },
  });

  const handleFormSubmit = (values: CreatePlanValues) => {
    if (typeof onSubmit === "function") {
      onSubmit(values);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleFormSubmit)}>
      {/* {JSON.stringify(watch())} */}
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <Autocomplete
            {...field}
            label={<span className="font-extrabold">Where to?</span>}
            placeholder="eg. Paris, Hawaii, Japan"
            inputValue={field.value}
            onInputChange={(value) => {
              field.onChange(value);
            }}
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
            allowsCustomValue
            isRequired
            selectorButtonProps={{ isDisabled: true, hidden: true, "aria-hidden": true }}
            isDisabled={isSubmiting}
          >
            <></>
          </Autocomplete>
        )}
      />

      <DateRangePicker
        label={<span className="font-extrabold"> Stay duration(Optional)</span>}
        onChange={(value) => {
          if (!value) {
            return;
          }
          const { start, end } = value;
          setValue("start_date", start.toString(), { shouldValidate: true });
          setValue("end_date", end.toString(), { shouldValidate: true });
        }}
        isInvalid={!!formState.errors.start_date?.message}
        errorMessage={formState.errors.start_date?.message}
        isDisabled={isSubmiting}
        visibleMonths={isMobile ? 1 : 2}
      />

      <SubmitButton size="lg" isLoading={isSubmiting}>
        Start planning
      </SubmitButton>

      <FormSubmitMessage {...submitMessageProps} />
    </form>
  );
}
