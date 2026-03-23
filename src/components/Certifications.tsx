"use client";
import { motion } from "framer-motion";
import { Award, BrainCircuit, Code, Trophy, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Certifications() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 1. ADD YOUR LINKS HERE
  // Replace the "#" with your actual certificate URLs
  const credentials = [
    {
      title: "Complete 2026 Python Bootcamp: Learn Python from Scratch",
      issuer: "Udemy",
      date: "Jan 2026",
      link: "https://drive.google.com/file/d/1iueAtzus-BveRA9w74Jww03T-TUxhhZ3/view?usp=sharing", 
      icon: <Trophy size={28} className="text-emerald-500 dark:text-emerald-400" />
    },
    {
      title: "Master Generative AI & Generative AI tools",
      issuer: "Udemy",
      date: "Aug 2025",
      link: "https://drive.google.com/file/d/1uLE2H6t16PCyT15-QMxKQQlwLm-FeLrg/view?usp=sharing",
      icon: <Award size={28} className="text-teal-500 dark:text-teal-400" />
    },
    {
      title: "Advanced Python for ML & AI",
      issuer: "CSE Pathshala",
      date: "Jul 2025",
      link: "https://drive.google.com/file/d/1_2Bd7uxBUm6NGY5li89oBf4hupJsQnxl/view?usp=sharing",
      icon: <BrainCircuit size={28} className="text-emerald-600 dark:text-emerald-500" />
    },
    {
      title: "Unrevealing Basic Python towards ML/AI",
      issuer: "CSE Pathshala",
      date: "Mar 2024",
      link: "https://drive.google.com/file/d/17gPDMDLgLsNUUZ9r6_l_3a4GgvGkV5LI/view?usp=sharing",
      icon: <Code size={28} className="text-teal-600 dark:text-teal-500" />
    }
  ];

  // Duplicate the array 4 times to ensure enough runway for seamless looping
  const scrollItems = [...credentials, ...credentials, ...credentials, ...credentials];

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId: number;

    const autoScroll = () => {
      // Only scroll if the container exists and the user isn't hovering
      if (container && !isHovered) {
        container.scrollLeft += 1; // Adjust this number to change speed (e.g., 0.5 for slower, 2 for faster)

        // The magic trick: when we scroll past the halfway point, snap back to 0
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section id="certificates" className="relative w-full bg-slate-50 dark:bg-black py-32 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-400/10 dark:bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-350 w-full z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} variants={fadeUpVariants}
          className="mb-16 md:mb-24 text-center px-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Training & <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 dark:from-green-400 dark:to-green-300">Certifications</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning paths in advanced Python, Machine Learning, and Generative AI.
          </p>
        </motion.div>

        {/* Scroll Container Wrapper */}
        <div className="w-full relative">
          
          {/* Left and Right Fade Gradients (Creates the illusion of cards fading in/out) */}
          <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-linear-to-r from-slate-50 dark:from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-linear-to-l from-slate-50 dark:from-black to-transparent z-20 pointer-events-none" />

          {/* Draggable/Scrollable Marquee */}
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)} // Pauses when touched on mobile
            onTouchEnd={() => setIsHovered(false)}
            // The magic CSS to enable native scrolling but hide the physical scrollbar
            className="flex gap-6 md:gap-8 overflow-x-auto w-full px-12 md:px-32 pb-10 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
          >
            {scrollItems.map((cred, index) => (
              <a 
                key={`${cred.title}-${index}`} 
                href={cred.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block w-[320px] md:w-100 shrink-0 bg-white dark:bg-white/2 border border-slate-200 dark:border-white/10 p-8 rounded-3xl flex-col shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/50 dark:hover:bg-white/4 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {cred.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-xs font-bold text-slate-400 dark:text-gray-500 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5">
                      {cred.date}
                    </div>
                    <ExternalLink size={16} className="text-slate-300 dark:text-gray-600 group-hover:text-emerald-500 transition-colors" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide text-sm">
                    {cred.issuer}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}