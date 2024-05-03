import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Marketing from "../../screens/Marketing";
import Interoperability from "../../screens/Interoperability";
import Navbar from "../../components/navbar/Navbar";

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Marketing />} />
          <Route path="/" element={<Interoperability />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
