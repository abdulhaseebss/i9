import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Marketing from "../../screens/Marketing";
import Interoperability from "../../screens/Interoperability";
import Navbar from "../../components/navbar/Navbar";

import Software from "@/screens/Software";

import Award from "../../screens/Award";


const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/interoperability" element={<Interoperability />} />
          <Route path="/software" element={<Software />} />

          <Route path="/award" element={<Award/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
