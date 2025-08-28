import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">¿Charlamos?</h2>
      <p className="text-gray-300 text-lg mb-6">
        Estoy disponible para propuestas laborales, proyectos freelance o colaboraciones.
      </p>
      <a
        href="mailto:matiasguarnaccia@outlook.es"
        className="inline-block text-cyan-400 hover:text-cyan-300 text-lg font-medium underline"
      >
        matiasguarnaccia@outlook.es
      </a>
    </motion.section>
  );
}
