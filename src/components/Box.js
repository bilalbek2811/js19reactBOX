import React from "react";

const Box = ({ title, subtilte, btn, backgroun }) => {
  return (
    <div style={{ background: backgroun }} className="box">
      <h1>{title}</h1>
      <h4>{subtilte}</h4>
      <button>{btn}</button>
    </div>
  );
};

export default Box;
