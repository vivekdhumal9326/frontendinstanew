import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

export default function Login({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://backendinsta-s0nf.onrender.com/api/admin/login",
        { email, password }
      );

      localStorage.setItem("adminToken", res.data.token);

      onLogin();
      navigate('/admindashboard');
    } catch (err) {
  alert("Status: " + err.response?.status);
  alert("Message: " + JSON.stringify(err.response?.data));
  console.log(err);
}

  };

  return (
    <div className="login-page">

      {/* Header */}
      <div className="top-bar">
        <h2>Instagram Followers</h2>
        <span>Admin Panel</span>
      </div>

      {/* Login Card */}
      <form className="login-card" onSubmit={handleSubmit}>

        <h3>Admin Login</h3>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}
