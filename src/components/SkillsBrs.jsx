import { useEffect, useState } from "react";

const skills = [
  { name: "WordPress", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "PHP", level: 75 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 70 },
  { name: "Git", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "MongoDB", level: 65 },
  { name: "Photoshop", level: 75 },
  { name: "Figma", level: 80 },
];

export default function SkillsBrs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        My Skills
      </h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-white">{skill.name}</span>
              <span className="text-sm font-medium text-blue-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
