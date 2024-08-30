import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="p-11">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
