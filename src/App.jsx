import { Routes, Route, useLocation } from "react-router-dom";
import {useState, useEffect} from "react"
import {vertst} from './components/Photos.js';
import Home from "./Pages/Home";
import Photography from "./Pages/Photography";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function preloadImages(srcArray) {
  return Promise.all(
      srcArray.map(src => new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
      }))
  );
}

export default function App() {
  const location=useLocation();
  const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        preloadImages(vertst).then(() => setLoaded(true));
    }, []);

    if (!loaded) return <div className="loading">Loading...</div>;
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