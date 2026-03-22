import { Github, Linkedin, Mail, ArrowUpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-white/10 py-8 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-gray-500 text-sm transition-colors duration-300 gap-6">
      
      {/* Copyright */}
      <p>© {new Date().getFullYear()} Yuvraj Pahwa. All rights reserved.</p>
      
      {/* Social Links */}
      <div className="flex items-center gap-6">
        <a 
          href="https://github.com/yuvieee01" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://www.linkedin.com/in/yuvraj432/" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="mailto:me.yuvraj432@gmail.com" 
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Back to Top Button */}
      <a 
        href="#home" 
        className="flex items-center gap-2 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        Back to Top <ArrowUpCircle size={18} />
      </a>
      
    </footer>
  );
}