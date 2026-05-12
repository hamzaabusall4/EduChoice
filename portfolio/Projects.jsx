import { useState } from "react";

import app from "../assets/app.png";
import choice from "../assets/choice.png";
import start from "../assets/start.png";
import login from "../assets/login.png";
import home from "../assets/home.png";
import profile from "../assets/profile.png";



import home2 from "../assets/home2.png";
import school from "../assets/school.png";
import school2 from "../assets/school2.png";
import school3 from "../assets/school3.png";
import school4 from "../assets/school4.png";


import pro1 from "../assets/pro1.PNG";
import pro2 from "../assets/pro2.PNG";
import pro3 from "../assets/pro3.PNG";
import pro4 from "../assets/pro4.PNG";


import wwww from "../assets/wwww.PNG";
import wwswsws from "../assets/wwswsws.PNG";
import sxsxs from "../assets/sxsxs.PNG";




const projects = [
  {
    title: "EduChoice",

    description:
      "Modern school platform built with React JS and bilingual support system for students and schools.",

    image: choice,

    images: [ choice,home2, school,school2, school3, school4 ],

    tech: ["React", "JavaScript", "Tailwind"],

    github: "https://github.com/hamzaabusall4/my-projects",
  },


 {
    title: "rooh travel ",

    description:
      "Analytics dashboard with charts, reports and responsive admin management interface.",

    image: wwww,

    images: [ wwww,wwswsws,sxsxs ],

    tech: ["React", "Chart.js", "Tailwind"],

    

    github: "https://github.com/hamzaabusall4/my-projects",
  },






  {
    title: "App_Salford",

    description:
      "Modern delivery application UI with clean mobile-first experience and elegant user interface.",

    image: app,

    images: [app, start, login, home, profile],

    tech: ["React", "JavaScript", "CSS"],

   github: "https://github.com/hamzaabusall4/my-projects",
  },


  

  {
    title: "Portfolio Website",

    description:
      "Minimal and modern portfolio website with smooth animations and responsive design.",

    image: pro1,

    images: [pro1, pro2, pro3,pro4],

    tech: ["React", "CSS", "Tailwind"],

  

    github: "https://github.com/hamzaabusall4/my-projects",
  },

];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);

    // document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);

    // document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section
        id="projects"
        className="border-t border-zinc-900 py-32"
      >
        <div className="container">

          <p className="text-zinc-500 uppercase tracking-[5px] text-sm mb-5">
            Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-20">
            Selected Work.
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            {projects.map((project, index) => (

              <div
                key={index}
                onClick={() => openProject(project)}
                className="group bg-zinc-950 border border-zinc-800 overflow-hidden cursor-pointer hover:border-zinc-500 transition duration-500 hover:-translate-y-2"
              >

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt=""
                    className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-10">

                  <h3 className="text-3xl font-bold tracking-tight mb-5">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-8 text-[16px] mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">

                    {project.tech.map((item, i) => (

                      <span
                        key={i}
                        className="border border-zinc-700 px-4 py-2 rounded-full text-sm text-zinc-300"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  <button className="text-sm uppercase tracking-[3px] border-b border-white pb-1 hover:text-zinc-400 transition">
                    View Project
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* MODAL */}

      {selectedProject && (

        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-5">

          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl relative">

            {/* CLOSE */}

            <button
              onClick={closeProject}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/70 border border-zinc-700 text-xl hover:border-white transition"
            >
              ✕
            </button>

            {/* IMAGE */}

            <div className="relative">

              <img
                src={selectedProject.images[currentImage]}
                alt=""
                className="w-full h-[550px] object-cover"
              />

              {/* LEFT */}

              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/70 border border-zinc-700 text-2xl hover:border-white transition"
              >
                ←
              </button>

              {/* RIGHT */}

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/70 border border-zinc-700 text-2xl hover:border-white transition"
              >
                →
              </button>

            </div>

            {/* CONTENT */}

            <div className="p-12 md:p-14">

              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                {selectedProject.title}
              </h3>

              <p className="text-zinc-400 text-lg leading-9 max-w-4xl mb-12">
                {selectedProject.description}
              </p>

              {/* TECH */}

              <div className="flex flex-wrap gap-4 mb-14">

                {selectedProject.tech.map((item, i) => (

                  <span
                    key={i}
                    className="border border-zinc-700 px-5 py-3 rounded-full text-sm text-zinc-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-5">

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
                >
                  Live Demo
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-zinc-700 px-8 py-4 rounded-full font-semibold hover:border-white hover:bg-white hover:text-black transition duration-300"
                >
                  Source Code
                </a>

              </div>

            </div>

          </div>

        </div>

      )}
    </>
  );
}

export default Projects;