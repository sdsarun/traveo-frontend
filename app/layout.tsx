import { notoSans, notoSansMono } from "@/core/configs/fonts";
import theme from "@/core/configs/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import LoadingFullScreenProvider from "@/core/components/provider/loading-fullscreen";
import Navbar from "@/core/components/ui/navbar";
import GlobalLayout from "@/core/components/ui/global-layout";
import { ClerkProvider } from "@clerk/nextjs";

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
    <html lang="en" className={`${notoSans.variable} ${notoSansMono.variable} antialiased`}>
      <body>
        <ClerkProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme} disableTransitionOnChange>
              <LoadingFullScreenProvider>
                <GlobalLayout>
                  <Navbar />
                  {children}
                </GlobalLayout>
              </LoadingFullScreenProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
