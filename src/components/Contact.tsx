"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="relative w-full bg-slate-50 dark:bg-black py-32 px-6 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 dark:bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} variants={fadeUpVariants}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 dark:from-green-400 dark:to-green-300">Connect</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you have a question, a project opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} variants={fadeUpVariants}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:me.yuvraj432@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group">
                  <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 transition-colors">
                    <Mail size={20} className="text-emerald-500" />
                  </div>
                  <span className="font-medium">me.yuvraj432@gmail.com</span>
                </a>
                
                <a href="tel:+919671666230" className="flex items-center gap-4 text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group">
                  <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 transition-colors">
                    <Phone size={20} className="text-teal-500" />
                  </div>
                  <span className="font-medium">+91-9671666230</span>
                </a>
                
                <div className="flex items-center gap-4 text-slate-600 dark:text-gray-400">
                  <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-full">
                    <MapPin size={20} className="text-emerald-500" />
                  </div>
                  <span className="font-medium">Punjab, India</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/10">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Social Profiles</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/yuvieee01" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-600 dark:text-gray-400 hover:text-white hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-300">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/yuvraj432/" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-600 dark:text-gray-400 hover:text-white hover:bg-teal-600 dark:hover:bg-teal-500 transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.4 }} variants={fadeUpVariants}
            className="lg:col-span-3"
          >
            <form className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-gray-300">Your Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition-colors" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-gray-300">Your Email</label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" placeholder="How can I help you?" className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-gray-300">Message</label>
                <textarea id="message" rows={5} placeholder="Write your message here..." className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"></textarea>
              </div>

              <button type="button" className="mt-2 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-emerald-500/20">
                <Send size={18} />
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
