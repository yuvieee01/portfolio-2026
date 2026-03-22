"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Library, MapPin, Calendar } from "lucide-react";

export default function Academics() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech. - Computer Science and Engineering (AI and ML)",
      duration: "Aug 2023 - Present",
      location: "Punjab, India",
      score: "CGPA: 8.44",
      icon: <GraduationCap size={32} className="text-emerald-600 dark:text-emerald-400" />,
      featured: true
    },
    {
      institution: "Bal Bharati Public School",
      degree: "Intermediate (Class XII)",
      duration: "Apr 2022 - Mar 2023",
      location: "Gurgaon, India",
      score: "Percentage: 76.2%",
      icon: <Library size={24} className="text-teal-600 dark:text-teal-400" />,
      featured: false
    },
    {
      institution: "Bal Bharati Public School",
      degree: "Matriculation (Class X)",
      duration: "Apr 2020 - Mar 2021",
      location: "Gurgaon, India",
      score: "Percentage: 91.2%",
      icon: <BookOpen size={24} className="text-teal-600 dark:text-teal-400" />,
      featured: false
    }
  ];

  return (
    <section id="academics" className="relative w-full bg-slate-100 dark:bg-black py-32 px-6 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 dark:bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} variants={fadeUpVariants}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Academic <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 dark:from-green-400 dark:to-green-300">Background</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            My formal education in Computer Science, Artificial Intelligence, and Machine Learning.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              variants={fadeUpVariants}
              className={`group bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30 dark:hover:bg-white/[0.04] transition-all duration-300 ${item.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${item.featured ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20' : 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-slate-900 dark:text-white mb-2 ${item.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                      {item.institution}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold md:text-lg">
                      {item.degree}
                    </p>
                  </div>
                </div>

                {/* Score Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full shadow-lg shrink-0">
                  {item.score}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 dark:text-gray-400 bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-emerald-500" />
                  {item.duration}
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600" />
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-teal-500" />
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
