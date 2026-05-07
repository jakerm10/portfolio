import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Photography from "./Pages/Photography";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photography" element={<Photography />} />
    </Routes>
  );
}