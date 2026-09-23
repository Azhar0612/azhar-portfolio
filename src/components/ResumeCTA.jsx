import React from 'react';
import { FileText, Download, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function ResumeCTA() {
  return (
    <section className="py-16 bg-dark-900 border-b border-slate-800/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-2xl border border-brand-cyan/30 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-bold">
              Formal Qualifications Brief
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Want the complete picture?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Download my complete resume to explore my academic background, technical skills, project case studies, and practical data analytics coursework.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" /> B.Tech CSE (Data Science)
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" /> CGPA 8.0
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" /> SQL & Python Stack
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={profileData.resumeUrl}
              download="Azhar_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan text-dark-950 hover:shadow-xl hover:shadow-brand-cyan/25 transition-all transform hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
