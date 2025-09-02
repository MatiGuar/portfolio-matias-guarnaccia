import React from "react";

export default function Marquee() {
  const text = (
    <>
      Este sitio fue creado con{" "}
      <span className="react-animate font-bold">React Js</span>  y{" "}
      <span className="tailwind-animate font-bold">Tailwind CSS</span> 
    </>
  );

  const repeatCount = 8;
  const marqueeItems = Array.from({ length: repeatCount }, (_, i) => (
    <span
      key={i}
      className="mx-8 inline-block text-sm sm:text-base md:text-lg font-medium"
    >
      {text}
    </span>
  ));

  return (
    <div className="relative w-full mt-16 overflow-hidden bg-zinc-900 text-zinc-100">
      {/* Contenedor animado */}
      <div className="inline-block whitespace-nowrap animate-marquee relative z-10">
        {marqueeItems}
        {marqueeItems}
      </div>

      {/* Gradientes encima del texto */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-zinc-900 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-zinc-900 z-20 pointer-events-none" />

      {/* Estilos de animación personalizados */}
      <style>
        {`
          @keyframes react-glow {
            0%, 100% { color: #42A5F5; text-shadow: 0 0 2px #60dafb, 0 0 2px #60dafb; }
            50% { color: #ffffff; text-shadow: 0 0 2px #60dafb, 0 0 5px #60dafb; }
          }
          @keyframes tailwind-glow {
            0%, 100% { color: #29cce5; text-shadow: 0 0 2px #38bdf8, 0 0 2px #38bdf8; }
            50% { color: #ffffff; text-shadow: 0 0 2px #38bdf8, 0 0 5px #38bdf8; }
          }
          .react-animate {
            animation: react-glow 4s infinite;
          }
          .tailwind-animate {
            animation: tailwind-glow 4s infinite;
          }
        `}
      </style>
    </div>
  );
}
