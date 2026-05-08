import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Photography from "./Pages/Photography";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </>
    
  );
}