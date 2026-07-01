import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/login.css";
import logo from "../../assets/logo/logo.png";

import { loginUser } from "../../services/authService";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e) {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const data = await loginUser(email, password);

      console.log(data);

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="login-container">

      <div className="login-card">

        <div className="login-header">

          <img
            src={logo}
            alt="Logo"
            className="login-logo"
          />

          <h2>Fuel Station AI</h2>

          <p>Login to continue</p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

          </div>

          {error && (

            <p
              style={{
                color:"red",
                marginBottom:"15px"
              }}
            >
              {error}
            </p>

          )}

          <button
            className="login-btn"
            disabled={loading}
          >

            {loading ? "Logging in..." : "Login"}

          </button>

        </form>

      </div>

    </div>

  );

}