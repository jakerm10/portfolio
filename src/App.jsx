import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
function Nav() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/photography">Photography</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Creative portfolio intro goes here.</p>
    </div>
  );
}

function Photography() {
  return (
    <div>
      <h1>Photography</h1>
      <p>Your gallery will go here.</p>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>Your dev work goes here.</p>
    </div>
  );
}