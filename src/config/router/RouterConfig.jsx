import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Marketing from "../../screens/Marketing";
import Interoperability from "../../screens/Interoperability";
import Navbar from "../../components/navbar/Navbar";
import Software from "@/screens/Software";

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/interoperability" element={<Interoperability />} />
          <Route path="/software" element={<Software />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
