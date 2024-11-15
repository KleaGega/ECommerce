import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Modal from "./Modal";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const drawerWidth = 240;

export default function Sidebar() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext is not available!</div>;
  }

  const {
    open,
    handleOpen,
    handleClose,
    titleFilter,
    handleTitleFilterChange,
    priceFilter,
    handlePriceFilterChange,
  } = cartContext;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "66px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          {["Products", "Categories", "Orders", "Customers"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? (
                      <ShoppingCartIcon />
                    ) : index === 1 ? (
                      <InventoryIcon />
                    ) : (
                      <AddIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding onClick={handleOpen}>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add New Product" />
            </ListItemButton>
          </ListItem>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <FormControl>
              <InputLabel>Filter by title</InputLabel>
              <Input
                type="text"
                onChange={handleTitleFilterChange}
                value={titleFilter}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Filter by price</InputLabel>
              <Input
                type="text"
                onChange={handlePriceFilterChange}
                value={priceFilter}
              />
            </FormControl>
          </Box>
        </List>
      </Drawer>

      <Modal open={open} handleClose={handleClose} />
    </Box>
  );
}
