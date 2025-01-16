"use client"

import ClerkProvider from "./clerk";
import NextUIProviders from "./nextui";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProviders>
      <ClerkProvider>{children}</ClerkProvider>
    </NextUIProviders>
  );
}
