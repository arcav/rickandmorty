import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../NavBar/NavBar";
import { Hero } from "../Hero";
import "./Layout.modules.css";

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
