import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/about-us" />
        <Route path="/faq" />
        <Route path="/contact-us" />
        <Route path="/Survey" />
        <Route path="*" />
      </Routes>
    </>
  );
}

export default App;
