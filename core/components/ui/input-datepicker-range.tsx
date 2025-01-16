"use client"

import React from 'react'
import {
  DateRangePicker as NextUIDateRangePicker,
  DateRangePickerProps as NextUIDatePickerProps
} from "@nextui-org/date-picker";
import { useIsMobile } from '@/core/utils/hooks/use-media-query';

export type InputDatePickerRangeProps = NextUIDatePickerProps;

export default function InputDatePickerRange({ children, ...props }: NextUIDatePickerProps) {
  const isMobile = useIsMobile();

  return (
    <NextUIDateRangePicker visibleMonths={isMobile ? 1 : 2} {...props}>
      {children}
    </NextUIDateRangePicker>
  );
}
