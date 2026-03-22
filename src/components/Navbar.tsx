import { FileText } from "lucide-react";

export default function Navbar() {
  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Certificates", "Academics", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-5 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="text-xl font-bold text-white">Portfolio</div>
      
      <ul className="hidden md:flex gap-6 text-sm text-gray-400">
        {navLinks.map((link) => (
          <li key={link} className="hover:text-white cursor-pointer transition">
            {link}
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition text-sm">
        <FileText size={16} /> Resume
      </button>
    </nav>
  );
}
