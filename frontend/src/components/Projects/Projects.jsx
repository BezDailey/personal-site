import React from "react";

import styles from "./Projects.module.css";

import Project from "../../components/Project/Project";

/**
 * Projects section listing portfolio projects as Project cards.
 * Data is hardcoded as an array of project objects (not from a CMS).
 * @returns {React.JSX.Element}
 */
const Projects = () => {
  const projects = [
    {
      name: "Kingdom Call Global",
      year: "2025",
      description: "Production website for a ministry organization. Built with React 19 and Vite, featuring a token-based design system, React Router for multi-page navigation, and a photo gallery with keyboard navigation.",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
      ],
      github: "https://github.com/BezDailey/kingdom-call-global",
      website: "https://www.kingdomcallglobal.com",
    },
    {
      name: "Personal Site",
      year: "2023",
      description: "Personal portfolio with a responsive two-column layout, shared navigation, and CSS Modules. Built with React and served as a static site.",
      skills: [
        "React",
        "CSS Modules",
      ],
      github: "https://github.com/BezDailey/Personal-Site",
      website: "https://www.jabezdailey.com",
    },
  ];
  return (
    <div className={styles.projects}>
      {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            year={project.year}
            description={project.description}
            skills={project.skills}
            github={project.github}
            website={project.website}
            comingSoon={project.comingSoon}
          />
        ))}
    </div>
  );
};

export default Projects;
