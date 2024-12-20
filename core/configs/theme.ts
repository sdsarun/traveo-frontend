"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: "var(--font-noto-sans)",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
