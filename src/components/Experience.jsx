import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Award, Trophy, GraduationCap } from 'lucide-react';

const timelineEntries = [
  {
    type: 'internship',
    period: 'August 2026',
    title: 'Data Analytics Intern',
    organization: 'Averixis Solutions Pvt. Ltd (Remote)',
    description: 'Completed a structured internship program in Data Analytics at an ISO 9001:2015-certified organization.',
    achievements: [
      'Data Analytics Internship Certificate — Averixis Solutions Pvt. Ltd (2026)',
      'Applied real-world data cleaning, exploratory data analysis, and dashboard reporting methodologies.'
    ]
  },
  {
    type: 'internship',
    period: 'May – July 2026',
    title: 'AI/ML Intern',
    organization: 'InternPe (Remote)',
    description: 'Completed a practical hands-on internship in the Artificial Intelligence and Machine Learning domain.',
    achievements: [
      'AI/ML Internship Certificate — InternPe (2026)',
      'Trained, evaluated, and deployed predictive classification and regression models in Python.'
    ]
  },
  {
    type: 'hackathon',
    period: '2026',
    title: 'HACKATHONZ 2026 Participant (Hack2Hire)',
    organization: 'Malla Reddy University / Hack With India & Devnovate',
    description: 'Participated in a national-level 24-hour hackathon hosted by the Department of Data Science.',
    achievements: [
      'Built and demonstrated data-driven application prototypes under high-tempo 24-hour constraints.'
    ]
  },
  {
    type: 'project',
    period: '2024 - Present',
    title: 'Data Analytics & ML Project Lead',
    organization: 'Independent Project Portfolio',
    description: 'Built end-to-end data analytics platforms, interactive Power BI dashboards, and ML applications.',
    achievements: [
      'Sales Trend Analysis Platform & Research Paper publication.',
      'Superstore retail transaction data analytics and Q-Learning forecasting engine.'
    ]
  },
  {
    type: 'education',
    period: 'Expected 2027',
    title: 'B.Tech — Computer Science Engineering (Data Science)',
    organization: 'Nalla Narasimha Reddy Educational Society\'s Group of Institutions',
    description: 'Hyderabad, Telangana | Cumulative GPA: 8.0 / 10.0',
    achievements: [
      'Consistently maintained an 8.0 CGPA across core computer science and data science coursework.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-900 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internships & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Internships
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured industry internships, hackathon participation, and academic project milestones.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
          
          {timelineEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-brand-cyan border-dark-950 shadow-md shadow-brand-cyan/30" />

              {/* Entry Card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-cyan/40 transition-all">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <span className="text-xs font-mono text-brand-cyan font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{entry.period}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-dark-950 text-slate-300 border border-slate-800">
                    {entry.organization}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{entry.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{entry.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {entry.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
