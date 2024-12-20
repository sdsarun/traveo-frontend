import React from "react";
import { Box, Container } from "@mui/material";

export default function GlobalLayout({ children }: React.PropsWithChildren) {
  return (
    <Box>
      <Container
      // maxWidth={false}
      // disableGutters
      >
        {children}
      </Container>
    </Box>
  );
}
