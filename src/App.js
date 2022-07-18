import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUs";
import Faq from "./Pages/FAQ";
import NotFound from "./Pages/NotFound";
import Survey from "./Pages/Survey";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
