import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { CartContext } from "../../context/CartContext";

interface ItemProps {
  data: {
    title: string;
    description: string;
    price: number;
    image: string;
    id: string;
  };
}

const Item: React.FC<ItemProps> = ({ data }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available!");
  }

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not available!");
  }

  const { theme } = themeContext;
  const { addToCart, handleDetails } = cartContext;
  const handleAddToCart = () => {
    addToCart({ ...data, quantity: 1 });
  };
  const handleNavigateToDetails = () => {
    handleDetails(data.id);
  };

  return (
    <Card
      sx={{
        width: 320,
        height: 400,
        position: "relative",
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        "&:hover": { transform: "translateY(-10px)" },
        marginBottom: "20px",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={data.image}
        alt={data.title}
        sx={{ objectFit: "cover" }}
      />
      <Typography
        onClick={handleNavigateToDetails}
        variant="h6"
        component="div"
        sx={{
          top: "16px",
          left: "16px",
          minHeight: "72px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": { textDecoration: "underline" },
          color: theme === "light" ? "black" : "white",
        }}
      >
        {data.title}
      </Typography>

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: 1,
          padding: "16px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            color: theme === "light" ? "red" : "yellow",
          }}
        >
          {`$${data.price}`}
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: theme === "light" ? "white" : "black",
            backgroundColor: theme === "light" ? "black" : "white",
            "&:hover": {
              backgroundColor: theme === "light" ? "gray" : "#444",
            },
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;
