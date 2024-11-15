import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Box } from "@mui/system";
import { CartContext } from "../../context/CartContext";
import { ProductListProps } from "../../interfaces/Product";

const ShopProducts: React.FC<ProductListProps> = ({ data }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext is not available!</div>;
  }

  const { handleIncrease, handleDecrease, handleRemove } = cartContext;

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "20px auto",
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={data.title}
        height="200"
        image={data.image}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: "60px", overflow: "hidden" }}
        >
          {data.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px 16px 16px",
        }}
      >
        <Typography variant="h6" color="primary">
          ${data.price}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleDecrease(data.id)}
            sx={{
              minWidth: "30px",
              padding: "6px",
            }}
          >
            -
          </Button>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {data.quantity}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleIncrease(data.id)}
            sx={{
              minWidth: "30px",
              padding: "6px",
            }}
          >
            +
          </Button>
        </Box>
      </CardActions>
      <CardActions
        sx={{
          padding: "0 16px 16px 16px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={() => handleRemove(data.id)}
          sx={{
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopProducts;
