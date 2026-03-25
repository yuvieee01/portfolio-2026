"use client";
import { motion } from "framer-motion";
import { 
  SiPython, SiCplusplus, SiC, SiJavascript, SiHtml5, 
  SiDjango, SiMysql, SiGit, SiGithub, SiSelenium, SiUbuntu, SiApple 
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaWindows } from "react-icons/fa";
import { Code2, Database, Wrench, Users, Lightbulb, RefreshCcw, Clock, Speaker, Brain, StarIcon, Laptop } from "lucide-react";

export default function Skills() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-emerald-600 dark:text-emerald-500 mb-4" size={32} />,
      skills: [
        { name: "Python", logo: <SiPython /> },
        { name: "Java", logo: <FaJava /> },
        { name: "C++", logo: <SiCplusplus /> },
        { name: "C", logo: <SiC /> },
        { name: "JavaScript", logo: <SiJavascript /> },
        { name: "HTML5", logo: <SiHtml5 /> },
        { name: "CSS3", logo: <FaCss3Alt /> },
      ]
    },
    {
      title: "Backend & Core",
      icon: <Database className="text-teal-600 dark:text-teal-500 mb-4" size={32} />,
      skills: [
        { name: "Django", logo: <SiDjango /> },
        { name: "Data Structures", logo: <Code2 size={16} /> }, 
        { name: "Algorithms", logo: <Code2 size={16} /> },
        { name: "OOP", logo: <Code2 size={16} /> },
        { name: "Modular Architecture", logo: <Database size={16} /> },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-emerald-500 dark:text-emerald-400 mb-4" size={32} />,
      skills: [
        { name: "MySQL", logo: <SiMysql /> },
        { name: "Git", logo: <SiGit /> },
        { name: "GitHub", logo: <SiGithub /> },
        { name: "Selenium", logo: <SiSelenium /> },
        { name: "Ubuntu", logo: <SiUbuntu /> },
        { name: "MacOS", logo: <SiApple /> },
        { name: "Windows", logo: <FaWindows /> },
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-teal-500 dark:text-teal-400 mb-4" size={32} />,
      skills: [
        { name: "Collaboration", logo: <Users size={16} /> },
        { name: "Adaptability", logo: <RefreshCcw size={16} /> },
        { name: "Time Management", logo: <Clock size={16} /> },
        { name: "Communication", logo: <Speaker size={16} /> },
        { name: "Critical Thinking", logo: <Brain size={16} /> },
        { name: "Decision Making", logo: <Lightbulb size={16} /> },
        { name: "Teamwork", logo: <Users size={16} /> },
      ]
    }
  ]
;

  return (
    <section id="skills" className="relative w-full bg-slate-100 dark:bg-black py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300">
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-400/20 dark:bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} variants={fadeUpVariants}
        className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-16"
      >
        My Skill <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 dark:from-green-400 dark:to-green-300">Stack</span>
      </motion.h2>

      {/* Updated to a 2x2 grid for 4 items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full z-10">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.5, delay: index * 0.15 }} 
            variants={fadeUpVariants}
            className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-8 rounded-3xl text-left shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30 dark:hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
          >
            {category.icon}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{category.title}</h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 rounded-full text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-default"
                >
                  <span className="text-lg flex items-center justify-center">{skill.logo}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}