import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Videodetails from "./Components/Videodetails";
import Search from "./Components/Search";

const App = () =>{
  return(
    <BrowserRouter>
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/video/:videoid" element={<Videodetails/>} />
      <Route path="/search/:search" element={<Search/>} />
    </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;