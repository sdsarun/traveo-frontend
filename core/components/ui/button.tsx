import React from "react";
import { Button as NextUIButton, ButtonProps as NextUIButtonProps } from "@nextui-org/button";

export type ButtonProps = NextUIButtonProps;

export default function Button({ children, ...props }: ButtonProps) {
  return <NextUIButton {...props}>{children}</NextUIButton>;
}