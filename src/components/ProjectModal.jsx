import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, FileText, Layers, CheckCircle2, AlertTriangle, Lightbulb, Image as ImageIcon, BarChart3, TrendingUp, DollarSign, PieChart, Cpu } from 'lucide-react';

const galleryTabs = [
  { id: 'dashboard', label: 'Dashboard Overview', icon: BarChart3 },
  { id: 'kpi', label: 'KPI Metrics', icon: DollarSign },
  { id: 'trend', label: 'Sales Trend Chart', icon: TrendingUp },
  { id: 'profit', label: 'Profit Analysis', icon: PieChart },
  { id: 'pipeline', label: '8-Step Data Pipeline', icon: Layers },
  { id: 'ml', label: 'Q-Learning Output', icon: Cpu }
];

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/80 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-dark-950/60 sticky top-0 z-20 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan font-mono text-xs font-semibold">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">• {project.period}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{project.title}</h2>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-dark-850 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-slate-300 text-sm">
            
            {/* Project Overview Banner */}
            <div className="glass-card p-5 rounded-xl border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider text-brand-cyan">
                Project Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.shortDescription}
              </p>
              
              {/* Tech Stack Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-dark-950 border border-slate-700 text-xs font-mono text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual 8-Step Pipeline Flow for Sales Trend Analysis */}
            {project.id === 'sales-trend-analysis' && (
              <div className="p-5 rounded-xl bg-dark-950 border border-brand-cyan/30 space-y-4">
                <h4 className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>8-Step End-to-End Data Pipeline Architecture</span>
                </h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs font-mono">
                  {[
                    'RAW DATA',
                    'DATA CLEANING',
                    'SQL / PYTHON',
                    'EXPLORATORY EDA',
                    'VISUALIZATION',
                    'POWER BI DASHBOARD',
                    'Q-LEARNING',
                    'INSIGHTS'
                  ].map((step, idx) => (
                    <div key={idx} className="p-2 rounded bg-dark-900 border border-slate-800 flex flex-col items-center justify-center gap-1">
                      <span className="text-[10px] text-brand-teal font-bold">{idx + 1}</span>
                      <span className="text-slate-200 text-[10px] leading-tight">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive Screenshot & Visualization Gallery Tabs for Major Projects */}
            {project.id === 'sales-trend-analysis' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-brand-cyan" />
                    <span>Case Study Visual Gallery & Screenshots</span>
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500">Select view tab below</span>
                </div>

                {/* Tabs Selector */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
                  {galleryTabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 ${
                          activeTab === tab.id
                            ? 'bg-brand-cyan text-dark-950 font-bold'
                            : 'bg-dark-950 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Visual Content Display */}
                <div className="p-5 rounded-xl bg-dark-950 border border-slate-800 font-mono text-xs space-y-3">
                  {activeTab === 'dashboard' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-800 pb-2">
                        <span className="text-brand-cyan font-bold">● Power BI Interactive Dashboard View</span>
                        <span className="text-slate-500">Superstore Transactions</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-3 bg-dark-900 rounded border border-slate-800">
                          <div className="text-[10px] text-slate-500">SALES REVENUE</div>
                          <div className="text-sm font-extrabold text-white">$2,296,928.10</div>
                        </div>
                        <div className="p-3 bg-dark-900 rounded border border-slate-800">
                          <div className="text-[10px] text-slate-500">NET PROFIT</div>
                          <div className="text-sm font-extrabold text-brand-teal">$286,310.75</div>
                        </div>
                        <div className="p-3 bg-dark-900 rounded border border-slate-800">
                          <div className="text-[10px] text-slate-500">ORDERS COUNT</div>
                          <div className="text-sm font-extrabold text-brand-cyan">9,992</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'kpi' && (
                    <div className="p-4 bg-dark-900 rounded border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-white">Verified Project KPI Metrics:</div>
                      <ul className="space-y-1 text-slate-300 text-xs font-mono">
                        <li>• Total Sales Processed: <span className="text-brand-cyan font-bold">$2,296,928.10</span></li>
                        <li>• Total Net Profit: <span className="text-brand-teal font-bold">$286,310.75</span></li>
                        <li>• Total Transactional Orders: <span className="text-white font-bold">9,992</span></li>
                        <li>• Q-Learning Forecasted Demand Volume: <span className="text-brand-cyan font-bold">$651,962.74</span></li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'trend' && (
                    <div className="p-4 bg-dark-900 rounded border border-slate-800 space-y-2 text-center">
                      <div className="text-xs font-bold text-white mb-2">Monthly Sales & Profit Growth Curve</div>
                      <div className="h-28 bg-dark-950 rounded flex items-end justify-between p-3 gap-1">
                        {[40, 55, 48, 62, 75, 70, 85, 80, 92, 98, 110, 125].map((val, idx) => (
                          <div key={idx} className="flex-1 bg-brand-cyan/80 rounded-t hover:bg-brand-cyan transition-all" style={{ height: `${val / 1.3}%` }} title={`Month ${idx + 1}: ${val}`} />
                        ))}
                      </div>
                      <div className="text-[10px] text-slate-500 pt-1">Monthly Trend Distribution (Jan - Dec)</div>
                    </div>
                  )}

                  {activeTab === 'profit' && (
                    <div className="p-4 bg-dark-900 rounded border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-white">Product Category Profit Contribution:</div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Technology (Copiers, Phones, Accessories)</span>
                            <span className="text-brand-cyan font-bold">42%</span>
                          </div>
                          <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-cyan h-full w-[42%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Office Supplies (Storage, Paper, Binders)</span>
                            <span className="text-brand-teal font-bold">34%</span>
                          </div>
                          <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-teal h-full w-[34%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Furniture (Chairs, Tables, Bookcases)</span>
                            <span className="text-brand-indigo font-bold">24%</span>
                          </div>
                          <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-indigo h-full w-[24%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'pipeline' && (
                    <div className="p-4 bg-dark-900 rounded border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-white mb-2">Data Processing & ETL Steps:</div>
                      <div className="text-[11px] text-slate-300 space-y-1">
                        <div>1. Raw CSV Ingestion → 2. Pandas Cleansing & NaN Imputation → 3. SQLite Database Querying</div>
                        <div>4. Aggregated KPI Calculation → 5. Chart.js & Power BI Reporting → 6. Reinforcement Q-Learning Prediction</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ml' && (
                    <div className="p-4 bg-dark-900 rounded border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-white">Q-Learning Reinforcement Update Function:</div>
                      <pre className="text-brand-cyan text-[11px] bg-dark-950 p-2 rounded overflow-x-auto">
                        <code>q_table[state, action] = reward + gamma * max(q_table[next_state])</code>
                      </pre>
                      <div className="text-[11px] text-slate-400">Forecasted Sales Output: $651,962.74</div>
                    </div>
                  )}

                  <div className="text-[10px] text-slate-500 text-center pt-1 border-t border-slate-800/60">
                    💡 Custom screenshots can be added directly into <span className="text-brand-cyan">public/assets/projects/sales-trend/</span>
                  </div>
                </div>
              </div>
            )}

            {/* Document PDF CTA Link if available */}
            {project.paperUrl && (
              <div className="p-4 rounded-xl bg-dark-950 border border-brand-cyan/30 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-brand-cyan" />
                  <div>
                    <div className="text-xs font-bold text-white">{project.paperLabel}</div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {project.isAuthor ? 'Published Research Paper by Mohammad Azhar' : 'Base Paper / Reference Study'}
                    </div>
                  </div>
                </div>

                <a
                  href={project.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-cyan text-dark-950 font-bold text-xs hover:opacity-90 transition-all"
                >
                  <span>Open PDF Document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Problem & Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-dark-950/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                  The Problem
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {project.overview?.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-950/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono text-brand-teal font-bold uppercase tracking-wider">
                  The Objective
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {project.overview?.objective}
                </p>
              </div>
            </div>

            {/* Dataset & Methodology */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider">
                Dataset & Analytical Methodology
              </h3>
              <div className="p-5 rounded-xl bg-dark-950/40 border border-slate-800 space-y-3">
                <div className="text-xs">
                  <strong className="text-brand-cyan font-mono">Dataset Used: </strong>
                  <span>{project.overview?.dataset}</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-brand-cyan font-mono">Methodology: </strong>
                  <span>{project.overview?.methodology}</span>
                </div>
              </div>
            </div>

            {/* Key Insights & Results */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider">
                Key Insights & Analytics Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.overview?.keyInsights?.map((insight, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-dark-950 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Key Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-dark-950/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Technical Challenges</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.overview?.challenges}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-950/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  <span>What I Learned</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.overview?.whatILearned}
                </p>
              </div>
            </div>

          </div>

          {/* Footer Action Links */}
          <div className="p-6 border-t border-slate-800 bg-dark-950 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-850 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-cyan text-dark-950 font-bold text-xs hover:opacity-90 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="px-3 py-1.5 rounded-lg bg-dark-950 text-slate-400 border border-slate-800 text-xs font-mono">
                  Source-Only / Local Pipeline
                </span>
              )}

              {project.paperUrl && (
                <a
                  href={project.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-teal text-dark-950 font-bold text-xs hover:opacity-95 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>{project.paperLabel}</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
            >
              Close Drawer
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
