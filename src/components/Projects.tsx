// components/Projects.tsx
'use client'
import ShinyText from "./ShinyText";
import { featuredProjects, selectedProjects } from "@/app/data/portfolioData";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500"
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item: string, i: number) => (
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
            <motion.a whileHover={{ scale: 1.1 }} href={project.links.github} target="_blank">
              GitHub
            </motion.a>
          )}

          {project.links?.live && (
            <motion.a whileHover={{ scale: 1.1 }} href={project.links.live} target="_blank">
              Live
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32 border-t border-white/10"
    >
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
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}


