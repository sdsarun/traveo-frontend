import { Noto_Sans, Noto_Sans_Mono, League_Spartan } from "next/font/google";

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
});

export const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"]
});