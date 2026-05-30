// components/Skills.tsx
'use client'

import { skills, learningSkills } from "@/app/data/portfolioData";
import ShinyText from "./ShinyText";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-32 border-t border-white/10"
    >
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
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
      </motion.div>

      {/* Main Skills */}
      <div className="mb-20">
        <h3 className="text-xl font-bold mb-6 text-white/80">
          Core Skills
        </h3>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-3 transition cursor-default"
              >
                <Icon className="text-4xl" />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Learning Skills */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-cyan-400">
          Currently Learning
        </h3>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {learningSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-linear-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-3 transition cursor-default"
              >
                <Icon className="text-4xl" />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}