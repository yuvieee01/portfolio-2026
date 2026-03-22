"use client";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Certificates", "Academics", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-5 bg-black/50 backdrop-blur-md border-b border-white/10">
      <motion.div 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-white"
      >
        Portfolio
      </motion.div>
      
      <ul className="hidden md:flex gap-6 text-sm text-gray-400">
        {navLinks.map((link, index) => (
          <motion.li 
            key={link} 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="hover:text-white cursor-pointer transition"
          >
            {link}
          </motion.li>
        ))}
      </ul>

      <motion.button 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition text-sm"
      >
        <FileText size={16} /> Resume
      </motion.button>
    </nav>
  );
}