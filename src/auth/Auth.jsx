import React, { useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Email login ---
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    setLoading(false);
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Check your email for the login link");
    }
  };
  // Google login
  const handeGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/my-day",
      },
    });

    if (error) console.log("OAuth error:", error.message);
  };

  return (
    <div className="main-content">
      <div className="signup">
        <div class="auth-container">
          <h2 class="auth-title">Sign In</h2>
          <form class="auth-form" action="" onSubmit={handleEmailLogin}>
            <input
              class="auth-input"
              type="email"
              placeholder="jhoneDoe@gmail.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button class="auth-button primary">
              {loading ? "Sending..." : "Send Magic Link"}
            </button>
          </form>

          <div class="auth-divider">
            <span class="divider-text">or</span>
          </div>

          <button class="auth-button google" onClick={handeGoogleLogin}>
            <svg
              class="google-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {message && <p class="auth-message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Auth;
