import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
import "./style.css";
import ProductPage from "./Product";
import AddProduct from "./AddProduct";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/add-product" element={<AddProduct />}/>
      </Routes>
    </Router>
  );
}

export default App;
