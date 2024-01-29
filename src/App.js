import React from "react";
import Home from "./compo/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./compo/Profile";


function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
export default App;
