import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function HomePage() {

  return (
    <Box>
      <Box className="flex flex-col items-center gap-4 pt-40 pb-10">
        <Typography
          variant="h3"
          fontWeight={1000}
        >
          One app for all your travel planning needs
        </Typography>
        <Typography
          variant="body1"
        >
          Create detailed itineraries, explore user-shared guides, and manage your bookings
          seamlessly — all in one place.
        </Typography>

        <Box>
          <Button size="large">Start Planning</Button>
        </Box>
      </Box>
    </Box>
  );
}
