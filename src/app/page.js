import Image from "next/image";
import Hero from "./containers/Hero";
import Skills from "./containers/Skills";
import Portfolios from "./containers/Portfolios";
import About from "./containers/About";
import Education from "./containers/Education";
import Expreience from "./containers/Experience";
import Contact from "./containers/Contact";
import Header from "./components/Header";

export default function Home() {
  return (
   <main>
    <div className="px-5  rounded-xl">
      <Hero/>
      <Skills/>
      <About/>
      <Portfolios/>
      <Expreience/>
      <Education/>
      {/* <Contact/> */}
    </div>
   </main>
  );
}
