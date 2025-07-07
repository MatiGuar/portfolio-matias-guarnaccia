import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">
        Proyectos destacados
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Sezzadio Sur"
          description="Sitio institucional para distribuidora mayorista de autopartes. Diseño moderno y responsive con WordPress."
          link="https://sezzadio.com.ar"
        />
        <ProjectCard
          title="Plasma Podcast"
          description="Landing page para podcast musical con estética minimalista. Diseño adaptativo y visual moderno."
          link="#"
        />
        <ProjectCard
          title="App de tareas en React"
          description="CRUD completo usando React Hooks y localStorage. Diseño limpio y funcional."
          link="#"
        />
      </div>
    </motion.section>
  );
}
