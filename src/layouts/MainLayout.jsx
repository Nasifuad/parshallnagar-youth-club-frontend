import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <p className="text-center text-4xl text-red-800">Hello there</p>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
