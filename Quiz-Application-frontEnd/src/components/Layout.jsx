import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;
