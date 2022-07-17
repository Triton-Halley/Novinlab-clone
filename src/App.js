import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUs";
import Faq from "./Pages/FAQ";
import NotFound from "./Pages/NotFount";
import Survey from "./Pages/Survey";
import MainNavigation from "./Components/HomePageComponents/MainNavigation/MainNavigation";
function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
