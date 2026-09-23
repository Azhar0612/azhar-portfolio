import React from 'react';
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { profileData } from '../data/profileData';

const repos = [
  {
    name: 'sales-trend-analysis',
    description: 'End-to-end sales analytics platform using Superstore data, SQLite, Flask REST API, and Q-Learning reinforcement demand prediction.',
    language: 'Python',
    stars: 12,
    forks: 4,
    url: 'https://github.com/Azhar0612/sales-trend-analysis',
    tags: ['Python', 'SQL', 'Power BI', 'Q-Learning', 'Flask']
  },
  {
    name: 'alternative-credit-assessment',
    description: 'Research implementation evaluating non-traditional financial data proxies for credit scoring unbanked demographic groups.',
    language: 'Python',
    stars: 8,
    forks: 2,
    url: profileData.contact.github,
    tags: ['Python', 'Scikit-learn', 'FinTech', 'Research']
  },
  {
    name: 'diabetes-prediction-ml',
    description: 'Supervised binary classification pipeline evaluating diagnostic risk parameters using Pandas and Scikit-learn.',
    language: 'Python',
    stars: 6,
    forks: 1,
    url: profileData.contact.github,
    tags: ['Python', 'Machine Learning', 'Pandas']
  },
  {
    name: 'student-performance-r',
    description: 'Statistical exploratory data analysis and hypothesis testing in R analyzing academic score factors.',
    language: 'R',
    stars: 5,
    forks: 1,
    url: profileData.contact.github,
    tags: ['R', 'ggplot2', 'Statistics']
  }
];

export default function GitHubSection() {
  return (
    <section className="py-20 bg-dark-950 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Open Source Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built with Code
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore code structure, commit history, and technical documentation directly on GitHub.
          </p>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 rounded-xl border border-slate-800 hover:border-brand-cyan/40 hover:bg-dark-850/80 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold font-mono text-base group-hover:text-brand-cyan transition-colors">
                    <Github className="w-4 h-4 text-brand-cyan" />
                    <span>{repo.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.tags.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-dark-950 text-[10px] font-mono text-slate-400 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan"></span>
                  <span>{repo.language}</span>
                </span>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-brand-cyan transition-colors">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All GitHub Link */}
        <div className="text-center mt-10">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-mono font-semibold bg-dark-900 border border-slate-700 hover:border-brand-cyan text-slate-200 hover:text-white transition-all"
          >
            <Github className="w-4 h-4 text-brand-cyan" />
            <span>View Complete GitHub Organization (Azhar0612)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
