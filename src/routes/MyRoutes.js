import React from "react";
import Home from "../components/Home/Home";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Present from "../components/Present/Present";
import { Routes, Route } from "react-router-dom";

const MyRoutes = () => {
  let PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/hero", element: <Hero />, id: 2 },
    { link: "/about", element: <About />, id: 3 },
    { link: "/present", element: <Present />, id: 4 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MyRoutes;
