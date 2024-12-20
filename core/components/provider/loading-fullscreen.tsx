"use client";

import theme from "@/core/configs/theme";
import { Backdrop, CircularProgress } from "@mui/material";
import React, { createContext, use, useState } from "react";

export type LoadingFullScreenContextValues = {
  setFullscreenLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingFullScreenContext = createContext<LoadingFullScreenContextValues>({
  setFullscreenLoading: () => {}
});
export const useLoadingFullScreen = () => use(LoadingFullScreenContext);

export default function LoadingFullScreenProvider({ children }: React.PropsWithChildren) {
  const [open, setFullscreenLoading] = useState<boolean>(false);

  const providerValues: LoadingFullScreenContextValues = {
    setFullscreenLoading
  };

  return (
    <LoadingFullScreenContext value={providerValues}>
      <Backdrop open={open} sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </LoadingFullScreenContext>
  );
}
