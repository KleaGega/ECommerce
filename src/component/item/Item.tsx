import React, { useContext } from "react";
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

  const { addToCart, handleDetails } = cartContext;

  const handleAddToCart = () => {
    const itemWithQuantity = { ...data, quantity: 1 };
    console.log("Adding to cart:", itemWithQuantity);
    addToCart(itemWithQuantity);
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
        "&:hover": { transform: "translateY(-10px)" },
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
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "red" }}>
          {`$${data.price}`}
        </Typography>
        <Button
          variant="contained"
          sx={{ color: "primary", backgroundColor: "black" }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;
