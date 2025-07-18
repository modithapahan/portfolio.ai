import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="social-icons">
        <a
          href="https://github.com/modithapahan"
          target="_blank"
          rel="github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/modithapahan/"
          target="_blank"
          rel="linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
