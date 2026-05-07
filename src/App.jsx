export default function App() {
  return (
    <div className="app">
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <p className="tag">Photography + Software</p>
      <h1>Your Name</h1>
      <p className="subtitle">
        Building visuals and systems — capturing moments and building tools.
      </p>

      <div className="buttons">
        <button>View Photography</button>
        <button>View Projects</button>
      </div>
    </section>
  );
}