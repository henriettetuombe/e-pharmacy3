import React from "react";
import "./Recomendend.css";
import Buttons from "../components/Buttons";

function Recomendend({ handleClick = { handleClick } }) {
  return (
    <>
      <div>
        <h2 className="Recommendend-title">Recomendend</h2>
        <div className="Recomendend-btns">
          <Buttons
            onClicHandler={handleClick}
            value=""
            className="btns"
            title="All Products"
          />
          <Buttons
            onClicHandler={handleClick}
            value="BabyCare"
            className="btns"
            title="BabyCare"
          />
          <Buttons
            onClicHandler={handleClick}
            value="Personal Care"
            className="btns"
            title="Personal Care"
          />
          <Buttons
            onClicHandler={handleClick}
            value="Women Care"
            className="btns"
            title="Women Care"
          />
           <Buttons
            onClicHandler={handleClick}
            value="Health Concerns"
            className="btns"
            title="Health Concerns"
          />
           <Buttons
            onClicHandler={handleClick}
            value="Health Device"
            className="btns"
            title="Health Device"
          />
           <Buttons
            onClicHandler={handleClick}
            value="Home Essentials"
            className="btns"
            title="Home Essentials"
          />
           <Buttons
            onClicHandler={handleClick}
            value="Health Condition"
            className="btns"
            title="Health Condition"
          />
        </div>
      </div>
    </>
  );
}
export default Recomendend;