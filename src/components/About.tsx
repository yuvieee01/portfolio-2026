"use client";
import { motion } from "framer-motion";

export default function About() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="relative w-full bg-slate-100 dark:bg-black py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/20 dark:bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} variants={fadeUpVariants}
        className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-10"
      >
        About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
      </motion.h2>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} variants={fadeUpVariants}
        className="max-w-3xl text-slate-600 dark:text-gray-400 leading-relaxed text-lg md:text-xl space-y-6 mb-20"
      >
        <p>
          I'm a <strong className="text-slate-900 dark:text-white font-medium">Computer Science Engineering student at LPU</strong> (Class of 2027) specializing in AI and Machine Learning. I'm passionate about building end-to-end solutions—from engineering deep learning models with PyTorch and TensorFlow to deploying scalable web applications using React and Django.
        </p>
        <p>
          For me, technology is about solving real-world problems. Whether it's developing "Rakshak," a women's safety app that placed in the Top 10 at the Smart India Hackathon, or building a digital platform for the Karam Setu Foundation, I thrive at the intersection of logic and empathy. I'm constantly expanding my toolkit across MLOps, data engineering, and agile development to build systems that genuinely make a difference.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full z-10">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.3 }} variants={fadeUpVariants}
          className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-8 rounded-2xl text-left shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30 dark:hover:bg-white/[0.06] transition-all duration-300"
        >
          <h3 className="text-emerald-600 dark:text-emerald-400 text-xl font-bold mb-3">AI & Machine Learning</h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
            Engineering predictive models, computer vision pipelines, and robust data architecture using PyTorch, TensorFlow, and SQL.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.4 }} variants={fadeUpVariants}
          className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-8 rounded-2xl text-left shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-teal-500/30 dark:hover:bg-white/[0.06] transition-all duration-300"
        >
          <h3 className="text-teal-600 dark:text-teal-400 text-xl font-bold mb-3">Full-Stack Architecture</h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
            Crafting responsive, data-driven web applications by bridging robust Django backends with modern frontend frameworks like React.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.5 }} variants={fadeUpVariants}
          className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-8 rounded-2xl text-left shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30 dark:hover:bg-white/[0.06] transition-all duration-300"
        >
          <h3 className="text-emerald-500 dark:text-emerald-300 text-xl font-bold mb-3">Impact-Driven Builder</h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
            Recognized in the Top 10 at the Smart India Hackathon. I focus on deploying technology that creates tangible community value.
          </p>
        </motion.div>

      </div>
    </section>
  );
}