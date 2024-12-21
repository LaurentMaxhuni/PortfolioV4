import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/variables.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg tw-border-b-[1px] tw-h-[75px] tw-border-b-gray-700 fixed-top tw-bg-[var(--bg-color)]">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="tw-text-[var(--text)] tw-font-bold">Laurent</span>&nbsp;
            <span className="tw-text-[var(--primary)] tw-font-bold">
              Maxhuni
            </span>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link tw-text-[var(--text)] hover:tw-text-[var(--gray)] visited:tw-text-[var(--text)]"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link tw-text-[var(--text)] hover:tw-text-[var(--gray)] visited:tw-text-[var(--text)]"
                  href="#about"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link tw-text-[var(--text)] hover:tw-text-[var(--gray)] visited:tw-text-[var(--text)]"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link tw-text-[var(--text)] hover:tw-text-[var(--gray)] visited:tw-text-[var(--text)]"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
