"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: "BreakMoney",
      subtitle: "Expense Management & Debt Simplification Platform",
      description: "Engineered a centralized expense-sharing engine using a modular Django architecture. Implemented a custom netting algorithm to simplify group debts and minimize total settlement transactions. Architected complex relational database models to handle multi-party transactions and strict data integrity.",
      tech: ["Django", "Python", "MySQL", "ORM", "Relational DBs"],
      github: "https://github.com/yuvieee01/breakmoney",
      live: "https://yuvieee01.pythonanywhere.com/",
      featured: true
    },
    {
      title: "BidForge",
      subtitle: "British-Style Reverse Auction System",
      description: "A high-performance, full-stack British-style reverse auction platform. Buyers post Requests for Quotations (RFQs), and suppliers compete in real-time by submitting increasingly lower bids. The system ensures fairness through intelligent auto-extension logic and strict transactional integrity.",
      tech: ["Django", "PostgreSQL", "React (Vite)", "Tailwind CSS", "JWT"],
      github: "https://github.com/yuvieee01/BidForge-RFQ",
      live: "",
      featured: true
    },
    {
      title: "Autonomous Productivity Agent",
      subtitle: "Agentic AI Planning System",
      description: "Engineered an autonomous system utilizing a full Observe - Reason - Plan - Act - Reflect loop for dynamic task prioritization. Designed explainable priority models combining task importance and historical performance to generate deterministic planning decisions without relying on ML training.",
      tech: ["Python", "Agentic Architecture", "Algorithmic Logic"],
      github: "https://github.com/yuvieee01/planner-agent",
      live: "",
      featured: true
    },
    {
      title: "Resume Ranker",
      subtitle: "Automated Candidate Screening",
      description: "Developed a scalable Python/spaCy/scikit-learn prototype to automate candidate screening and feature extraction from resumes. Implemented TF-IDF, cosine similarity to rank candidates against job descriptions with a relevance score (0.0 to 1.0). Analyzed ethical data bias considerations (gender, experience proxies).",
      tech: ["Python", "NLP", "Machine Learning"],
      github: "https://github.com/yuvieee01/Resume-Ranker",
      live: "",
      featured: true
    },
    {
      title: "Rakshak & Karamsetu",
      subtitle: "Hackathon & NGO Initiatives",
      description: "Developed 'Rakshak', a women's safety application that secured a Top 10 position in the Smart India Hackathon 2024. Additionally, successfully developed and deployed a responsive live web platform for the Karamsetu Foundation NGO.",
      tech: ["Full Stack Web", "Responsive Design", "Deployment"],
      github: "",
      live: "https://www.karamsetufoundation.org/",
      featured: false
    }
  ];

  return (
    <section id="projects" className="relative w-full bg-slate-50 dark:bg-black py-32 px-6 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
      
      {/* Background Accents */}
      <div className="absolute top-0 right-1/3 w-150 h-150 bg-emerald-400/5 dark:bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl w-full z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} variants={fadeUpVariants}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 dark:from-green-400 dark:to-green-300">Works</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl">
            A showcase of my recent backend architectures, AI-driven agents, and full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              variants={fadeUpVariants}
              className={`group relative bg-white dark:bg-white/2 border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30 dark:hover:bg-white/4 transition-all duration-500 ${project.featured && index === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Top Section */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                    <FolderGit2 size={28} />
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        <Github size={22} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-6">
                  {project.subtitle}
                </p>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section - Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-gray-300 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

