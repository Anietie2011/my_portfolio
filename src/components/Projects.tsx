// components/Projects.tsx
'use client'
import ShinyText from "./ShinyText";
import { featuredProjects, selectedProjects } from "@/app/data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32 border-t border-white/10"
    >
      {/* FEATURED PROJECTS */}
      {/* <div className="mb-16">
        <p className="text-cyan-400 uppercase text-sm mb-4">
          Featured Projects
        </p>

        <h2 className="text-4xl md:text-6xl font-black">
          My Best Work
        </h2>
      </div> */}

  {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-500 hover:-translate-y-2"
          >
           
            <div className="h-52 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-8 flex items-center justify-center text-6xl font-black text-white/20">
              0{index + 1}
            </div>

           
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm text-cyan-400">
              {project.links?.github && (
                <a href={project.links.github} target="_blank">
                  GitHub
                </a>
              )}

              {project.links?.live && (
                <a href={project.links.live} target="_blank">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div> */}

      {/* SELECTED PROJECTS */}
      <div className="mb-10">
        <p className="text-cyan-400 uppercase text-sm mb-4">
          Selected Projects
        </p>

        <h2 className="text-3xl md:text-5xl font-black">
          <ShinyText
            text="What I'm Planning to build"
            speed={2}
            delay={0}
            color="#dddddd"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {selectedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-bold mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm text-cyan-400">
              {project.links?.github && (
                <a href={project.links.github} target="_blank">
                  GitHub
                </a>
              )}

              {project.links?.live && (
                <a href={project.links.live} target="_blank">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

