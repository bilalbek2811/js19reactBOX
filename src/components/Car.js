import React from "react";

const Car = ({ urlcar, model, year }) => {
  return (
    <div
      style={{ background: `url(${urlcar}) no-repeat center/cover` }}
      className="carbox"
    >
      <h1>{model}</h1>
      <h5>{year}</h5>
    </div>
  );
};

export default Car;
