import React, { useContext } from "react";
import Item from "../item/Item";
import "../../styles/list.css";
import { CartContext } from "../../context/CartContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ItemData {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductListProps {
  data: ItemData[];
}

const ProductList: React.FC<ProductListProps> = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext is not available!</div>;
  }

  const { filteredProduct } = cartContext;

  if (filteredProduct.length === 0) {
    return <Typography>No data found</Typography>;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        marginTop: "96px",
        columnGap: "20px",
        rowGap: "30px",
        marginLeft: "28px",
      }}
    >
      {filteredProduct.map((item) => (
        <div key={item.id}>
          <Item data={item} />
        </div>
      ))}
    </Box>
  );
};

export default ProductList;
