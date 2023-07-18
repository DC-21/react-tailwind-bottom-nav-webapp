import React from "react";
import { Routes, Route } from "react-router-dom";
import Bottom from "./components/Bottom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Bottom />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
