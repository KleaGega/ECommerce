import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Box from "@mui/material/Box";
import ShopProducts from "../../component/shop/ShopProducts";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "../../common/features/Button";
const Summary = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    return <div>Error: CartContext is not available!</div>;
  }

  const { cartItems, totalItem, totalPrice } = cartContext;

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <Box sx={{}}>
      <Box
        sx={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
          marginTop: "61px",
        }}
      >
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div key={product.id}>
              <ShopProducts data={product} />
            </div>
          ))
        ) : (
          <Typography variant="h6">Your cart is empty.</Typography>
        )}

        <Box
          sx={{
            gridColumn: "span 3",
            textAlign: "center",
            backgroundColor: "beige",
            width: "150px",
          }}
        >
          <div className="summary-content">
            <Typography>Total Items: {totalItem(cartItems)}</Typography>
            <Typography>
              Total Price: ${totalPrice(cartItems).toFixed(2)}
            </Typography>
            <Button onClick={handleCheckOut} text="Checkout" variant="danger" />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
