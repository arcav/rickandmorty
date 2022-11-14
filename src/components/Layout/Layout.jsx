import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../NavBar/NavBar";
import { Hero } from "../Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <Navbar />
      <main style={{height:"300px"}}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout