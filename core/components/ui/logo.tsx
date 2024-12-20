"use client";

import { leagueSpartan } from "@/core/configs/fonts";
import { Typography, TypographyProps } from "@mui/material";
import Link from "next/link";
import { GiPlanetConquest } from "react-icons/gi";

export default function Logo({ sx, ...props }: TypographyProps) {

  return (
    <Link
      href={"/"}
      className="flex items-center gap-1"
    >
      <GiPlanetConquest size={24} />
      <Typography
        sx={{ fontFamily: leagueSpartan.variable, fontSize: 24, fontWeight: "bold", ...sx }}
        {...props}
      >
        TRAVEO
      </Typography>
    </Link>
  );
}
