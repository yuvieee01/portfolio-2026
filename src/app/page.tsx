import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}