import React from "react";
import { data } from "../../data";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          {data
            .map((el, ind) => (
              <div className="" key={ind}>
                <h1>{el.name}</h1>
                <ul>
                  {el.ingredients.map((el1) => (
                    <li>{el1.name}</li>
                  ))}
                  <h2></h2>
                  {el.steps.map((el2) => (
                    <p>{el2}</p>
                  ))}
                </ul>
              </div>
            ))
            .slice(0, 1)}
          <h1>Hello count</h1>
          {data
            .map((el) => (
              <div>
                <h1>{el.name}</h1>
                <ul>
                  {el.ingredients.map((el) => (
                    <li>{el.name      }</li>
                  ))}
                </ul>
              </div>
            ))
            .slice(1)}
        </div>
      </div>
    </div>
  );
};

export default Hero;
