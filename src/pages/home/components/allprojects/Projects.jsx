import React from 'react';
import secretswap from '../../../../assets/secretswap.png';
import lawbuddy from '../../../../assets/lawbuddy.jpeg';
import portfolio from '../../../../assets/portfolio.png';

let projects = [
  {
    "name": "Secret Swap",
    "description": "A web app for efficient and secure file sharing, prioritizing user privacy and ease of use. It provides unique file codes instead of trackable links for secure access.",
    "technologies_used": [
      "React.js",
      "Express.js",
      "MongoDB",
      "Cloudinary"
    ],
    "project_cover": secretswap
  },
  {
    "name": "Law Buddy",
    "description": "An AI chatbot built on top of Llama, designed to answer law-based questions and provide legal insights. It offers users a convenient way to get accurate legal information and advice on various legal topics.",
    "technologies_used": [
      "React.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    "project_cover": lawbuddy
  },
  {
    "name": "Portfolio",
    "description": "For showcasing details about me, my projects, and my skills.",
    "technologies_used": [
      "React.js",
      "Tailwind CSS"
    ],
    "project_cover": portfolio
  }
];

function Projects() {
  return (
    <div className="my-5 flex gap-5 justify-center flex-wrap">
      {projects.map((project, index) => (
        <div key={index} className="max-w-sm overflow-hidden shadow-lg bg-Black-Blue rounded-xl my-5 mx-4">
          <img className="w-full" src={project.project_cover} alt={`${project.name} cover`} />
          <div className="px-6 py-4">
            <div className="text-xl mb-2 text-white font-Bebas-Neue">{project.name}</div>
            <p className="text-gray-400 text-base">{project.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {project.technologies_used.map((tech, i) => (
              <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects;
