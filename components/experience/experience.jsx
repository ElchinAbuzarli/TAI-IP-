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

        {/* CARD 1 */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Front End Web Developer - Team Lead @ CodeTech</h1>
              <h1>Apr 2024 - Present</h1>
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

                {/* <Link href="https://www.laletech.az/">
                  <FontAwesomeIcon className="exp-icon" icon={faLink} />
                  laletech.az
                </Link> */}
              </div>

              <h1>
                Leading Developer Team
              </h1>

              <ul className="exp-tech">
                <li>Guide and direct developers, assign tasks, and set deadlines.</li>
                <li>Lead website design, ensuring alignment with client requirements.</li>
                <li>Ensure websites are optimized for all devices.</li>
                <li>Implement interactive features for user engagement.</li>
                <li>Foster team collaboration and communicate effectively with stakeholders.</li>

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
                Developing Front End in News Website on Next.js/React framework and
              </h1>

              <ul className="exp-tech">
                <li>Create visually appealing websites aligned with client requirements and brand identity.</li>
                <li>Ensure websites are optimized for all devices, providing a seamless user experience.</li>
                <li>Implement interactive features using JavaScript to enhance user engagement using Next.js framework</li>
              </ul>
            </div>
          )}
        </div>

        {/* CARD 3 */}
        <div className="experience-card">
          <div className="experience-head">
            <div className="head-div">
              <h1>Front End Web Developer @ Freelancer</h1>
              <h1>Feb 2024 - Present</h1>
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

                {/* <Link href="https://www.laletech.az/">
                  <FontAwesomeIcon className="exp-icon" icon={faLink} />
                  laletech.az
                </Link> */}
              </div>

              <h1>
                Developing Front End in LearnEd on Next.js/React framework and
              </h1>

              <ul className="exp-tech">
                <li> Develop a responsive and interactive single-page application using Next.js components.</li>
                <li>Ensure the application functions seamlessly across various devices and browsers with Next.js's responsive design.</li>
                <li>Write efficient JavaScript code for the single-page application using Next.js framework</li>
                <li>Optimize the application's performance leveraging Next.js's server-side rendering and static site generation features.</li>
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
                <li> Designed and developed the back-end infrastructure of websites, </li>
                <li> Managed the deployment and hosting process for projects</li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Experience;
