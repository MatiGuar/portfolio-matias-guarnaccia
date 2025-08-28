function Skills({ skills }) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-gray-700 transition cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default Skills;