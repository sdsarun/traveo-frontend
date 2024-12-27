"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ClerkProvider from "./clerk";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ClerkProvider>{children}</ClerkProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
