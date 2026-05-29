// components/About.tsx
'use client'
import ShinyText from "./ShinyText";
export default function About() {
return ( <section
   id="about"
   className="max-w-7xl mx-auto px-6 py-32 border-t border-white/10"
 > <div className="grid md:grid-cols-2 gap-20 items-center"> <div> <p className="text-cyan-400 uppercase tracking-[0.2em] mb-4 text-sm">
About Me </p>


      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
        <ShinyText
            text='Designing the Future of the Web.'
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

    <div>
      <p className="text-gray-400 text-lg leading-relaxed mb-6">
      I am a 14-year-old developer passionate about building modern, high-quality web applications that feel premium, responsive, and alive. My focus is on creating clean, intuitive interfaces and seamless user experiences that people enjoy using.
      </p>

      <p className="text-gray-500 leading-relaxed">
       I enjoy turning ideas into polished digital experiences, from frontend animations to backend architecture.
      </p>
    </div>
  </div>
</section>


);
}
