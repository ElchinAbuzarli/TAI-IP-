import Image from "next/image";
import "./project.scss";
import Laletech from "../../assets/ltech.png";
import Soon from "../../assets/soon.png";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
              src={Soon}
              width={300}
              height={200}
            />

            <div className="project-card-txt">
              
              <h1 className="project-name">"LearnEd" Speaking Course</h1>
              
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

          {/* CARD 3 */}
          <div className="project-card">
            <Image
              className="project-img"
              src={Soon}
              width={300}
              height={200}
            />
            <div className="project-card-txt">
             
              <h1 className="project-name">"ByShadiPlus" Restaurant</h1>
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
                <Link href='https://www.laletech.az/'>
                <FontAwesomeIcon className="card-icon" icon={faLink} />
                    Watch Site
                </Link>

                <Link href='https://github.com/ElchinAbuzarli/ADVANCED-LALETECH'> 
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
