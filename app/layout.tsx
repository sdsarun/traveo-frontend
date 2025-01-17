import Providers from "@/core/components/providers/providers";
import CoreLayout from "@/core/components/ui/core-layout";
import { notoSans, notoSansMono } from "@/core/configs/fonts";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traveo",
  description: "Traveo trips planners"
};

export const viewport: Viewport = {
  maximumScale: 1
};

export type RootLayoutProps = Readonly<
  React.PropsWithChildren<{
    modal: React.ReactNode;
  }>
>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <CoreLayout>{children}</CoreLayout>
        </Providers>
      </body>
    </html>
  );
}
