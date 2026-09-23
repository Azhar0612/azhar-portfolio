import React from 'react';
import { ArrowUp, BarChart2, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/80 pb-8">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-cyan text-dark-950 font-bold flex items-center justify-center">
                <BarChart2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                MOHAMMAD <span className="text-brand-cyan">AZHAR</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Data Analytics • Data Science • Technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="text-slate-400 hover:text-brand-cyan transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-cyan/40 transition-all flex items-center gap-2 font-mono text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Copyright & Quote */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © 2026 Mohammad Azhar. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with curiosity, data & code.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
