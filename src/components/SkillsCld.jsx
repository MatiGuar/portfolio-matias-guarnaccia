import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

export default function SkillsCloud() {
  const cloudRef = useRef(null);

  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "WordPress", "JavaScript", "PHP", "HTML", "CSS",
      "React", "Node.js", "Git", "MySQL", "MongoDB",
      "Photoshop", "Figma"
    ];

    // Mapa de colores fijos por etiqueta
    const colorMap = {
      "WordPress": "#21759B",
      "JavaScript": "#F7DF1E",
      "PHP": "#777BB4",
      "HTML": "#E44D26",
      "CSS": "#264DE4",
      "React": "#61DBFB",
      "Node.js": "#68A063",
      "Git": "#F1502F",
      "MySQL": "#00618A",
      "MongoDB": "#4DB33D",
      "Photoshop": "#31A8FF",
      "Figma": "#F24E1E"
    };

    // 📱 Ajusta radio según ancho de pantalla
    const getRadius = () => {
      if (window.innerWidth < 640) return 100;  // móvil
      if (window.innerWidth < 1024) return 150; // tablet
      return 250;                               // desktop
    };

    const options = {
      radius: getRadius(),
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    // Inicializa la nube
    const instance = TagCloud(container, texts, options);
    cloudRef.current = instance;

    // 🔄 Aplica colores constantemente para evitar que se salgan
    const applyColors = () => {
      const spans = document.querySelectorAll(".tagcloud span");
      spans.forEach(span => {
        span.style.color = colorMap[span.innerText] || "#ffffff";
      });
      requestAnimationFrame(applyColors);
    };
    applyColors();

    // 🔄 Reajustar radio al cambiar tamaño de ventana
    const handleResize = () => {
      instance.destroy();
      TagCloud(container, texts, { ...options, radius: getRadius() });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      instance.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Pausar/reanudar al pasar el mouse
  const handleMouseEnter = () => {
    if (cloudRef.current) cloudRef.current.pause();
  };
  const handleMouseLeave = () => {
    if (cloudRef.current) cloudRef.current.resume();
  };

  return (
    <div
      className="flex justify-center items-center h-[400px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="tagcloud text-lg font-medium"></span>
    </div>
  );
}
