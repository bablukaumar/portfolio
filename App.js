import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
// import Page from "./Page";
// import SimplePage from "./SimplePage";

/*
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Tamplet from './Tamplet';
import Product from './Product';
*/
import Tamplet from './Tamplet';

// import BootstrapLearning from "./BootstrapLearning";


function App() {
  return (
    <>
       {/* <SimplePage?/> */}
      <Tamplet/>
      {/* <BootstrapLearning/>      */}

      <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/product" element={<Product/>} /> */}

      </Routes>
    </>
  );
}

export default App;
