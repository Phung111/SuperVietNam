import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Main from "components/Main";
import Message from "components/Message";
import Product from "components/Main/Body/Product";
import Home from "components/Main/Body/Content/Primary/Home";
import Products from "components/Main/Body/Content/Primary/Products";
import AboutUs from "components/Main/Body/Content/Primary/AboutUs";
import Review from "components/Main/Body/Content/Primary/Review";

import Body from "components/Main/Body";
import Footer from "components/Main/Footer";
import Header from "components/Main/Header";
import Nav from "components/Main/Body/Content/Nav";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="main" />} />
          <Route path="/main" element={<Main />}>
            <Route path="/" element={<Navigate to="main" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/review" element={<Review />} />
          </Route>
          <Route path="/message" element={<Message />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
