import React from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <a href="/" className="logoName">
        Snuggle & Stitch Society
      </a>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/designs">Available Designs</a>
        </li>
        <li>
          <a href="/whoAreWe">Who Are We</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>

        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}
