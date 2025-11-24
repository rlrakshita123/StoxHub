import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Signup button clicked");
  setMessage("");

  try {
      const res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Fetch response:", data);

      setIsLoggedIn(true);
      setUserName(data.name || formData.name);
      setMessage(`Hello ${data.name || formData.name}, you are logged in successfully!`);
      setFormData({ name: "", email: "", password: "" });
  } catch (err) {
      console.error("Fetch error:", err);
      setMessage("Signup failed. Try again.");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Signup button clicked"); 
  //   setMessage("");

  //   try {
  //     const response = await axios.post(
  //     "http://localhost:3002/signup",
  //     formData,
  //     {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }
  //   );

  //   console.log("Backend response:", response.data);

  //     // Auto login after signup
  //     setIsLoggedIn(true);
  //     setUserName(response.data.name || formData.name); // use backend name if returned

  //     setMessage(`Hello ${response.data.name || formData.name}, you are logged in successfully!`);
  //     setFormData({ name: "", email: "", password: "" });
  //   } catch (error) {
  //     console.error("Signup error:", error.response?.data || error);
  //     setMessage(
  //       error.response?.data?.message || "Signup failed. Try again."
  //     );
  //   }
  // };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setMessage("Logged out successfully.");
  };

  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <>
          <h3 style={styles.title}>Create your StocksHub Account</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
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
              Sign Up
            </button>
          </form>
        </>
      ) : (
        <>
          <h3 style={styles.title}>Hello {userName}, you are logged in successfully!</h3>
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        </>
      )}
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

export default Signup;
