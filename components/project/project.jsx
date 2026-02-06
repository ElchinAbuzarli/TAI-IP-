import Image from "next/image";
import "./project.scss";
import Laletech from "../../assets/ltech.png";
import nar from "../../assets/nar.jpg";
import PoizoiImg from "../../assets/poizoi.png";
import NanazonImg from "../../assets/nanazon.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <section id="projects" className="project-container">
      <div className="project-wrapper">
        <span className="project">Projects</span>
        <h1 className="project-title">Things I've built so far</h1>

        <div className="project-cards">
          {/* CARD 1 - Poizoi Technology */}
          <div className="project-card">
            <Image
              className="project-img"
              src={PoizoiImg}
              width={300}
              height={200}
            />

            <div className="project-card-txt">
              <h1 className="project-name">"Poizoi Technology" Multi Login</h1>
              <span className="project-txt">
                Full sales-focused platform where users can discover the Multi
                Login application, review features and directly purchase premium
                AI accounts from a modern, conversion‑oriented interface.
              </span>
              <div className="technologies">
                <span className="tech">Next.js</span>
                <span className="tech">Sass</span>
              </div>

              <div className="card-foot">
                <Link href="https://poizoi-sas-tsx.vercel.app/en">
                  <FontAwesomeIcon className="card-icon" icon={faLink} />
                  Watch Site
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 3 - Nar Fruit */}
          <div className="project-card">
            <Image
              className="project-img"
              src={nar}
              width={300}
              height={200}
            />

            <div className="project-card-txt">
              <h1 className="project-name">"Nar Fruit Agro" Landing Page</h1>
              <span className="project-txt">
                Explore a landing page highlighting company info and products.
                Contact via email or live support for assistance. Experience
                seamless navigation and communication.
              </span>
              <div className="technologies">
                <span className="tech">Next.js</span>
                <span className="tech">Sass</span>
              </div>

              <div className="card-foot">
                <Link href="https://narfruit.laletech.az/">
                  <FontAwesomeIcon className="card-icon" icon={faLink} />
                  Watch Site
                </Link>

                <Link href="https://github.com/ElchinAbuzarli/Nar-Fruit-Agro">
                  <FontAwesomeIcon className="card-icon" icon={faGithub} />
                  View Code
                </Link>
              </div>
            </div>
          </div>


          {/* CARD 4 - Nanazon Technology */}
          <div className="project-card">
            <Image
              className="project-img"
              src={NanazonImg}
              width={300}
              height={200}
            />

            <div className="project-card-txt">
              <h1 className="project-name">"Nanazon Technology" Platform</h1>
              <span className="project-txt">
                E‑commerce style platform that presents Nanazon&apos;s digital
                workshop concept, lists premium AI and design tools, and lets
                users view plans and purchase subscriptions via a clear pricing
                and onboarding flow.
              </span>
              <div className="technologies">
                <span className="tech">Next.js</span>
                <span className="tech">Sass</span>
              </div>

              <div className="card-foot">
                <Link href="https://nanazon.com/">
                  <FontAwesomeIcon className="card-icon" icon={faLink} />
                  Watch Site
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 5 - LaleTech */}
          <div className="project-card">
            <Image
              className="project-img"
              src={Laletech}
              width={300}
              height={200}
            />

            <div className="project-card-txt">
              <h1 className="project-name">"Laletech MMC" Landing Page</h1>
              <span className="project-txt">
                Explore a landing page highlighting company info and products.
                Contact via email or live support for assistance. Experience
                seamless navigation and communication.
              </span>
              <div className="technologies">
                <span className="tech">Next.js</span>
                <span className="tech">Sass</span>
                <span className="tech">Node.js</span>
                <span className="tech">Mongoose</span>
              </div>

              <div className="card-foot">
                <Link href="https://www.laletech.az/">
                  <FontAwesomeIcon className="card-icon" icon={faLink} />
                  Watch Site
                </Link>

                <Link href="https://github.com/ElchinAbuzarli/ADVANCED-LALETECH">
                  <FontAwesomeIcon className="card-icon" icon={faGithub} />
                  View Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
