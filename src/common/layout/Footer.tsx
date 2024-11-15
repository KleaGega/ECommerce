import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "gray",
        padding: 2,
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography variant="body1">
        &copy; React Bootkamp {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
