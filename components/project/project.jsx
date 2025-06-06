import Image from "next/image";
import "./project.scss";
import Laletech from "../../assets/ltech.png";
import Bookmall from "../../assets/book.jpg";
import nar from "../../assets/nar.jpg";


import Soon from "../../assets/soon.png";
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
          {/* CARD 1 */}
          <div className="project-card">
            <Image
              className="project-img"
              src={Soon}
              width={300}
              height={200}
            />

            <div className="project-card-txt">
              <h1 className="project-name">"News Website" </h1>

              {/* <span className="project-txt">
                Explore a landing page highlighting company info and products.
                Contact via email or live support for assistance. Experience
                seamless navigation and communication.
              </span>
              <div className="technologies">
                <span className="tech">Next.js</span>
                <span className="tech">Sass</span>
                <span className="tech">Node.js</span>
                <span className="tech">Mongoose</span>
              </div> */}
            </div>
          </div>

          {/* CARD 2 */}
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

          {/* CARD 3 */}
          <div className="project-card">
            <Image
              className="project-img"
              src={Bookmall}
              width={300}
              height={200}
            />

            <div className="project-card-txt">
              <h1 className="project-name">"Bookmall" Book Cafe</h1>
              <span className="project-txt">
                I developed a web platform where users can access menus via QR
                codes and like products to add them to their favorites. These
                products also appear on a popular page, displaying the most
                liked items. This feature enhances user experience
              </span>
              <div className="technologies">
                <span className="tech">Next.js</span>
                <span className="tech">Sass</span>
              </div>

              <div className="card-foot">
                <Link href="https://www.bookmall.az/">
                  <FontAwesomeIcon className="card-icon" icon={faLink} />
                  Watch Site
                </Link>

                <Link href="https://github.com/ElchinAbuzarli/Bookmall">
                  <FontAwesomeIcon className="card-icon" icon={faGithub} />
                  View Code
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
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
