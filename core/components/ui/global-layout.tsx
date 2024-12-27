import React from "react";

export default function GlobalLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-[calc(100dvh-72px)]">
      <div className="container mx-auto h-full">{children}</div>
    </div>
  );
}
