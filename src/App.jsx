import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import HeroDemo from "./components/HeroDemo";

const variants = [
  "default",
  "minimal",
  "imageBackground",
  "angledLayout",
  "devIllustration"
];

function App() {
  const [variantIndex, setVariantIndex] = useState(0);
  const variant = variants[variantIndex];

  useEffect(() => {
    const body = document.body;

    if (variant === "imageBackground") {
      body.classList.add("bg-hero-img");
      body.classList.remove("bg-dark"); // por si quedó aplicada
    } else {
      body.classList.remove("bg-hero-img");
      body.classList.add("bg-dark"); // se asegura fondo oscuro en el resto
    }
  }, [variant]);


  const handleChangeVariant = () => {
    const nextIndex = (variantIndex + 1) % variants.length;
    setVariantIndex(nextIndex);
  };

  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <HeroDemo variant={variant} onChangeVariant={handleChangeVariant} />
      <Projects variant={variant} />
      <Contact variant={variant} />
      <Footer variant={variant} />
    </div>
  );
}

export default App;
