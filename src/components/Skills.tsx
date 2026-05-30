// components/Skills.tsx
'use client'

import { skills, learningSkills } from "@/app/data/portfolioData";
import ShinyText from "./ShinyText";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-32 border-t border-white/10"
    >
      {/* Title */}
      <div className="mb-16">
        <p className="text-cyan-400 uppercase text-sm mb-4">
          Skills
        </p>
        <h2 className="text-4xl md:text-6xl font-black">
          <ShinyText
            text='Tech Stack'
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

      {/* Main Skills */}
<div className="mb-20">
  <h3 className="text-xl font-bold mb-6 text-white/80">
    Core Skills
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {skills.map((skill, index) => {
      const Icon = skill.icon;

      return (
        <div
          key={index}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-3 hover:bg-white/10 transition"
        >
          <Icon className="text-4xl" />
          <span>{skill.name}</span>
        </div>
      );
    })}
  </div>
</div>

{/* Learning Skills */}
<div>
  <h3 className="text-xl font-bold mb-6 text-cyan-400">
    Currently Learning
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {learningSkills.map((skill, index) => {
      const Icon = skill.icon;

      return (
        <div
          key={index}
          className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition"
        >
          <Icon className="text-4xl" />
          <span>{skill.name}</span>
        </div>
      );
    })}
  </div>
</div>
    </section>
  );
}