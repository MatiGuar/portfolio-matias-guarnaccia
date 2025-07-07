import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Home() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                    ¡Hola! Soy Matías Guarnaccia 👋
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl mb-8">
                    Desarrollador web enfocado en frontend moderno y diseño UI/UX. Me especializo en React, Tailwind CSS y WordPress. Apasionado por crear experiencias visuales limpias y funcionales.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Botón: Descargar CV */}
                    <a
                        href="/Cv-Matias Guarnaccia.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                        <Download size={20} />
                        Descargar CV
                    </a>

                    {/* Botón: Ver CV en nueva pestaña */}
                    <a
                        href="/Cv-Matias Guarnaccia.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                        <Download size={20} />
                        Ver CV online
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
