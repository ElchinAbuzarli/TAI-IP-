"use client";
import "./navbar.scss";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <section className="nav-container">
      <div className="nav-wrapper">
        <FontAwesomeIcon
          className="nav-icon"
          onClick={toggleNav}
          icon={faBars}
        />
        <div className="logo">
          <Image
            className="logo"
            src={Logo}
            alt="Logo"
            width={180}
            height={30}
          />
        </div>

        <div className="navlinks">
          <Link to="home" spy={true} smooth={true} offset={-50} duration={1000}>
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            About
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Skills
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Projects
          </Link>

          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Experience
          </Link>
        </div>

        <div
          className={`navlinks-resp ${isNavOpen ? "open" : ""}`}
          
        >
          <ul className={`navlinks-resp ${isNavOpen ? "open" : ""}`}>
            <FontAwesomeIcon
              onClick={closeNav}
              className="nav-close-icon"
              icon={faXmark}
            />

            <li className="navlink-resp">
              <Link
                onClick={closeNav}
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Home
              </Link>
            </li>

            <li className="navlink-resp">
              <Link
                onClick={closeNav}
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                About
              </Link>
            </li>

            <li className="navlink-resp">
              <Link
                onClick={closeNav}
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Skills
              </Link>
            </li>

            <li className="navlink-resp">
              <Link
                onClick={closeNav}
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Projects
              </Link>
            </li>

            <li className="navlink-resp">
              <Link
                onClick={closeNav}
                to="experience"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>

        <a href="tel:+994-51-840-40-02" className="contact">Contact me</a>
      </div>
    </section>
  );
}

export default Navbar;
