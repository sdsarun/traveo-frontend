import React from "react";
import { cn } from "@/core/utils/common/cn";

export type PageContainerProps = React.ComponentProps<"div">;

export default function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <div className={cn("h-full", className)} {...props}>
      {children}
    </div>
  );
}
