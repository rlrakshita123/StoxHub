import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3002/login", formData,{ withCredentials: true });
      console.log("Login backend response:", response.data);

      // Save login status in localStorage for SignupPage to detect
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", response.data.user?.name || "User");

      setMessage("Login successful!");
      setFormData({ email: "", password: "" });
      
      // Trigger a storage event so SignupPage re-renders immediately
      window.dispatchEvent(new Event("storage"));

    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      setMessage(
        error.response?.data?.message || "Login failed. Try again."
      );
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Login to StocksHub</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    color: "green",
    fontWeight: "bold",
  },
};

export default Login;
