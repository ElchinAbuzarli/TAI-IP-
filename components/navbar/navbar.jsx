'use client'
import "./navbar.scss";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
// import Link  from "react-scroll";

function Navbar() {
  return (
    <section className="nav-container">
      <div className="nav-wrapper">
        <div className="logo">
          <Image src={Logo} alt="Logo" width={180} height={30} />
        </div>
        <div className="navlinks">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
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
        <div className="contact">Contact me</div>
      </div>
    </section>
  );
}

export default Navbar;
