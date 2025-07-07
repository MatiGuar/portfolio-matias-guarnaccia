import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectCard({ title, description, link }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 font-medium"
      >
        Ver proyecto →
      </a>
    </motion.div>
  );
}
