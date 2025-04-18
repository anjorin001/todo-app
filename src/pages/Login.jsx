import GoogleAuth from "@/auth/GoogleAuth";
import { LoginWithEmail } from "@/auth/LoginWithEmail";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await LoginWithEmail(email, password);
    setMessage(error ? error.message : "Login successfully");
    setLoading(false);
  };
  return (
    <>
      <div className="auth-page">
        <div className="auth-container">
          <h2 className="form-title">Login</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-input"
                placeholder="johnDoe@email.com"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              {loading ? <span className="btn-loader"></span> : "Login"}
            </button>
          </form>

          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">or</span>
            <span className="divider-line"></span>
          </div>

          <div className="google-auth-wrapper">
            <GoogleAuth />
          </div>

          {message && (
            <div
              className={`auth-message ${
                message.type === "error" ? "error" : "success"
              }`}
            >
              <p>{message}</p>
            </div>
          )}

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/signup" className="auth-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
