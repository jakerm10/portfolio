import { Routes, Route, useLocation } from "react-router-dom";
import {useState, useEffect} from "react"
import {vertst} from './components/Photos.js';
import Home from "./Pages/Home";
import Photography from "./Pages/Photography";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Login.jsx";
import Contact from "./Pages/Contact.jsx";
import Process from "./Pages/Process.jsx";
import Account from "./Pages/Account.jsx";
import PhotoDetail from "./Pages/PhotoDetail";
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
console.log(auth);

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
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);  // ← move up here

  useEffect(() => {
      preloadImages(vertst).then(() => setLoaded(true));
  }, []);

  useEffect(() => {  // ← move up here
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      });
      return () => unsubscribe();
  }, []);

  if (!loaded) return <div className="loading">Loading...</div>;  // ← early return stays here

  return (
      <>
          <Navbar user={user}/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Process" element={<Process />} />
              <Route path="/Account" element={<Account user={user}/>}  />
              <Route path="/Contact" element={<Contact user={user}/>}  />
              <Route path="/photography/:id" element={<PhotoDetail />}/>
          </Routes>
          <Footer key={location.pathname}/>
      </>
  );
}