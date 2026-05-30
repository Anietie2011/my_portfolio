// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import ShinyText from "./ShinyText";

export default function Hero() {

  const [years, setYears] = useState(0);
const [projects, setProjects] = useState(0);

useEffect(() => {
  let y = 0;
  let p = 0;

  const targetYears = 3;
const targetProjects = 200;

  const interval = setInterval(() => {
    if (y < targetYears) {
      y += 1;
      setYears(y);
    }

    if (p < targetProjects) {
      p += 2;
      setProjects(p);
    }

    if (y >= targetYears && p >= targetProjects) {
      clearInterval(interval);
    }
  }, 20);

  return () => clearInterval(interval);
}, []);

return (
  <section className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center relative"> <div className="max-w-4xl"> <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
    Fullstack Developer </p>
    
        <a
      href="https://maps.app.goo.gl/6kGerVApy5RsfbEY9"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 text-sm mb-6 inline-block hover:text-cyan-400 transition"
    >
      📍 Ikot Ekpene, Akwa Ibom, Nigeria
    </a>


    <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
      <ShinyText
        text='Building'
        speed={2}
        delay={0}
        color="#cccccc"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
      <br />
      <ShinyText
        text='Digital'
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
      <br />
      <ShinyText
        text='Experiences.'
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
    </h1>

    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
      I create modern, fast, and visually stunning web applications with
      clean code and smooth user experiences.
    </p>

    <div className="flex flex-wrap gap-4">
      <a href="#projects" >
      <button className="px-8 cursor-pointer py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300">
        View Projects
      </button>
      </a>

      <Link href="get-in-touch">
      <button className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition duration-300 cursor-pointer">
        Contact Me
      </button>
      </Link>
    </div>
  </div>

  {/* Floating Cards */}
  <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 space-y-6">
  {/* YEARS */}
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl w-64 hover:-translate-y-2 transition duration-300">
    <p className="text-gray-400 text-sm mb-2"><ShinyText
        text='Experience'
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      /></p>

    <h3 className="text-4xl font-black">
      
      <ShinyText
        text={`${years}+`}
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
    </h3>

    <p className="text-gray-500 mt-2">
    <ShinyText
        text='Years Building Projects'
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
    </p>
  </div>

  {/* PROJECTS */}
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl w-64 hover:-translate-y-2 transition duration-300">
      <p className="text-gray-400 text-sm mb-2"><ShinyText
        text='Projects'
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      /></p>

      <h3 className="text-4xl font-black">
      <ShinyText
        text={`${projects}+`}
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
      </h3>

      <p className="text-gray-500 mt-2">
      <ShinyText
        text='Completed Applications'
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
      </p>
    </div>
  </div>
</section>

);
}
