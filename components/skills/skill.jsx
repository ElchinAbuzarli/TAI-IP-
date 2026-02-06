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
import Electron from "../../assets/electron.png";
import MySQL from "../../assets/mysql.png";
import PHP from "../../assets/php.png";
import Tailwind from "../../assets/tailwind.png";
import Tauri from "../../assets/tauri.png";
import TypeScript from "../../assets/ts.png";





function Skill() {
  return (
    <section id="skills" className="skill-container">
      <div className="skill-wrapper">
        <span className="skill">Skills</span>
        <h1 className="skill-title">
          The skills,tools and technologies I am really good at
        </h1>

        <div className="all-skills">
          {/* 1-ci sıra: ən az (1 dənə) */}
          <div className="first-skills">
            {/* React */}
            <div className="skills">
              <Image src={React} alt="skill" width={35} height={35} />
              <span>React</span>
            </div>
          </div>

          {/* 2-ci sıra: bir az çox (3 dənə) */}
          <div className="second-skills">
            {/* JavaScript */}
            <div className="skills">
              <Image src={JavaScript} alt="skill" width={35} height={35} />
              <span>Javascript</span>
            </div>

            {/* TypeScript */}
            <div className="skills">
              <Image src={TypeScript} alt="skill" width={35} height={35} />
              <span>TypeScript</span>
            </div>

            {/* Next.js */}
            <div className="skills">
              <Image src={NEXTJS} alt="skill" width={35} height={35} />
              <span>Next.js</span>
            </div>
          </div>

          {/* 3-cü sıra: daha çox (4 dənə) */}
          <div className="third-skills">
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

            {/* Tailwind */}
            <div className="skills">
              <Image src={Tailwind} alt="skill" width={35} height={35} />
              <span>Tailwind</span>
            </div>
          </div>

          {/* 4-cü sıra: daha çox (5 dənə) */}
          <div className="fourth-skills">
            {/* Node.js */}
            <div className="skills">
              <Image src={NODEJS} alt="skill" width={55} height={40} />
              <span>Node.js</span>
            </div>

            {/* MongoDB */}
            <div className="skills">
              <Image src={MongoDB} alt="skill" width={35} height={35} />
              <span>MongoDB</span>
            </div>

            {/* MySQL */}
            <div className="skills">
              <Image src={MySQL} alt="skill" width={35} height={35} />
              <span>MySQL</span>
            </div>

            {/* PHP */}
            <div className="skills">
              <Image src={PHP} alt="skill" width={35} height={35} />
              <span>PHP</span>
            </div>

            {/* Postman */}
            <div className="skills">
              <Image src={Postman} alt="skill" width={35} height={35} />
              <span>Postman</span>
            </div>
          </div>

          {/* 5-ci sıra: ən çox (6 dənə, baza) */}
          <div className="fifth-skills">
            {/* Git */}
            <div className="skills">
              <Image src={Git} alt="skill" width={35} height={35} />
              <span>Git</span>
            </div>

            {/* Material UI */}
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

            {/* Electron */}
            <div className="skills">
              <Image src={Electron} alt="skill" width={35} height={35} />
              <span>Electron</span>
            </div>

            {/* Tauri */}
            <div className="skills">
              <Image src={Tauri} alt="skill" width={35} height={35} />
              <span>Tauri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
