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
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained"
      }
    }
  }
});

export default theme;
