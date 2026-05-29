// components/Contact.tsx
'use client'
import Link from "next/link";
import ShinyText from "./ShinyText";
export default function Contact() {
return ( <section
   id="contact"
   className="max-w-7xl mx-auto px-6 py-32 border-t border-white/10"
 > <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[40px] p-10 md:p-20 text-center backdrop-blur-xl"> <p className="text-cyan-400 uppercase tracking-[0.2em] mb-4 text-sm">
Contact </p>

 
    <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
      <ShinyText
        text="Let's Build"
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
        text="Something Amazing."
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
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
      Have an idea, startup, or project? Let's create something modern and
      unforgettable together.
    </p>

    <Link href="get-in-touch">
    <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 cursor-pointer">
      Get In Touch
    </button>
    </Link>
  </div>
</section>
 

);
}
