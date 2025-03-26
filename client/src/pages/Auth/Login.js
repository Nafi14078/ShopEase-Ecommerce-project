import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle normal form login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Handle Google login success
  const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await axios.post("/api/v1/auth/google-login", {
        token: response.credential,
      });
      if (res.data.success) {
        toast.success("Logged in successfully");
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Google login failed");
    }
  };

  return (
    <GoogleOAuthProvider clientId="process.env.GOOGLE_CLIENT_ID">
      <Layout title="Login - Ecommer App">
        <div className="form-container" style={{ minHeight: "90vh" }}>
          <form onSubmit={handleSubmit}>
            <h4 className="title">LOGIN FORM</h4>

            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>

            <div className="mb-3 mt-3">
              <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={() => toast.error("Google login failed")} />
            </div>

            <button type="button" className="btn btn-secondary mt-2" onClick={() => navigate("/forgot-password")}>
              Forgot Password
            </button>
          </form>
        </div>
      </Layout>
    </GoogleOAuthProvider>
  );
};

export default Login;
