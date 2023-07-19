import React from "react";
import { Routes, Route } from "react-router-dom";
import Bottom from "./components/Bottom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Bottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
};

export default App;
