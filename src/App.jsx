import React from "react";

function App() {
  return (
    <div>

      <h1 style={{ textAlign: "center" }}>Social Media Services</h1>

      {/* Instagram Section */}
      <div style={{
        background: "linear-gradient(45deg,#f58529,#dd2a7b)",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        color: "white"
      }}>
        <h2>Instagram</h2>
        <p>Followers | Likes | Views</p>
      </div>

      {/* YouTube Section */}
      <div style={{
        background: "#ff0000",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        color: "white"
      }}>
        <h2>YouTube</h2>
        <p>Subscribers | Watch Time | Views</p>
      </div>

      {/* Facebook Section */}
      <div style={{
        background: "#1877f2",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        color: "white"
      }}>
        <h2>Facebook</h2>
        <p>Likes | Followers | Engagement</p>
      </div>

    </div>
  );
}

export default App;
