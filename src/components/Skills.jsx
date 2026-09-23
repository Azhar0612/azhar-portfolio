import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, BarChart3, FileSpreadsheet, Sparkles, PieChart, Search,
  Terminal, Code2, Coffee, FileCode, Table, Binary, LineChart,
  Activity, Cpu, Server, Layout, DatabaseBackup, Palette, GitBranch,
  Github, Box, Wrench, CheckCircle
} from 'lucide-react';
import { skillCategories } from '../data/skillsData';

// Icon Map Lookup
const iconMap = {
  Database, BarChart3, FileSpreadsheet, Sparkles, PieChart, Search,
  Terminal, Code2, Coffee, FileCode, Table, Binary, LineChart,
  Activity, Cpu, Server, Layout, DatabaseBackup, Palette, GitBranch,
  Github, Box
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const selectedCategoryObj = skillCategories.find(c => c.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-20 bg-dark-950 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Tool Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized skills mapped directly to real-world analytics, data science, and software engineering projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-teal text-dark-950 shadow-md shadow-brand-cyan/20 scale-105'
                  : 'bg-dark-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Header Info */}
        <div className="mb-8 p-4 rounded-xl bg-dark-900/60 border border-slate-800 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">{selectedCategoryObj.title}</h3>
            <p className="text-xs text-slate-400">{selectedCategoryObj.subtitle}</p>
          </div>
          <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded border border-brand-cyan/20">
            {selectedCategoryObj.skills.length} Technical Competencies
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedCategoryObj.skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-5 rounded-xl border border-slate-800 hover:border-brand-cyan/40 hover:bg-dark-850/80 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-dark-950 text-brand-cyan border border-slate-800 group-hover:border-brand-cyan/40 group-hover:scale-110 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">{skill.badge}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Real World Project Context */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span className="truncate">
                    <strong className="text-slate-300">Used in:</strong> {skill.projectContext}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
