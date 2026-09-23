import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, CheckCircle2, ShieldCheck, Lightbulb, ExternalLink, Bookmark } from 'lucide-react';
import { researchData } from '../data/researchData';

export default function Research() {
  const { primaryResearch, basePaperReference } = researchData;

  return (
    <section id="research" className="py-20 bg-dark-950 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research Publications & Literature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Research & Literature Base
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Original research publications and foundational literature supporting my analytical work.
          </p>
        </div>

        {/* 1. PRIMARY RESEARCH PAPER (Sales Trend Analysis) */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-brand-cyan/40 shadow-2xl space-y-8 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900">
          
          {/* Top Banner Row */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-brand-cyan text-dark-950 font-mono text-xs font-bold uppercase tracking-wider">
                  ★ {primaryResearch.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {primaryResearch.researchArea}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {primaryResearch.title}
              </h3>
              <p className="text-xs font-mono text-brand-cyan">
                Authors: {primaryResearch.authors}
              </p>
              <p className="text-[11px] font-mono text-slate-400">
                {primaryResearch.institution}
              </p>
            </div>

            <a
              href={primaryResearch.paperUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan text-dark-950 hover:shadow-lg hover:shadow-brand-cyan/25 transition-all transform hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span>View Research Paper</span>
            </a>
          </div>

          {/* Abstract */}
          <div className="p-5 rounded-xl bg-dark-950 border border-slate-800 space-y-2">
            <h4 className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider">
              Abstract
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {primaryResearch.abstract}
            </p>
          </div>

          {/* Key Contributions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
              Key Contributions & System Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {primaryResearch.keyContributions.map((contrib, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-dark-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{contrib}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 2. BASE PAPER / REFERENCE PAPER (Alternative Credit Assessment) */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 bg-dark-900/60">
          
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-dark-950 border border-slate-700 text-brand-teal font-mono text-xs font-bold uppercase">
                  <Bookmark className="w-3.5 h-3.5 inline mr-1" />
                  {basePaperReference.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {basePaperReference.researchArea}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                {basePaperReference.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Original Authors: {basePaperReference.authors}
              </p>
            </div>

            <a
              href={basePaperReference.paperUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-dark-950 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-brand-teal" />
              <span>View Base Paper</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {basePaperReference.description}
          </p>

        </div>

      </div>
    </section>
  );
}
