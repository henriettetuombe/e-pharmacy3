import React from "react";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        {" "}
        <div className="logo-container">
        <img src="/logo.png" alt="" />
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;