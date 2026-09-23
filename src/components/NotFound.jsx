import React from 'react';
import { Database, Home, ArrowLeft, BarChart2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col items-center justify-center p-4 text-center font-sans selection:bg-brand-cyan/30 selection:text-brand-cyan">
      
      {/* Visual Error Frame */}
      <div className="max-w-md w-full glass-card p-8 rounded-2xl border border-slate-800 space-y-6 shadow-2xl bg-gradient-to-b from-dark-900 to-dark-950">
        
        <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mx-auto shadow-inner">
          <Database className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-gradient font-mono">404</span>
          <h1 className="text-xl font-extrabold text-white">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
            Looks like this page wandered outside the dataset.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-dark-950 border border-slate-800 text-[11px] font-mono text-slate-500">
          Error 404: Null pointer / invalid route index
        </div>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan text-dark-950 hover:shadow-lg hover:shadow-brand-cyan/20 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Portfolio Home</span>
        </a>

      </div>

      <div className="mt-8 text-xs font-mono text-slate-600 flex items-center gap-2">
        <BarChart2 className="w-4 h-4 text-brand-cyan" />
        <span>Mohammad Azhar • Data Analytics & Data Science</span>
      </div>

    </div>
  );
}
