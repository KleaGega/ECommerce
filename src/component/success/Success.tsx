import React from "react";
import { Button, Typography, Box } from "@mui/material";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/homepage");
  };
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not available!");
  }
  const { theme } = themeContext;

  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: 4,
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" color="success.main">
        Order Success!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginTop: 2 }}>
        Your order has been successfully placed. Thank you for your purchase!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 3 }}
        onClick={handleRedirect}
      >
        Go to Thank You Page
      </Button>
    </Box>
  );
};

export default Success;
