"use client";
import { motion } from "framer-motion";
import { Calendar, Briefcase, BrainCircuit, Globe } from "lucide-react";

export default function Experience() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const experiences = [
    {
      role: "Machine Learning Trainee",
      company: "CSE Pathshala",
      date: "Jul 2025",
      icon: <BrainCircuit size={20} className="text-emerald-500 dark:text-emerald-400" />,
      bullets: [
        "Developed a scalable, production-ready 'Resume Ranker' prototype to automate candidate screening, achieving 95% matching accuracy and reducing screening time by 73%.",
        "Engineered a core ranking model utilizing vectorization and similarity scoring to objectively measure resume relevance.",
        "Analyzed ethical data bias and implemented fairness mitigation strategies, specifically addressing gender and experience proxies."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Karamsetu Foundation (NGO)",
      date: "Sept 2024",
      icon: <Globe size={20} className="text-teal-500 dark:text-teal-400" />,
      bullets: [
        "Successfully developed and deployed a fully responsive, live web platform to support the NGO's community initiatives.",
        "Managed end-to-end development, bridging the gap between the organization's real-world impact and their digital presence."
      ]
    }
  ];

  return (
    <section id="experience" className="relative w-full bg-slate-100 dark:bg-black py-32 px-6 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} variants={fadeUpVariants}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Real-World <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 dark:from-green-400 dark:to-green-300">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Applying machine learning architecture and full-stack development to solve actual problems.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-emerald-500/20 dark:border-white/10 ml-3 md:ml-6 space-y-12 pb-8">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              variants={fadeUpVariants}
              className="relative pl-8 md:pl-12"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-slate-100 dark:bg-black rounded-full border-4 border-emerald-500 dark:border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />

              {/* Experience Card */}
              <div className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30 dark:hover:bg-white/[0.04] transition-all duration-300">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                      {exp.icon}
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-gray-400 font-medium">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-full text-sm shrink-0">
                    <Calendar size={16} />
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-gray-400 leading-relaxed">
                      <span className="text-emerald-500 mt-1.5 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
