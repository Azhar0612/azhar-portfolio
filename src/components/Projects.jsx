import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, ArrowRight, Layers, Sparkles, Filter, BarChart3, Database, FileText, Bookmark } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const heroProject = projectsData.find(p => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter(p => !p.featured);

  const categories = ['All', 'Data Analytics', 'Machine Learning', 'Data Science', 'Web Development'];

  const filteredSecondary = activeFilter === 'All'
    ? secondaryProjects
    : secondaryProjects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="py-20 bg-dark-900 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Case Studies & Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Data Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            End-to-end data analytics platforms, predictive models, and research implementations built with SQL, Python, and Power BI.
          </p>
        </div>

        {/* HERO FEATURED PROJECT CARD */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden glass-card border border-brand-cyan/40 p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Hero Project Info */}
              <div className="lg:col-span-7 space-y-5">
                
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-brand-cyan text-dark-950 font-mono text-xs font-bold uppercase tracking-wider">
                    ★ {heroProject.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {heroProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {heroProject.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {heroProject.shortDescription}
                </p>

                {/* Architecture Highlights */}
                <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="text-brand-cyan font-bold uppercase text-[10px]">Data Flow Architecture:</div>
                  <div className="flex flex-wrap items-center gap-1.5 text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-dark-900 border border-slate-700">CSV Logs</span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                    <span className="px-2 py-0.5 rounded bg-dark-900 border border-slate-700">Pandas ETL</span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                    <span className="px-2 py-0.5 rounded bg-dark-900 border border-slate-700">SQLite</span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                    <span className="px-2 py-0.5 rounded bg-dark-900 border border-slate-700">Power BI & Flask</span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                    <span className="px-2 py-0.5 rounded bg-brand-teal/20 text-brand-teal border border-brand-teal/30">Q-Learning Prediction</span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {heroProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-dark-950 border border-slate-800 text-xs font-mono text-brand-cyan">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(heroProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-brand-cyan to-brand-teal text-dark-950 hover:shadow-lg hover:shadow-brand-cyan/20 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={heroProject.paperUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-dark-850 hover:bg-slate-800 text-slate-200 border border-brand-cyan/50 hover:border-brand-cyan transition-all"
                  >
                    <FileText className="w-4 h-4 text-brand-cyan" />
                    <span>{heroProject.paperLabel}</span>
                  </a>

                  <a
                    href={heroProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-dark-950 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Visual Dashboard Mockup Card */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-xl overflow-hidden bg-dark-950 border border-slate-800 p-4 font-mono text-xs space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4 text-brand-cyan" />
                      <span className="font-bold text-slate-200">superstore_analytics.dashboard</span>
                    </div>
                    <span className="text-emerald-400 text-[10px]">● SQLite Active</span>
                  </div>

                  {/* Dashboard Metrics Mockup */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded bg-dark-900 border border-slate-800/80">
                      <div className="text-[10px] text-slate-500">TOTAL REVENUE</div>
                      <div className="text-sm font-extrabold text-white">$826,000</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">+14.2% YoY</div>
                    </div>
                    <div className="p-2.5 rounded bg-dark-900 border border-slate-800/80">
                      <div className="text-[10px] text-slate-500">PROFIT MARGIN</div>
                      <div className="text-sm font-extrabold text-brand-cyan">20.35%</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Top: Tech Category</div>
                    </div>
                  </div>

                  {/* Visual Bar Graph Graphic */}
                  <div className="p-3 rounded bg-dark-900 border border-slate-800/80 space-y-2">
                    <div className="text-[10px] text-slate-400 uppercase">Category Profit Shares</div>
                    
                    <div className="space-y-1.5">
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-300 mb-0.5">
                          <span>Technology</span>
                          <span>42%</span>
                        </div>
                        <div className="w-full bg-dark-950 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-brand-cyan h-full w-[42%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[10px] text-slate-300 mb-0.5">
                          <span>Office Supplies</span>
                          <span>34%</span>
                        </div>
                        <div className="w-full bg-dark-950 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-brand-teal h-full w-[34%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[10px] text-slate-300 mb-0.5">
                          <span>Furniture</span>
                          <span>24%</span>
                        </div>
                        <div className="w-full bg-dark-950 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-brand-indigo h-full w-[24%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 text-center pt-1">
                    Repository: <span className="text-brand-cyan underline">github.com/Azhar0612/sales-trend-analysis</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Secondary Projects Category Filter */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Additional Projects & Research</span>
            <span className="text-xs font-mono text-slate-400">({filteredSecondary.length})</span>
          </h3>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === cat
                    ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40'
                    : 'bg-dark-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSecondary.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card p-6 rounded-xl border border-slate-800 hover:border-brand-cyan/40 hover:bg-dark-850/80 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-dark-950 border border-slate-700 text-brand-cyan font-mono text-[11px]">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      project.isBasePaper
                        ? 'bg-slate-900 text-slate-300 border-slate-700'
                        : 'bg-brand-teal/10 text-brand-teal border-brand-teal/20'
                    }`}>
                      {project.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-dark-950 text-[10px] font-mono text-slate-400 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-dark-950 text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Action Buttons Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-brand-cyan hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-dark-950 border border-slate-700 hover:border-brand-teal text-brand-teal transition-all flex items-center gap-1"
                      title={project.paperLabel}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{project.paperLabel}</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors p-1"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

    </section>
  );
}
