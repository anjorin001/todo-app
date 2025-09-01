import signupRequest from "@/auth/signup";
import { useState } from "react";
import GoogleAuth from "../components/GoogleAuth";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginData = {
    username,
    email,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await signupRequest(loginData);
    const { status, message, data } = response;
    setMessage(status === "error" ? message : "Signup successful");
    setMessageType(status === "error" ? "error" : "success");

    if (status === "success" && data?.token) {
      localStorage.setItem("token", data.token);
      // Navigate to login or profile after successful signup
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    }

    setLoading(false);
  };
  return (
    <>
      <div className="auth-page">
        <div
          className="max-w-md mx-auto p-8 rounded-xl shadow-2xl"
          style={{ backgroundColor: "#242426" }}
        >
          <h2 className="text-white text-center mb-8 text-3xl font-semibold">
            Signup
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-gray-300 mb-2 text-sm font-medium"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white text-base transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-gray-500"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white text-base transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-gray-500"
                placeholder="johnDoe@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-300 mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white text-base transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-gray-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white border-none rounded-lg text-base font-semibold cursor-pointer mt-2 transition-colors duration-200 hover:bg-blue-700 flex justify-center items-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Signup"
              )}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm uppercase">or</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <div className="my-4 mb-6">
            <GoogleAuth />
          </div>

          {message && (
            <div
              className={`px-4 py-3 rounded-lg my-4 text-sm text-center ${
                messageType === "error"
                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                  : "bg-green-500/10 text-green-400 border border-green-500/20"
              }`}
            >
              {message}
            </div>
          )}

          <p className="text-gray-400 text-center text-sm mt-6">
            Don't have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 no-underline font-medium transition-colors duration-200 hover:text-blue-400 hover:underline"
            >
              login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
