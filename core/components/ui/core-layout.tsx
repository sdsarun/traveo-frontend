"use client";

import { cn } from "@/core/utils/common/cn";
import React from "react";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const containerWidthPaths: string[] = ["/", "/trip/plan/create"];

export default function CoreLayout({ children }: React.PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className={cn("h-[calc(100dvh-64px)]")}>
      <Navbar
        navbarProps={{
          classNames: {
            base: cn({
              "container mx-auto": containerWidthPaths.includes(pathname)
            }),
            wrapper: cn("p-0")
          }
        }}
      />
      <div
        className={cn("h-full px-4 sm:px-0", {
          "container mx-auto": containerWidthPaths.includes(pathname)
        })}
      >
        {children}
      </div>
    </div>
  );
}
