import React, { useState, useEffect, ReactNode, useMemo } from "react";
import { CartContext, CartItem } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hook/useFetch";

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [titleFilter, setTitleFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<number>(0);
  const { data } = useFetch();
  const [filteredProduct, setFilteredProduct] = useState<CartItem[]>([]);

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const navigate = useNavigate();

  const handleDetails = (id: string) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (data) {
      const filtered = data
        .filter(
          (item) =>
            item.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            item.price >= priceFilter
        )
        .map((item) => ({
          ...item,
          id: item.id.toString(),
          quantity: 0,
        }));

      setFilteredProduct(filtered);
    }
  }, [data, titleFilter, priceFilter]);

  const handleTitleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleFilter(e.target.value);
  };
  const handlePriceFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFilter(Number(e.target.value));
  };

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalQuantity = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const handleCartClick = () => {
    navigate("/summary");
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDecrease = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncrease = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const saveProduct = () => {
    const newProduct: CartItem = {
      id: Date.now().toString(),
      title,
      price,
      description,
      quantity: 1,
      image: "",
    };

    setCartItems((prevItems) => [...prevItems, newProduct]);
    setTitle("");
    setDescription("");
    setPrice(0);
  };
  const totalItem = (cartItems: CartItem[]): number => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const totalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalQuantity,
        handleCartClick,
        handleIncrease,
        handleDecrease,
        handleRemove,
        handleClose,
        handleOpen,
        open,
        handleTitleChange,
        handlePriceChange,
        handleDescriptionChange,
        title,
        description,
        price,
        saveProduct,
        handleTitleFilterChange,
        filteredProduct,
        titleFilter,
        totalItem,
        totalPrice,
        handlePriceFilterChange,
        priceFilter,
        handleDetails,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
