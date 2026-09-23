import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, BarChart2, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#pipeline' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Playground', href: '#playground' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-cyan via-brand-teal to-brand-indigo flex items-center justify-center shadow-lg shadow-brand-cyan/20 group-hover:scale-105 transition-transform">
              <BarChart2 className="w-5 h-5 text-dark-950 font-bold" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-100 tracking-tight text-lg group-hover:text-brand-cyan transition-colors">
                AZHAR<span className="text-brand-cyan">.DATA</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono leading-none">
                B.Tech CSE Data Science '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              download="Azhar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-brand-cyan to-brand-teal text-dark-950 hover:opacity-95 shadow-md shadow-brand-cyan/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={profileData.resumeUrl}
              download="Azhar_Resume.pdf"
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-brand-cyan text-dark-950"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-around">
            <a href={profileData.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-cyan">
              <Github className="w-5 h-5" />
            </a>
            <a href={profileData.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-cyan">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profileData.contact.email}`} className="text-slate-400 hover:text-brand-cyan">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
