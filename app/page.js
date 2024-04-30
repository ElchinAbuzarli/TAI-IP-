import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Hero from "@/components/hero/hero";
import Projects from "@/components/project/project";
import Skill from "@/components/skills/skill";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      {/* <Experience/> */}
      {/* <Contact/> */}
    </section>
  );
}
