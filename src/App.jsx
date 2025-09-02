import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import HeroDemo from "./components/HeroDemo";
import SkillList from "./components/SkillList";
import SkillsBrs from "./components/SkillsBrs";
import SkillsCld from "./components/SkillsCld";

function App() {
  useEffect(() => {
    const body = document.body;
    body.classList.add("bg-hero-img");
    body.classList.remove("bg-dark");
  }, []);

  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <Marquee />
      <HeroDemo />
      {/*<SkillList />*/}
      {/*<SkillsBrs />*/}
      <SkillsCld />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
