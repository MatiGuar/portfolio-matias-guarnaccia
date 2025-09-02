import Hero from "./Hero";

function HeroDemo() {
  return (
    <section>
      <Hero
        title="Matías Guarnaccia"
        subtitle="Desarrollador Web con expriencia en creación de interfaces modernas y responsivas con tecnologías como WordPress, JavaScript, HTML, CSS, React y Node.js."
        image="matias-hero.jpg"
        cta1={{ label: "Descargar CV", href: "/Matias_Guarnaccia_Cv.pdf", download: true }}
        cta2={{ label: "Ver CV online", href: "/Matias_Guarnaccia_Cv.pdf" }}
      />
    </section>
  );
}

export default HeroDemo;
