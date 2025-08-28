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

    // 📱 Ajustar radio según el ancho de la pantalla
    const getRadius = () => {
      if (window.innerWidth < 640) return 100;  // móvil
      if (window.innerWidth < 1024) return 150; // tablet
      return 200;                               // desktop
    };

    const options = {
      radius: getRadius(),
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    const instance = TagCloud(container, texts, options);
    cloudRef.current = instance;

    // 🎨 aplicar colores personalizados
    const spans = document.querySelectorAll(".tagcloud span");
    spans.forEach((span) => {
      switch (span.innerText) {
        case "WordPress":
          span.style.color = "#21759B";
          break;
        case "JavaScript":
          span.style.color = "#F7DF1E";
          break;
        case "PHP":
          span.style.color = "#777BB4";
          break;
        case "HTML":
          span.style.color = "#E44D26";
          break;
        case "CSS":
          span.style.color = "#264DE4";
          break;
        case "React":
          span.style.color = "#61DBFB";
          break;
        case "Node.js":
          span.style.color = "#68A063";
          break;
        case "Git":
          span.style.color = "#F1502F";
          break;
        case "MySQL":
          span.style.color = "#00618A";
          break;
        case "MongoDB":
          span.style.color = "#4DB33D";
          break;
        case "Photoshop":
          span.style.color = "#31A8FF";
          break;
        case "Figma":
          span.style.color = "#F24E1E";
          break;
        default:
          span.style.color = "#ffffff";
      }
    });

    // 🔄 Reajustar radio al cambiar el tamaño de la ventana
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
