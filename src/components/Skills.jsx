import React from 'react';

const Skills = () => {
  const skills = ['Java', 'Spring Boot', 'React', 'HTML', 'CSS', 'JavaScript', 'Git', 'SQL'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
