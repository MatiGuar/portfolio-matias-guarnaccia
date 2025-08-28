import React from "react";
import { Download, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.css"; // CSS Modules

const Hero = ({
  title,
  subtitle,
  image,
  cta1,
  cta2,
  location,
  variant = "default",
  onChangeVariant,
}) => {
  const isMinimal = variant === "minimal";
  const isImageBg = variant === "imageBackground";
  const isAngled = variant === "angledLayout";
  const isDev = variant === "devIllustration";

  const showImage = !isMinimal && image;
  const titleClean = isMinimal ? title.replace(/👋/g, "") : title;

  // Layout especial para la variante MINIMAL
  if (isMinimal) {
    return (
      <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl font-semibold text-center mb-2">
          {titleClean}
        </h1>
        <p className="text-sm text-gray-300 text-center mb-4">
          Frontend developer · React · Tailwind · WordPress
        </p>

        <span className="inline-block w-2 h-2 rounded-full bg-green-400 mb-6"></span>

        <div className="flex gap-6">
          {cta1 && (
            <a
              href={cta1.href}
              download={cta1.download}
              className="flex items-center gap-2 text-gray-200 hover:text-white transition text-sm"
            >
              <Download className="w-4 h-4" />
              {cta1.label}
            </a>
          )}
          {cta2 && (
            <a
              href={cta2.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition text-sm"
            >
              <Search className="w-4 h-4" />
              {cta2.label}
            </a>
          )}
        </div>

        {onChangeVariant && (
          <button
            onClick={onChangeVariant}
            className="mt-8 text-xs text-gray-500 hover:text-white underline transition"
          >
            Cambiar apariencia
          </button>
        )}
      </section>
    );
  }

  // Otras variantes
  const layoutClasses = isImageBg
    ? "bg-cover bg-center text-white"
    : isAngled
    ? `bg-gradient-to-r from-orange-500 via-black to-blue-700 text-white ${styles.clipDiagonal}`
    : isDev
    ? "bg-[#0F172A] text-white"
    : "bg-[#0F172A] text-white";

  return (
    <section
      className={`min-h-screen w-full px-4 flex justify-center items-center ${layoutClasses}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={variant}
          className={`max-w-6xl w-full ${
            isAngled || isDev
              ? "flex flex-col md:flex-row items-center gap-10"
              : "text-center"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {(isAngled || isDev) && (
            <div
              className={`flex justify-center w-full md:w-1/2 ${
                isDev ? "order-2 md:order-1" : ""
              }`}
            >
              <img
                src={image}
                alt="Foto o avatar"
                className={`${
                  isAngled
                    ? "w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg"
                    : "w-full max-w-md"
                }`}
              />
            </div>
          )}

          <div
            className={`${
              isAngled || isDev
                ? "text-left w-full md:w-1/2"
                : "max-w-4xl mx-auto"
            } ${isDev ? "order-1 md:order-2" : ""}`}
          >
            {(variant === "default" || variant === "imageBackground") &&
              showImage && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={image}
                    alt="Foto de perfil"
                    className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-cyan-400"
                  />
                </div>
              )}

            <h1
              className={`text-4xl md:text-5xl font-bold ${
                isMinimal ? "text-cyan-600" : "text-cyan-400"
              }`}
            >
              {titleClean}
            </h1>

            <p
              className={`mt-6 text-lg ${
                isMinimal ? "text-gray-600" : "text-slate-300"
              }`}
            >
              {subtitle}
            </p>

            {location && (
              <p className="mt-2 text-sm">
                <span className="text-green-400">{location}</span>
              </p>
            )}

            <div
              className={`flex flex-col md:flex-row gap-4 mt-8 ${
                isAngled || isDev ? "justify-start" : "justify-center"
              }`}
            >
              {cta1 && (
                <a
                  href={cta1.href}
                  download={cta1.download}
                  className="bg-cyan-400 text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-300 transition flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {cta1.label}
                </a>
              )}
              {cta2 && (
                <a
                  href={cta2.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 px-6 py-3 rounded-full border border-slate-600 hover:bg-slate-700 transition flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  {cta2.label}
                </a>
              )}
            </div>

            {onChangeVariant && (
              <div className="mt-6">
                <button
                  onClick={onChangeVariant}
                  className={`bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm shadow transition active:scale-95 ${styles.shakeButton}`}
                >
                  {variant === "imageBackground" ? "👉 Presioname 😏" : "Presioname"}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
