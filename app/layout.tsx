import { notoSans, notoSansMono } from "@/core/configs/fonts";
import theme from "@/core/configs/theme";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traveo",
  description: "Traveo trips planners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansMono.variable} antialiased`}
    >
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider
            theme={theme}
            disableTransitionOnChange
          >
            <UserProvider>{children}</UserProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
