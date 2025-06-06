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
  const [showDetail1, setShowDetail1] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);
  const [showDetail3, setShowDetail3] = useState(false);
  const [showDetail4, setShowDetail4] = useState(false);

  // Toggle function for each card
  const toggleDetail1 = () => {
    setShowDetail1(!showDetail1);
  };

  const toggleDetail2 = () => {
    setShowDetail2(!showDetail2);
  };

  const toggleDetail3 = () => {
    setShowDetail3(!showDetail3);
  };

  const toggleDetail4 = () => {
    setShowDetail4(!showDetail4);
  };

  return (
    <section id="experience" className="experience-container">
      <div className="experience-wrapper">
        <span className="experience">Experience</span>
        <h1 className="experience-title">
          Here is a quick summary of my most recent experiences
        </h1>

        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Full Stack Web Developer @ Nar Fruit Agro MMC</h1>
              <h1>Jun 2025 - Jun 2025</h1>
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
        {/* CARD 1 */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Front End Web Developer @ Freelacer</h1>
              <h1>Dec 2024 - May 2025</h1>
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
                  Baku,Azerbaijan
                </span>

                <Link href="https://www.bookmall.az/">
                  <FontAwesomeIcon className="exp-icon" icon={faLink} />
                  bookmall.az
                </Link>
              </div>

              <h1>
                Developing QR Menu website in Bookmall on Next.js/React
                framework
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

        {/* CARD 2 */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Front End Web Developer @ Freelancer</h1>
              <h1>Feb 2024 - Present</h1>
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

                {/* <Link href="https://www.laletech.az/">
                  <FontAwesomeIcon className="exp-icon" icon={faLink} />
                  laletech.az
                </Link> */}
              </div>

              <h1>
                Developing Front End in News Website on Next.js/React framework
                and
              </h1>

              <ul className="exp-tech">
                <li>
                  Create visually appealing websites aligned with client
                  requirements and brand identity.
                </li>
                <li>
                  Ensure websites are optimized for all devices, providing a
                  seamless user experience.
                </li>
                <li>
                  Implement interactive features using JavaScript to enhance
                  user engagement using Next.js framework
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* CARD 4 */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Full Stack Web Developer @ Laletech MMC</h1>
              <h1>Aug 2023 - Mart 2024</h1>
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
