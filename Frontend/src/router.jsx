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
import DashboardLayout from "./Layout/DashboardLayout";
import DashboardComponent from "./landingPages/Dashboard/components/components/components/DashboardComponent";
import Orders from "./landingPages/Dashboard/components/components/components/Orders";
import Holdings from "./landingPages/Dashboard/components/components/components/Holdings";
import Positions from "./landingPages/Dashboard/components/components/components/Positions";
import Funds from "./landingPages/Dashboard/components/components/components/Funds";
import Apps from "./landingPages/Dashboard/components/components/components/Apps";
import DashHomePage from "./landingPages/Dashboard/components/components/DashHomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="support" element={<Support />} />
        <Route path="products" element={<Products />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashHomePage />} />
        <Route path="component" element={<DashboardComponent />} />
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="funds" element={<Funds />} />
        <Route path="apps" element={<Apps />} />
      </Route>
    </>
  )
);

export default router;
