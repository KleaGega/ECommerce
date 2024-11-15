import React, { useContext, useState } from "react";
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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
        <ListItem onClick={handleClose}>
          <ClearIcon />
        </ListItem>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            id="title"
            value={title}
            onChange={handleTitleChange}
            aria-describedby="title-helper-text"
            type="text"
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            id="price"
            value={price}
            onChange={handlePriceChange}
            aria-describedby="price-helper-text"
            type="number"
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            aria-describedby="description-helper-text"
            type="text"
          />
        </FormControl>
        <Button onClick={saveProduct} text="Save Product" />
      </Box>
    </MuiModal>
  );
};

export default Modal;
