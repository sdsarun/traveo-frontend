"use client"

import React from 'react'
import {
  Autocomplete as NextUIAutocomplete,
  AutocompleteProps as NextUIAutocompleteProps
} from "@nextui-org/autocomplete";

export default function InputAutoComplete({ children, ...props }: NextUIAutocompleteProps) {
  return (
    <NextUIAutocomplete {...props}>{children}</NextUIAutocomplete>
  )
}
