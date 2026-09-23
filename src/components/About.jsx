import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, BarChart2, CheckCircle2, GraduationCap, Award, Target } from 'lucide-react';
import { profileData } from '../data/profileData';

const highlights = [
  { icon: Database, title: "SQL & Data Modeling", desc: "Crafting optimized queries, CTEs, window functions, and structured database models." },
  { icon: BarChart2, title: "Data Visualization & BI", desc: "Building executive dashboards in Power BI and interactive chart suites for stakeholder decision-making." },
  { icon: Cpu, title: "Python Analytics & ML", desc: "Proficient with Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn classification & regression." },
  { icon: Target, title: "Business Problem Solving", desc: "Translating ambiguous business problems into quantifiable metrics and clear data stories." }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-950 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Raw Data & Strategic Decisions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am a Data Analytics & Data Science student dedicated to transforming complex, unstructured datasets into clear visual stories and reliable machine learning applications.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-brand-cyan" />
                <span>Academic & Technical Focus</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently pursuing my <strong className="text-white">B.Tech in Computer Science Engineering with a Data Science focus</strong> (Graduation 2027) with a cumulative GPA of <strong className="text-brand-cyan">8.0</strong>.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                My approach combines solid computer science fundamentals with analytical rigor. Whether analyzing multi-regional retail transactions or exploring non-traditional credit risk proxies, I emphasize data hygiene, statistical accuracy, and intuitive visual delivery.
              </p>

              {/* Core Skill Checklist */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Analytical Thinking',
                  'SQL Database Querying',
                  'Python Data Stack',
                  'Power BI Storytelling',
                  'Machine Learning Basics',
                  'Problem Solving'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stat Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl text-center border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyan">8.0</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">CGPA Metric</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-teal">2027</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">B.Tech Graduation</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-indigo">6+</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">End-to-End Projects</div>
              </div>
            </div>
          </div>

          {/* Highlight Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ translateY: -3 }}
                  className="glass-card p-5 rounded-xl border border-slate-800/80 hover:border-brand-cyan/40 transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
