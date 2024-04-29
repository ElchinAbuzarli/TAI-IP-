import Image from "next/image";
import "./skill.scss";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import SASS from "../../assets/sass.png";
import JavaScript from "../../assets/Js.png";
import React from "../../assets/react.png";
import NEXTJS from "../../assets/nextjs.png";
import NODEJS from "../../assets/nodejs.png";
import MongoDB from "../../assets/mongodb.png";
import Postman from "../../assets/postman.webp";
import Git from "../../assets/Git.png";
import MUI from "../../assets/mui.png";
import Andtd from "../../assets/antd.png";
import Bootstrap from "../../assets/bootstrap.png";





function Skill() {
  return (
    <section className="skill-container">
      <div className="skill-wrapper">
        <span className="skill">Skills</span>
        <h1 className="skill-title">
          The skills,tools and technologies I am really good at
        </h1>

        <div className="all-skills">

          <div className="first-skills">
            
            {/* HTML */}
            <div className="skills">
              <Image src={HTML} alt="skill" width={35} height={35} />
              <span>HTML</span>
            </div>

            {/* CSS */}
            <div className="skills">
              <Image src={CSS} alt="skill" width={35} height={35} />
              <span>CSS</span>
            </div>

            {/* SASS */}
            <div className="skills">
              <Image src={SASS} alt="skill" width={35} height={35} />
              <span>SASS</span>
            </div>

            {/* JAVASCRIPT */}
            <div className="skills">
              <Image src={JavaScript} alt="skill" width={35} height={35} />
              <span>Javascript</span>
            </div>

            {/* REACT */}
            <div className="skills">
              <Image src={React} alt="skill" width={35} height={35} />
              <span>React</span>
            </div>

            {/* NEXT JS */}
            <div className="skills">
              <Image src={NEXTJS} alt="skill" width={35} height={35} />
              <span>Next.js</span>
            </div>

            {/* NODE JS */}
            <div className="skills">
              <Image src={NODEJS} alt="skill" width={55} height={40} />
              <span>Node.js</span>
            </div>
          </div>

          <div className="second-skills">

            {/* MONGODB */}
            <div className="skills">
              <Image src={MongoDB} alt="skill" width={35} height={35} />
              <span>MongoDB</span>
            </div>

            {/* POSTMAN */}
            <div className="skills">
              <Image src={Postman} alt="skill" width={35} height={35} />
              <span>Postman</span>
            </div>

            {/* GIT */}
            <div className="skills">
              <Image src={Git} alt="skill" width={35} height={35} />
              <span>Git</span>
            </div>

            {/* MUI */}
            <div className="skills">
              <Image src={MUI} alt="skill" width={35} height={35} />
              <span>Material UI</span>
            </div>

            {/* Bootstrap */}
            <div className="skills">
              <Image src={Bootstrap} alt="skill" width={35} height={35} />
              <span>Bottstrap</span>
            </div>

            {/* Ant Design */}
            <div className="skills">
              <Image src={Andtd} alt="skill" width={35} height={35} />
              <span>AntD</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
