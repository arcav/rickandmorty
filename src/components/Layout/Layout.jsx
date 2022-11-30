import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../NavBar/NavBar";
import { Hero } from "../Hero";
import FavoriteButton from "../Button/FavoriteButton/FavoriteButton";
import "./Layout.modules.css";
import { Outlet } from "react-router-dom";



export const Layout = ({onSubmit}) => {
  return (
    <div className="layout">
      <Hero />
      <Navbar onSubmit={onSubmit} />
      <FavoriteButton />
      <main>
        <section className="container">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};
