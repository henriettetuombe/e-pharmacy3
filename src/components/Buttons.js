import React from "react";

function Buttons({ onClicHandler, value, title }) {
  return (
    <button onClick={onClicHandler} value={value} className="btns">
      {title}
    </button>
  );
}
export default Buttons;