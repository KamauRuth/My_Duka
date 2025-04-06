import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onFinish = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/signup", form);
      const data = response.data;

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="signup">
      <Toaster />
      <div className="signup_form">
        <form className="myform" onSubmit={onFinish}>
          <h1>Sign Up</h1>

          <div className="input-box">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={form.username}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn">Register</button>

          <div className="register-link">
            <p>Already have an account? <a href="/login">Login</a></p>
            <p><a href="/forgot-password">Forgot Password?</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
