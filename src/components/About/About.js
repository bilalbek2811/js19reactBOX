import React from "react";
import Box from "../Box";
import Car from "../Car";
import lambo from "../../img/lompa.webp";
const About = () => {
  return (
    <div style={{ display: "flex", gap: "50px", justifyContent: "center" }}>
      <Car urlcar={lambo} model={"mesi"} />
      <Box
        title={"Bilalbek"}
        subtilte={"Mamadiarov"}
        btn={"buy"}
        backgroun={"red"}
      />
      <Box
        title={"Bilalbek"}
        subtilte={"Mamadiarov"}
        btn={"buy"}
        backgroun={"greenyellow"}
      />
      <Box
        title={"Bilalbek"}
        subtilte={"Mamadiarov"}
        btn={"buy"}
        backgroun={"orange"}
      />
      <Box
        title={"Bilalbek"}
        subtilte={"Mamadiarov"}
        btn={"buy"}
        backgroun={"green"}
      />
    </div>
  );
};

export default About;
