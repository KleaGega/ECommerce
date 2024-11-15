import React, { useContext } from "react";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ListItem from "@mui/material/ListItem";
import ClearIcon from "@mui/icons-material/Clear";
import { CartContext } from "../../context/CartContext";
import Button from "../features/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #e0e0e0",
  borderRadius: "8px",
  boxShadow: 24,
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, handleClose }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext is not available!</div>;
  }

  const {
    handlePriceChange,
    handleTitleChange,
    handleDescriptionChange,
    title,
    description,
    price,
    saveProduct,
  } = cartContext;

  return (
    <MuiModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ListItem
          onClick={handleClose}
          sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
        >
          <ClearIcon sx={{ fontSize: "24px", color: "#757575" }} />
        </ListItem>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            id="title"
            value={title}
            onChange={handleTitleChange}
            aria-describedby="title-helper-text"
            type="text"
            sx={{
              borderRadius: "4px",
              padding: "8px",
              border: "1px solid #ccc",
              "&:focus": { borderColor: "#3f51b5" },
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            id="price"
            value={price}
            onChange={handlePriceChange}
            aria-describedby="price-helper-text"
            type="number"
            sx={{
              borderRadius: "4px",
              padding: "8px",
              border: "1px solid #ccc",
              "&:focus": { borderColor: "#3f51b5" },
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            aria-describedby="description-helper-text"
            type="text"
            sx={{
              borderRadius: "4px",
              padding: "8px",
              border: "1px solid #ccc",
              "&:focus": { borderColor: "#3f51b5" },
            }}
          />
        </FormControl>
        <Button
          onClick={() => {
            saveProduct();
            handleClose();
          }}
          text="Save Product"
          sx={{
            backgroundColor: "#3f51b5",
            color: "#fff",
            borderRadius: "4px",
            padding: "12px 24px",
            fontSize: "16px",
            width: "100%",
            "&:hover": { backgroundColor: "#303f9f" },
          }}
        />
      </Box>
    </MuiModal>
  );
};

export default Modal;
