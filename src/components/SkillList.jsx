import Skills from "../components/Skills";

const skillsList = [
  "WordPress",
  "Javascript",
  "PHP",
  "Html",
  "Css",
  "React",
  "Node.Js",
  "Git",
  "My SQL",
  "MongoDB",
  "Photoshop",
  "Figma",
];

function SkillList() {
  return (
    <section className="flex flex-col items-center justify-center my-12 px-6">
      {/*<h2 className="text-3xl text-center font-bold mb-6">Habilidades</h2>*/}
      <Skills skills={skillsList} />
    </section>
  );
}

export default SkillList;