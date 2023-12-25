import React from "react";
import './Footer.scss';
import { CiCoffeeCup } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <p>Made with love by Igoris Ivanovas</p>
      <a className="coffee" href="https://www.linkedin.com/in/igoris-ivanovas-839645194/">
      <CiCoffeeCup /> Go get coffee
      </a>
      <div className="links">
        <a href="https://www.linkedin.com/in/igoris-ivanovas-839645194/"> <FaLinkedin /></a>
        <a href="https://www.upwork.com/freelancers/~01bcf04e3f0e309938/"> <SiUpwork /></a>
        <a href="https://github.com/igoris12"> <FaGithub /></a>
      </div>
    </footer>
  );
}

export default Footer;
