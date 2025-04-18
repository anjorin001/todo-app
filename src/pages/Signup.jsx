import React, { useState } from "react";
import { SignUpWithEmail } from "@/auth/SignUpWithEmail";
import { Link } from "react-router-dom";
import GoogleAuth from "@/auth/GoogleAuth";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { error } = await SignUpWithEmail(email, password);
    setMessage(error ? error.message : "Sign up successful. Check your email.");
    setLoading(false);
  };
  return (
    <>
      <div className="auth-page">
        <div className="auth-container">
          <h2 className="form-title">Sign Up</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="you@example.com"
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
                className="form-input"
                placeholder="Create a strong password"
                required
              />
              <div className="password-hints">
                <span className="hint">• At least 8 characters</span>
                <span className="hint">• One uppercase letter</span>
                <span className="hint">• One number</span>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              {loading ? <span className="btn-loader"></span> : "Sign Up"}
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
              <p> {message} </p>
            </div>
          )}

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
