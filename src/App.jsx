import { useState } from "react";
import NavigationBar from "./NavigationBar";
import { Routes, Route, useNavigate } from "react-router-dom"; // Import only once
import "./App.css";
import Home from "./Components/Home";
import Designs from "./Components/Designs";
import WhoAreWe from "./Components/WhoAreWe";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import NotFound from "./Components/NotFound";

//remember to redirect from a function to navigate
// const navigate = useNavigate();I have already imported at the top
// create the function and then add the navigate("/"); to the function

//note on Routes and nested routes
//it can be for example
//<Route path="/designs">
//   <Route path="/" element = {<Designs />} />
//   <Route path="/:designId" element = {<Character />} />
//</Route>

function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/whoAreWe" element={<WhoAreWe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
