// components/Hero.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ShinyText from "./ShinyText";
import Background3D from "./Background3D";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const targetProjects = 200;
  const targetYears = 3;

  const containerRef = useRef(null);

  useEffect(() => {
    let y = 0;
    let p = 0;

    const interval = setInterval(() => {
      if (y < targetYears) {
        y += 1;
        setYears(y);
      }

      if (p < targetProjects) {
        p += 4; // Faster count
        setProjects(p);
      }

      if (y >= targetYears && p >= targetProjects) {
        clearInterval(interval);
      }
    }, 30);

    // GSAP Entrance Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(".hero-tag", { opacity: 0, y: 20, duration: 0.8 })
        .from(".hero-title", { opacity: 0, y: 40, stagger: 0.2 }, "-=0.4")
        .from(".hero-subtitle", { opacity: 0, y: 20 }, "-=0.6")
        .from(".hero-buttons", { opacity: 0, y: 20 }, "-=0.8");
    }, containerRef);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <Background3D />
      
      <div className="max-w-4xl relative z-10 py-20">
        <p className="hero-tag uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
          Fullstack Developer
        </p>
        
        <motion.a
          whileHover={{ x: 5, color: "#22d3ee" }}
          href="https://maps.app.goo.gl/6kGerVApy5RsfbEY9"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-subtitle text-gray-400 text-sm mb-6 inline-block transition"
        >
          📍 Ikot Ekpene, Akwa Ibom, Nigeria
        </motion.a>

        <h1 className="hero-title text-5xl md:text-8xl font-black leading-none mb-8">
          <ShinyText text='Building' speed={2} color="#cccccc" shineColor="#ffffff" />
          <br />
          <ShinyText text='Digital' speed={2} color="#dddddd" shineColor="#ffffff" />
          <br />
          <ShinyText text='Experiences.' speed={2} color="#dddddd" shineColor="#ffffff" />
        </h1>

        <p className="hero-subtitle text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          I create modern, fast, and visually stunning web applications with
          clean code and smooth user experiences.
        </p>

        <div className="hero-buttons flex flex-wrap gap-4 mb-8">
          <a href="#projects">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 cursor-pointer py-4 bg-white text-black rounded-2xl font-semibold transition duration-300"
            >
              View Projects
            </motion.button>
          </a>

          <Link href="get-in-touch">
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="px-8 py-4 border border-white/20 rounded-2xl transition duration-300 cursor-pointer text-white"
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="lg:absolute right-10 top-1/2 lg:-translate-y-1/2 space-y-6 z-10 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
        {/* YEARS */}
        <motion.div 
          initial={{ opacity: 0, y: 50, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="hero-card bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl w-64 transition duration-300"
        >
          <p className="text-gray-400 text-sm mb-2">
            Experience
          </p>

          <h3 className="text-4xl font-black text-white">
            {years}+
          </h3>

          <p className="text-gray-500 mt-2">
            Years Building Projects
          </p>
        </motion.div>

        {/* PROJECTS */}
        <motion.div 
          initial={{ opacity: 0, y: 50, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="hero-card bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl w-64 transition duration-300"
        >
          <p className="text-gray-400 text-sm mb-2">
            Projects
          </p>

          <h3 className="text-4xl font-black text-white">
            {projects}+
          </h3>

          <p className="text-gray-500 mt-2">
            Completed Applications
          </p>
        </motion.div>
      </div>


    </section>
  );
}


