"use client";
import { FileText, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navLinks = ["Home", "Skills", "Projects", "Experience", "Certificates", "Academics", "About", "Contact"];
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-5 bg-slate-100/80 dark:bg-black/50 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <motion.div 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-slate-900 dark:text-white"
      >
        Portfolio
      </motion.div>
      
      <ul className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-gray-400">
        {navLinks.map((link, index) => {
          // Fix: Routes "Home" to "#home"
          const sectionId = link === "Home" ? "home" : link.toLowerCase(); 
          
          return (
            <motion.li 
              key={link} 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover:text-emerald-600 dark:hover:text-white transition"
            >
              <a href={`#${sectionId}`} className="block w-full h-full">
                {link}
              </a>
            </motion.li>
          );
        })}
      </ul>

      <motion.div 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
        className="flex items-center gap-4"
      >
        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}

        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white/10 text-white rounded-full border border-transparent dark:border-white/20 hover:bg-slate-800 dark:hover:bg-white/20 transition text-sm">
          <FileText size={16} /> Resume
        </button>
      </motion.div>
    </nav>
  );
}