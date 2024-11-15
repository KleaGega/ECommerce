import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import useFetch from "../../hook/useFetch";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get the product id from the URL
  const { data } = useFetch();

  // Handle error state

  // Find the product with the matching id from the full data array
  const product = data?.find((item) => item.id.toString() === id); // Convert item.id to string

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>We couldn't find the product with ID: {id}</p>
      </div>
    );
  }

  // Destructure the product properties
  const { title, description, price, image } = product;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{title}</h1>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        <strong>Description:</strong> {description}
      </p>
      <p style={{ fontSize: "18px", color: "red" }}>
        <strong>Price:</strong> ${price}
      </p>
    </div>
  );
};

export default ProductDetails;
