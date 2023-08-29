import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <nav className="navbar">
      {/* Use Link component instead of <a> */}
      <Link to="/" className="logoName">
        Snuggle & Stitch Society
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/designs">Available Designs</Link>
        </li>
        <li>
          <Link to="/whoAreWe">Who Are We</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}
