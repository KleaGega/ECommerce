import React from "react";
import { Button, Typography, Box } from "@mui/material";

const Success: React.FC = () => {
  const handleRedirect = () => {
    window.location.href = "/thank-you";
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
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
