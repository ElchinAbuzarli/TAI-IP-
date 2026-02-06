"use client";

import {
  faLink,
  faLocation,
  faLocationPin,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

function Experience() {
  const [showDetail1, setShowDetail1] = useState(false); // Nanazon
  const [showDetail2, setShowDetail2] = useState(false); // Poizoi
  const [showDetail3, setShowDetail3] = useState(false); // Nar Fruit
  const [showDetail4, setShowDetail4] = useState(false); // LaleTech

  const toggleDetail1 = () => setShowDetail1(!showDetail1);
  const toggleDetail2 = () => setShowDetail2(!showDetail2);
  const toggleDetail3 = () => setShowDetail3(!showDetail3);
  const toggleDetail4 = () => setShowDetail4(!showDetail4);

  return (
    <section id="experience" className="experience-container">
      <div className="experience-wrapper">
        <span className="experience">Experience</span>
        <h1 className="experience-title">
          Here is a quick summary of my most recent experiences
        </h1>

        {/* Nanazon Technology */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Front-End Developer @ Nanazon Technology</h1>
              <h1>Jan 2026 - Present</h1>
            </div>
            <FontAwesomeIcon
              className="exp-toggle"
              icon={showDetail1 ? faMinus : faPlus}
              onClick={toggleDetail1}
            />
          </div>

          {showDetail1 && (
            <div className="exp-detail">
              <div className="exp-location">
                <span>
                  <FontAwesomeIcon className="exp-icon" icon={faLocationPin} />
                 Russia (Remote)
                </span>

                <Link href="https://nanazon.com/">
                  <FontAwesomeIcon className="exp-icon" icon={faLink} />
                  nanazon.com
                </Link>
              </div>

              <h1>
                Developed and maintained a SaaS web platform using PHP with a
                modern user panel.
              </h1>

              <ul className="exp-tech">
                <li>
                  Provided support for backend development and integrations when
                  needed.
                </li>
                <li>
                  Built a responsive user interface following modern UX
                  principles.
                </li>
                <li>
                  Supported a cross-platform desktop application developed with
                  Electron.js.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Poizoi Technology */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Front-End Developer @ Poizoi Technology</h1>
              <h1>Jun 2025 - Jan 2026</h1>
            </div>
            <FontAwesomeIcon
              className="exp-toggle"
              icon={showDetail2 ? faMinus : faPlus}
              onClick={toggleDetail2}
            />
          </div>

          {showDetail2 && (
            <div className="exp-detail">
              <div className="exp-location">
                <span>
                  <FontAwesomeIcon className="exp-icon" icon={faLocationPin} />
                  Baku,Azerbaijan
                </span>

                <Link href="https://poizoi-sas-tsx.vercel.app/en">
                  <FontAwesomeIcon className="exp-icon" icon={faLink} />
                  poizoi.com
                </Link>
              </div>

              <h1>
              Developed a SaaS web platform at Poizoi, including Admin Panel and User Panel from scratch.
              </h1>

              <ul className="exp-tech">
                <li>
                  Designed and implemented all UI/UX without a dedicated
                  designer, ensuring a consistent product experience.
                </li>
                <li>
                  Developed a cross-platform multi-login desktop application
                  using Tauri.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Nar Fruit Agro */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Full Stack Web Developer @ Nar Fruit Agro MMC</h1>
              <h1>Jun 2025 - Jun 2025</h1>
            </div>
            <FontAwesomeIcon
              className="exp-toggle"
              icon={showDetail3 ? faMinus : faPlus}
              onClick={toggleDetail3}
            />
          </div>

          {showDetail3 && (
            <div className="exp-detail">
              <div className="exp-location">
                <span>
                  <FontAwesomeIcon className="exp-icon" icon={faLocationPin} />
                  Baku,Azerbaijan
                </span>

                <Link href="https://narfruit.laletech.az/">
                  <FontAwesomeIcon className="exp-icon" icon={faLink} />
                  narfruit.laletech.az
                </Link>
              </div>

              <h1>
                Developing FrontEnd in Nar Fruit Agro on Next.js/React framework
              </h1>

              <ul className="exp-tech">
                <li> Led the development of the front-end side of websites,</li>

                <li>
                  {" "}
                  Managed the deployment and hosting process for projects
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* LaleTech MMC */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Full Stack Web Developer @ Laletech MMC</h1>
              <h1>Aug 2023 - Mar 2024</h1>
            </div>
            <FontAwesomeIcon
              className="exp-toggle"
              icon={showDetail4 ? faMinus : faPlus}
              onClick={toggleDetail4}
            />
          </div>

          {showDetail4 && (
            <div className="exp-detail">
              <div className="exp-location">
                <span>
                  <FontAwesomeIcon className="exp-icon" icon={faLocationPin} />
                  Baku,Azerbaijan
                </span>

                <Link href="https://www.laletech.az/">
                  <FontAwesomeIcon className="exp-icon" icon={faLink} />
                  laletech.az
                </Link>
              </div>

              <h1>
                Developing Full Stack in Laletech on Next.js/React framework
              </h1>

              <ul className="exp-tech">
                <li> Led the development of the front-end side of websites,</li>
                <li>
                  {" "}
                  Designed and developed the back-end infrastructure of
                  websites,{" "}
                </li>
                <li>
                  {" "}
                  Managed the deployment and hosting process for projects
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;
