import React from "react";
import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeptaTravelTours from "./components/heptaTravelTour";
import Footer from "./components/footer";
import SideMenu from "./components/sidemenu"; 
import Hotels from "./components/hotels";
import Aboutus from "./components/aboutus";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import News from "./components/news";

function App() {
  
  return (
    <Router>
    <div className="App">
      <Routes>

        <Route path="/" element={<HeptaTravelTours/>}></Route>
        <Route path="/SideMenu" element={<SideMenu/>}></Route>
        <Route path="/hotels" element={<Hotels/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/news" element={<News />}></Route>

      </Routes>
      <Footer/>  
    </div>
    </Router>
  );
}

export default App;
