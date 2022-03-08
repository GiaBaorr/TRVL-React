import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home.js";
import SignUp from "./components/pages/SignUp.js";
import Services from "./components/pages/Services.js";
import Products from "./components/pages/Products.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
