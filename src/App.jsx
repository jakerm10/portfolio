import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Photography from "./Pages/Photography";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const location=useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
      <Footer key={location.pathname}/>
    </>
    
  );
}