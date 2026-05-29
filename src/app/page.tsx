import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function PortfolioPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return ( <main className="min-h-screen bg-black text-white overflow-hidden">
{/* Background Glow */} <div className="absolute inset-0 -z-10 overflow-hidden"> <div className="absolute top-0 left-0 h-96 w-96 bg-purple-500/20 blur-3xl rounded-full" /> <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-500/20 blur-3xl rounded-full" /> </div>


  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Contact />
  <Footer />
</main>


);
}
