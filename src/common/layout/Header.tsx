import * as React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ThemeContext from "../../context/ThemeContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SunIcon from "@mui/icons-material/WbSunny";
import MoonIcon from "@mui/icons-material/NightlightRound";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import "../../styles/header.css";

export default function Header() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext is not available!</div>;
  }
  const { totalQuantity } = cartContext;
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return <div>Error: ThemeContext is not available!</div>;
  }
  const { theme, toggleTheme } = themeContext;

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme === "light" ? "gray" : "#333",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Typography sx={{ marginLeft: "20px" }}>My Store</Typography>
          </IconButton>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Link to="./list_product">
              <Button
                sx={{ color: "white", border: "none", fontFamily: "bold" }}
              >
                HomePage
              </Button>
            </Link>

            <Button sx={{ color: "white", border: "none", fontFamily: "bold" }}>
              About Us
            </Button>
            <Button sx={{ color: "white", border: "none", fontFamily: "bold" }}>
              Contact Us
            </Button>
            <Link to="/signUp">
              <Button
                sx={{ color: "white", border: "none", fontFamily: "bold" }}
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button
                sx={{ color: "white", border: "none", fontFamily: "bold" }}
              >
                Login
              </Button>
            </Link>
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Link to="/summary">
                <ShoppingCartIcon
                  sx={{ color: "white", display: "flex", alignItems: "center" }}
                />
              </Link>
              {totalQuantity > 0 && (
                <div className="total">{totalQuantity}</div>
              )}
            </Box>

            <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 2 }}>
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
