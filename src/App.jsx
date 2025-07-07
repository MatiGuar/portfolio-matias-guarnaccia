import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import HeroDemo from "./components/HeroDemo";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <HeroDemo />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
