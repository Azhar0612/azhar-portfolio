import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Github, Linkedin, Mail, Database, BarChart3 } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden radial-glow border-b border-slate-800/40">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {profileData.status}
              </span>
            </div>

            {/* Hierarchy Header */}
            <div className="space-y-3">
              <div className="text-brand-cyan font-mono text-sm tracking-wider uppercase font-semibold">
                B.Tech CSE — Data Science ('27 | CGPA 8.0)
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient">Mohammad Azhar</span>.
              </h1>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-200 font-sans">
                Data Analytics <span className="text-brand-cyan">•</span> Data Science <span className="text-brand-cyan">•</span> Business Intelligence
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Turning raw, complex datasets into actionable insights, interactive dashboards, and intelligent predictive solutions. Specializing in SQL database modeling, Python data stack (Pandas, Scikit-learn), Power BI visual reporting, and machine learning pipelines.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan text-dark-950 hover:shadow-lg hover:shadow-brand-cyan/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.resumeUrl}
                download="Azhar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold bg-dark-900 hover:bg-dark-850 text-slate-200 border border-slate-700/80 hover:border-brand-cyan/40 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold bg-dark-900 hover:bg-dark-850 text-slate-200 border border-slate-700/80 hover:border-brand-cyan/40 transition-all transform hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4 text-brand-cyan" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Direct Connect Quick Strip */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Direct Links:</span>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-brand-cyan text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-1.5 text-slate-400 hover:text-brand-cyan text-xs font-mono transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </motion.div>

          {/* Right Hero Profile Photo & Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden glass-card p-3 border border-slate-700/70 shadow-2xl">
                
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[11px] text-brand-cyan">azhar_profile.py</span>
                </div>

                {/* Profile Image */}
                <div className="relative mt-3 rounded-xl overflow-hidden group">
                  <img
                    src={profileData.profilePhoto}
                    alt="Mohammad Azhar"
                    className="w-full h-80 sm:h-96 object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg glass-card border border-brand-cyan/30 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">Mohammad Azhar</h3>
                      <p className="text-xs text-brand-cyan font-mono">B.Tech CSE (Data Science) '27</p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-brand-teal/20 text-brand-teal font-mono text-xs font-bold border border-brand-teal/40">
                      CGPA {profileData.cgpa}
                    </div>
                  </div>
                </div>

                {/* Stat Badges */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="p-2.5 rounded-lg bg-dark-900/90 border border-slate-800 flex items-center gap-2.5">
                    <div className="p-2 rounded bg-brand-cyan/15 text-brand-cyan">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Core Stack</div>
                      <div className="text-xs font-bold text-slate-100">SQL & Python</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-dark-900/90 border border-slate-800 flex items-center gap-2.5">
                    <div className="p-2 rounded bg-brand-indigo/15 text-brand-indigo">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Visualization</div>
                      <div className="text-xs font-bold text-slate-100">Power BI & Charts</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
