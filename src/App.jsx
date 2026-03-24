import "./App.css";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>SMM Panel</h1>
      </header>

      {/* Instagram */}
      <section className="section">
        <h2 className="insta">Instagram Services</h2>
        <div className="grid">
          <div className="card">Followers</div>
          <div className="card">Likes</div>
          <div className="card">Views</div>
        </div>
      </section>

      {/* YouTube */}
      <section className="section">
        <h2 className="yt">YouTube Services</h2>
        <div className="grid">
          <div className="card">Subscribers</div>
          <div className="card">Views</div>
          <div className="card">Watch Time</div>
        </div>
      </section>

      {/* Facebook */}
      <section className="section">
        <h2 className="fb">Facebook Services</h2>
        <div className="grid">
          <div className="card">Page Likes</div>
          <div className="card">Followers</div>
          <div className="card">Engagement</div>
        </div>
      </section>

    </div>
  );
}

export default App;
