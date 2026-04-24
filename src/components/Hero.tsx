"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative h-screen w-full bg-slate-100 dark:bg-black flex items-center px-10 md:px-20 lg:px-32 overflow-hidden transition-colors duration-300">
      
      <div className="absolute -top-32 -right-32 w-125 h-125 bg-teal-400/20 dark:bg-teal-400/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-emerald-400/20 dark:bg-emerald-400/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-10 pt-20 md:pt-0">
        <div className="text-left flex flex-col items-start max-w-full lg:max-w-2xl">
          <motion.p 
            initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1 }} variants={fadeUpVariants}
            className="text-emerald-600 dark:text-emerald-400 tracking-[0.2em] text-xs font-bold mb-4 uppercase"
          >
            Engineering Intelligent Systems.
          </motion.p>

          <motion.h1 
            initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.2 }} variants={fadeUpVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white mb-2 whitespace-normal md:whitespace-nowrap"
          >
            Yuvraj
          </motion.h1>

          <motion.div 
            initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.3 }} variants={fadeUpVariants}
            className="text-2xl md:text-3xl text-slate-600 dark:text-gray-400 font-mono font-light mb-8 mt-2 h-10"
          >
            <TypeAnimation
              sequence={[
                'Tech Enthusiast...', 2000,
                'Artificial Intelligence...', 2000,
                'Machine Learning...', 2000, 
                'Natural Language Processing...', 2000,
                'Deep Learning...', 2000,
                'Data Structures & Algorithms...', 2000,
                'Analytical Thinking...', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }} variants={fadeUpVariants}
            className="text-slate-600 dark:text-gray-400 leading-relaxed mb-10"
          >
            Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. 
            I bridge the gap between data and design, building everything from robust deep learning models to scalable, full-stack web applications.
          </motion.p>

          <motion.div 
            initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.5 }} variants={fadeUpVariants}
            className="flex gap-4"
          >
            {/* LINKED: View Projects to #projects */}
            <a 
              href="#projects" 
              className="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              View Projects <span>→</span>
            </a>

            {/* LINKED: Contact Me to #contact */}
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white dark:bg-white/10 text-slate-900 dark:text-white rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/20 transition inline-flex items-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="hidden md:flex flex-col items-center justify-center relative aspect-square"
        >
          <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="font-mono text-[10px] text-emerald-300/60 leading-relaxed p-6 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 w-full max-w-sm -rotate-3 shadow-2xl">
            <div className="text-gray-500 mb-2">// Yuvraj.Pahwa // AI_Engine // Web_Architecture</div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>def <span className="text-yellow-300">train_ai_model</span>(dataset, epochs):</motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }} className="pl-4">model = <span className="text-sky-300">BuildNeuralNet</span>(dataset)</motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.4 }} className="pl-4">optimizer = <span className="text-sky-300">Adam</span>(lr=0.001)</motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }} className="pl-4"><span className="text-purple-300">for</span> epoch <span className="text-purple-300">in</span> range(epochs):</motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }} className="pl-8">loss = <span className="text-yellow-300">train_step</span>(model, dataset)</motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.0 }} className="pl-8 text-green-300/80"># Model is converging nicely...</motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.2 }} className="pl-4"><span className="text-purple-300">return</span> model</motion.div>
            <div className="mt-4 text-emerald-400">STATUS: TRAINING IN PROGRESS...</div>
            <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="h-1 bg-emerald-500 mt-1" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}