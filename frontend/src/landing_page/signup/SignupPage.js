// frontend/src/landing_page/signup/SignupPage.js
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const SignupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check login status from localStorage
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("userName");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
      if (storedUser) setUserName(storedUser);
    }

    // Listen for login/logout changes in other tabs
    const handleStorageChange = () => {
      const status = localStorage.getItem("isLoggedIn");
      const name = localStorage.getItem("userName");
      setIsLoggedIn(status === "true");
      setUserName(name || "");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/signup/login"); // Redirect to login page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to StocksHub</h2>

      {/* Buttons for switching between Login and Signup */}
      {!isLoggedIn && (
        <div style={styles.buttonContainer}>
          <Link
            to="/signup/login"
            style={{
              ...styles.switchButton,
              backgroundColor: location.pathname.includes("/login")
                ? "#007bff"
                : "#e0e0e0",
              color: location.pathname.includes("/login") ? "#fff" : "#000",
            }}
          >
            Login
          </Link>
          <Link
            to="/signup/register"
            style={{
              ...styles.switchButton,
              backgroundColor: location.pathname.includes("/register")
                ? "#007bff"
                : "#e0e0e0",
              color: location.pathname.includes("/register") ? "#fff" : "#000",
            }}
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Logout section when logged in */}
      {isLoggedIn && (
        <div style={styles.loggedInContainer}>
          <h3 style={styles.title}>Hello, {userName}!</h3>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      )}

      {/* Routes for Login and Signup forms */}
      {!isLoggedIn && (
        <div style={styles.formContainer}>
          <Routes>
            <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
            <Route path="register" element={<Signup setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
  },
  title: {
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "25px",
  },
  switchButton: {
    padding: "10px 25px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
  loggedInContainer: {
    marginTop: "20px",
  },
  logoutButton: {
    padding: "10px 25px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default SignupPage;
