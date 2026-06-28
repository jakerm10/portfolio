import { Routes, Route, useLocation } from "react-router-dom";
import {useState, useEffect} from "react"
import Home from "./Pages/Home";
import Photography from "./Pages/Photography";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Login.jsx";
import Contact from "./Pages/Contact.jsx";
import Projects from "./Pages/Projects.jsx";
import Account from "./Pages/Account.jsx";
import AccountEdit from "./Pages/AccountEdit.jsx"
import PhotoDetail from "./Pages/PhotoDetail";
import ProjectDetail from "./Pages/ProjectDetail";
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
    setLoaded(true);
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
              <Route path="/Photography" element={<Photography main={true} />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Projects/:id" element={<ProjectDetail />}/>
              <Route path="/Account" element={<Account user={user}/>}  />
              <Route path="/AccountEdit" element={<AccountEdit user={user}/>}  />
              <Route path="/Contact" element={<Contact user={user}/>}  />
              <Route path="/Photography/Portraits" element={<Photography category="Portrait" />}/>
              <Route path="/Photography/Fitness" element={<Photography category="Fitness" />}/>
              <Route path="/Photography/Sports" element={<Photography category="Sports" />}/>
              <Route path="/Photography/Nature" element={<Photography category="Nature" />}/>
              <Route path="/Photography/Other" element={<Photography category="Other" />}/>
              <Route path="/Photography/:id" element={<PhotoDetail />}/>
          </Routes>
          <Footer key={location.pathname}/>
      </>
  );
}