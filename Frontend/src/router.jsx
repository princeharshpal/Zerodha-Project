import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./landingPages/Home/HomePage";
import About from "./landingPages/About/About";
import SignUp from "./landingPages/SignUp/SignUp";
import Pricing from "./landingPages/Pricing/Pricing";
import Support from "./landingPages/Support/Support";
import Products from "./landingPages/Products/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="support" element={<Support />} />
      <Route path="products" element={<Products />} />
    </Route>
  )
);

export default router;
