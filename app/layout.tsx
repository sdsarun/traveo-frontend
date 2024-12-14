import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { notoSans, notoSansMono } from "@/core/configs/fonts";

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
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
