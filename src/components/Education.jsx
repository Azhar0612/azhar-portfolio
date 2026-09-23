import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

const coursework = [
  'Data Structures & Algorithms',
  'Database Management Systems (DBMS & SQL)',
  'Machine Learning & Predictive Modeling',
  'Exploratory Data Analysis (EDA)',
  'Applied Statistics & Probability',
  'Python Data Stack (Pandas, NumPy, Scikit-learn)',
  'Business Intelligence & Visualization',
  'Object Oriented Programming (Java)'
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-dark-900 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Core Foundations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal computer science training with specialized focus on Data Science and Analytics.
          </p>
        </div>

        {/* Card Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan font-bold uppercase">
                  Undergraduate Degree Program
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {profileData.degree}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono pt-1">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Graduation: {profileData.graduationYear}</span>
                  </span>
                  <span>•</span>
                  <span>Computer Science Department</span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="p-4 rounded-xl bg-dark-950 border border-brand-cyan/40 text-center">
                <div className="text-xs font-mono text-slate-400 uppercase">Cumulative GPA</div>
                <div className="text-3xl font-extrabold text-gradient">{profileData.cgpa} / 10.0</div>
                <div className="text-[10px] text-brand-teal font-mono mt-0.5">Consistent Performance</div>
              </div>
            </div>

            {/* Core Relevant Coursework */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-cyan" />
                <span>Relevant Technical & Analytics Coursework</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coursework.map((course, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-dark-950 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
