import React from "react";
import { Routes, Route } from "react-router-dom";
import Bottom from "./components/Bottom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Bottom />
    </>
  );
};

export default App;
