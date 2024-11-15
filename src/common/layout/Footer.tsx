import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function Footer() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return <div>Error: ThemeContext is not available!</div>;
  }
  const { theme } = themeContext;
  return (
    <Box
      sx={{
        backgroundColor: theme === "light" ? "gray" : "#333",
        padding: 2,
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        &copy; React Bootcamp {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
