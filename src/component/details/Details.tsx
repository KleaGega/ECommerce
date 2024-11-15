import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useFetch();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not available!");
  }
  const { theme } = themeContext;

  const product = data?.find((item) => item.id.toString() === id);
  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>We couldn't find the product with ID: {id}</p>
      </div>
    );
  }
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          alt={product.title}
          height="250"
          image={product.image}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            <strong>Description:</strong> {product.description}
          </Typography>
          <Typography variant="h6" color="error" sx={{ mt: 2 }}>
            <strong>Price:</strong> ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails;
