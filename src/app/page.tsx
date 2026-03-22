import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-100 dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}