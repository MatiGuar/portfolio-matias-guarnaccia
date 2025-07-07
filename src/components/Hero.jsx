import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Hero = ({
  title,
  subtitle,
  image,
  cta1,
  cta2,
  location,
  variant = "default",
  backgroundImage = ""
}) => {
  const isMinimal = variant === "minimal";
  const isImageBg = variant === "imageBackground";

  return (
    <section
      className={clsx(
        "min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 text-white",
        {
          "bg-gradient-to-r from-[#0F172A] to-[#1E293B]": variant === "default",
          "bg-slate-900": isMinimal,
          "bg-cover bg-center": isImageBg,
        }
      )}
      style={isImageBg ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">{title}</h1>
        <p className="mt-6 text-lg text-slate-300">{subtitle}</p>
        {location && <p className="mt-2 text-sm text-green-400">{location}</p>}

        <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center md:justify-start">
          {cta1 && (
            <a
              href={cta1.href}
              download={cta1.download}
              className="bg-cyan-400 text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-300 transition"
            >
              {cta1.label}
            </a>
          )}
          {cta2 && (
            <a
              href={cta2.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 px-6 py-3 rounded-full border border-slate-600 hover:bg-slate-700 transition"
            >
              {cta2.label}
            </a>
          )}
        </div>
      </motion.div>

      {!isMinimal && image && (
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="Imagen principal"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-cyan-400"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
