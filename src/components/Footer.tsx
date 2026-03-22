export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-8 px-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
      <p>© 2026 Yuvraj Pahwa. All rights reserved.</p>
      
      <div className="flex gap-8 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
      </div>
    </footer>
  );
}
