import { notoSans, notoSansMono } from "@/core/configs/fonts";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/core/components/providers/providers";
import GlobalLayout from "@/core/components/ui/global-layout";
import Navbar from "@/core/components/ui/navbar";

export const metadata: Metadata = {
  title: "Traveo",
  description: "Traveo trips planners"
};

export const viewport: Viewport = {
  maximumScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <GlobalLayout>
            <Navbar />
            {children}
          </GlobalLayout>
        </Providers>
      </body>
    </html>
  );
}
