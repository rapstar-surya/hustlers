import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import Login from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ContactUs from "./pages/ContactUs";

import Navbar from "./components/Navbar";
import TrainingPrograms from "./components/TrainingPrograms";
import TrainerSection from "./components/TrainerSection";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
