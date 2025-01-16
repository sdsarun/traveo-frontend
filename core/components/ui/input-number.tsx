"use client";

import React from "react";
import { Input as NextUIInput } from "@nextui-org/input";
import { NumericFormat, NumericFormatProps } from "react-number-format";

export type InputNumberProps = NumericFormatProps & {
  customInputProps?: React.ComponentProps<any>;
};

export default function InputNumber({ customInput, customInputProps, ...props }: InputNumberProps) {
  return (
    <NumericFormat customInput={(customInput as any) ?? NextUIInput} {...customInputProps} {...props} />
  );
}
