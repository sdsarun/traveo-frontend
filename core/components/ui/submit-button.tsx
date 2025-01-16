"use client";

import React from "react";
import { Button, ButtonProps } from "@nextui-org/button";
import { useFormStatus } from "react-dom";

export type SubmitButtonProps = Omit<ButtonProps, "type">;

export default function SubmitButton({ children, isLoading, ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending || isLoading} {...props}>
      {children}
    </Button>
  );
}
