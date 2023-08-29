import { useState } from "react";
import NavigationBar from "./NavigationBar";
import { Routes, Route } from "react-router-dom"; // Import only once
import "./App.css";
import Home from "./Components/Home";
import Designs from "./Components/Designs";
import WhoAreWe from "./Components/WhoAreWe";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/whoAreWe" element={<WhoAreWe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <NavigationBar />
    </>
  );
}

export default App;
