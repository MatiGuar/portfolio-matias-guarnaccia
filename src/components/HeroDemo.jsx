import React from "react";
import Hero from "./Hero";

const variantLabels = {
  default: "Clásica",
  minimal: "Minimal",
  imageBackground: "Fondo",
  angledLayout: "Angular",
  devIllustration: "Ilustración"
};

const HeroDemo = ({ variant, onChangeVariant }) => {
  const message = variant
    ? `🎨 Has cambiado a la variante "${variantLabels[variant]}"`
    : "";

  return (
    <>
      <Hero
        variant={variant}
        title="¡Hola! Soy Matías Guarnaccia 👋"
        subtitle="Desarrollador web enfocado en frontend moderno y diseño UI/UX. Me especializo en React, Tailwind CSS y WordPress. Apasionado por crear experiencias visuales limpias y funcionales."
        image={
          variant === "devIllustration"
            ? "/hero-dev.svg"
            : "/matias-hero.jpg"
        }
        backgroundImage="/banner-demo.jpg"
        location="📍 Disponible para trabajar remoto desde España"
        cta1={{ label: "Descargar CV", href: "/cv.pdf", download: true }}
        cta2={{
          label: "Ver CV online",
          href: "https://link-a-tu-cv.com"
        }}
        onChangeVariant={onChangeVariant}
      />

      {/* Toast flotante */}
      {variant && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded shadow text-sm animate-fade-in z-50">
          {message}
        </div>
      )}
    </>
  );
};

export default HeroDemo;
