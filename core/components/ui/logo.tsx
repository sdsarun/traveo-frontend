import { leagueSpartan } from "@/core/configs/fonts";
import Link from "next/link";
import React from "react";
import { GiPlanetConquest } from "react-icons/gi";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <GiPlanetConquest size={24} />
      <h1 className={"font-extrabold text-2xl"} style={{ fontFamily: leagueSpartan.variable }}>
        TRAVEO
      </h1>
    </Link>
  );
}
