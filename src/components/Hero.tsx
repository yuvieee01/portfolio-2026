"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  // Define the animation to keep the code clean
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative h-screen w-full bg-black flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-[120px]" />

      <motion.p 
        initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1 }} variants={fadeUpVariants}
        className="text-emerald-400 tracking-[0.2em] text-xs font-bold mb-4 uppercase"
      >
        Engineering Intelligent Systems.
      </motion.p>

      <motion.h1 
        initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.2 }} variants={fadeUpVariants}
        className="text-6xl md:text-8xl font-extrabold text-white mb-2"
      >
        Yuvraj <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-300">Pahwa</span>
      </motion.h1>

      <motion.div 
        initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.3 }} variants={fadeUpVariants}
        className="text-2xl md:text-3xl text-gray-400 font-mono font-light mb-8 mt-2 h-[40px]"
      >
        <TypeAnimation
          sequence={[
            'AI & Machine Learning Developer', 2000, 
            'Full Stack Web Developer', 2000,
            'Problem Solver', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <motion.p 
        initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }} variants={fadeUpVariants}
        className="max-w-2xl text-gray-400 leading-relaxed mb-10"
      >
        Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. 
        I bridge the gap between data and design, building everything from robust deep learning models to scalable, full-stack web applications.
      </motion.p>

      <motion.div 
        initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.5 }} variants={fadeUpVariants}
        className="flex gap-4"
      >
        <button className="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition flex items-center gap-2">
          View Projects <span>→</span>
        </button>
        <button className="px-8 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}