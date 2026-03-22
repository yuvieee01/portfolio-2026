"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-black flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />

      <p className="text-blue-400 tracking-[0.2em] text-xs font-bold mb-4 uppercase">
        Still learning. Still building. One problem at a time.
      </p>

      <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-2">
        Mannat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Jain</span>
      </h1>

      <div className="text-2xl md:text-3xl text-gray-400 font-light mb-8">
        Problem Solver<span className="animate-pulse text-white">|</span>
      </div>

      <p className="max-w-2xl text-gray-400 leading-relaxed mb-10">
        Computer Science Engineering student specializing in AI and Machine Learning. 
        I build intelligent systems — from real-time computer vision pipelines to predictive ML models.
      </p>

      <div className="flex gap-4">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition flex items-center gap-2">
          View Projects <span>→</span>
        </button>
        <button className="px-8 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
