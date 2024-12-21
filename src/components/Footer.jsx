import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section id="footer" className="mt-5 mb-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1 className="div">&copy; Laurent Maxhuni, 2024</h1>
          <div className="socials d-flex flex-row gap-2">
            <a
              href="https://www.instagram.com/laurent_maxhuni34/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="fs-3" />
            </a>
            <a
              href="https://www.github.com/LaurentMaxhuni"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="fs-3" />
            </a>
            <a
                href="https://www.linkedin.com/in/laurent-maxhuni-56a394304/"
                target="_blank"
                rel="noreferrer"
                >
                <FaLinkedin className="fs-3" />
                </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
