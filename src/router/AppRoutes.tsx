import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../common/layout/Header";
import ProductList from "../component/list/ProductList";
import useFetch from "../hook/useFetch";
import Summary from "../component/summary/Summary";
import Checkout from "../component/checkout/Checkout";
import ProductDetails from "../component/details/Details";
import Login from "../component/login/Login";
import SignUp from "../component/signUp/SignUp";
import Success from "../component/Success";
const AppRoutes: React.FC = () => {
  const { data } = useFetch();

  return (
    <Routes>
      <Route path="/header" element={<Header />} />
      <Route path="/list_product" element={<ProductList data={data} />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default AppRoutes;
