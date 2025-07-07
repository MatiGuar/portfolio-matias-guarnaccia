import React, { useState } from "react";
import Hero from "./Hero";

const variants = ["default", "minimal", "imageBackground"];

const HeroDemo = () => {
  const [variantIndex, setVariantIndex] = useState(0);

  const handleChangeVariant = () => {
    setVariantIndex((prev) => (prev + 1) % variants.length);
  };

  const currentVariant = variants[variantIndex];

  return (
    <>
      <Hero
        variant={currentVariant}
        title="¡Hola! Soy Matías Guarnaccia 👋"
        subtitle="Desarrollador frontend con React, Tailwind CSS y WordPress."
        image="/matias-hero.jpg"
        backgroundImage="/banner-demo.jpg"
        location="📍 Disponible para trabajar remoto desde España"
        cta1={{ label: "📥 Descargar CV", href: "/Cv-Matias Guarnaccia.pdf", download: true }}
        cta2={{ label: "🔎 Ver CV online", href:"/Cv-Matias Guarnaccia.pdf" }}
      />

      <div className="text-center mt-6">
        <button
          onClick={handleChangeVariant}
          className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          Cambiar a variante: <strong>{variants[(variantIndex + 1) % variants.length]}</strong>
        </button>
      </div>
    </>
  );
};

export default HeroDemo;
