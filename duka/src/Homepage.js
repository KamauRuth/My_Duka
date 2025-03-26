import React from "react";
import { Link } from "react-router-dom";
// import './style.css';


const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Duka</h1>
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <p>Don't Have an account?</p>
          <Link to="/signup" className="bg-yellow-500 px-4 py-2 rounded">Sign Up</Link>
        </div>
      </header>

      <main className="p-8">
        <section className="mb-6">
          <h2 className="text-xl font-bold">Welcome to My Duka</h2>
          <p>Your one-stop shop for all networking equipment, phone, and computer accessories.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold">Product Categories</h2>
          <ul className="list-disc ml-6">
            <li>Networking Equipment</li>
            <li>Routers & Switches</li>
            <li>Phone Accessories</li>
            <li>Computer Accessories</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>Email: support@myduka.com</p>
          <p>Phone: +254 700 123 456</p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
