import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Filter, PieChart, Cpu, Lightbulb, ArrowRight, Code, Play } from 'lucide-react';

const pipelineStages = [
  {
    id: 'ingest',
    number: '01',
    name: 'RAW DATA',
    title: 'Data Ingestion & Wrangling',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    tools: ['SQL', 'Pandas', 'CSV', 'SQLite'],
    description: 'Extracting raw structured and semi-structured transaction logs, missing record detection, and database schema creation.',
    input: 'Unstructured CSV / SQL database logs',
    output: 'Cleaned relational tabular schema',
    snippet: `import pandas as pd
df = pd.read_csv('superstore_raw.csv')
print(f"Ingested {len(df)} records with {df.shape[1]} columns")`
  },
  {
    id: 'clean',
    number: '02',
    name: 'CLEAN & PREP',
    title: 'Data Cleaning & Hygiene',
    icon: Filter,
    color: 'from-cyan-500 to-teal-500',
    tools: ['Pandas', 'NumPy', 'Excel', 'Data Types'],
    description: 'Handling null values, outlier removal, date parsing, categorical encoding, and calculating profit margins.',
    input: 'Raw DataFrame with missing values',
    output: 'Normalized DataFrame ready for SQL analytics',
    snippet: `df['Order Date'] = pd.to_datetime(df['Order Date'])
df['Profit Margin'] = df['Profit'] / df['Sales']
df.dropna(subset=['Customer ID'], inplace=True)`
  },
  {
    id: 'analyze',
    number: '03',
    name: 'SQL & EDA',
    title: 'Exploratory Data Analysis',
    icon: Code,
    color: 'from-teal-500 to-emerald-500',
    tools: ['SQL CTEs', 'Group By', 'Window Functions'],
    description: 'Executing analytical queries, aggregations, computing YoY sales velocity, and regional segment performance.',
    input: 'Clean SQLite database tables',
    output: 'Aggregated KPI metrics & regional summary tables',
    snippet: `SELECT Category, Region, 
       SUM(Sales) as Total_Sales, 
       ROUND(AVG(Profit_Margin), 4) as Avg_Margin
FROM superstore_orders 
GROUP BY Category, Region 
ORDER BY Total_Sales DESC;`
  },
  {
    id: 'visualize',
    number: '04',
    name: 'VISUALIZE',
    title: 'Dashboarding & Storytelling',
    icon: PieChart,
    color: 'from-indigo-500 to-purple-500',
    tools: ['Power BI', 'Chart.js', 'Seaborn', 'Matplotlib'],
    description: 'Designing high-impact visual hierarchies, executive summary dashboards, and interactive filtering features.',
    input: 'Aggregated summary tables',
    output: 'Interactive visual reporting dashboard',
    snippet: `// Power BI DAX Measure Example
Total Revenue = SUM(Orders[Sales])
Profit Margin % = DIVIDE(SUM(Orders[Profit]), [Total Revenue], 0)`
  },
  {
    id: 'predict',
    number: '05',
    name: 'ML MODELING',
    title: 'Predictive Modeling',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    tools: ['Scikit-learn', 'Q-Learning', 'Random Forest'],
    description: 'Applying machine learning algorithms (Classification, Regression, Reinforcement Q-Learning) to predict trends.',
    input: 'Engineered feature matrices',
    output: 'Validated predictive model & evaluation scores',
    snippet: `from sklearn.ensemble import RandomForestRegressor
model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)`
  },
  {
    id: 'decision',
    number: '06',
    name: 'INSIGHTS',
    title: 'Decision & Strategy',
    icon: Lightbulb,
    color: 'from-emerald-400 to-cyan-400',
    tools: ['Executive Brief', 'Action Plan'],
    description: 'Translating quantitative analysis into actionable recommendations for business decision-makers.',
    input: 'Model outputs & dashboard metrics',
    output: 'Strategic business growth decisions',
    snippet: `// Business Takeaway
"Reallocating 15% discount budget from South Region 
to Top 3 Tech categories increases net margin by +8.4%."`
  }
];

export default function DataPipeline() {
  const [activeStageId, setActiveStageId] = useState('ingest');
  const activeStage = pipelineStages.find(s => s.id === activeStageId) || pipelineStages[0];

  return (
    <section id="pipeline" className="py-20 bg-dark-900 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Interactive Data Value Chain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Turn Raw Data Into Decisions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click on any stage in the data pipeline to explore the underlying tools, techniques, and sample code workflows.
          </p>
        </div>

        {/* Horizontal Pipeline Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {pipelineStages.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-4 rounded-xl text-left transition-all relative overflow-hidden border ${
                  isActive
                    ? 'bg-dark-850 border-brand-cyan shadow-lg shadow-brand-cyan/15 scale-[1.02]'
                    : 'bg-dark-950/80 border-slate-800 hover:border-slate-700 hover:bg-dark-850/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500">{stage.number}</span>
                  <div className={`p-1.5 rounded-md bg-gradient-to-br ${stage.color} text-dark-950 font-bold`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-extrabold text-white tracking-wide">{stage.name}</div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">{stage.title}</div>
                
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-teal" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Stage Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Overview Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${activeStage.color} text-dark-950 font-bold`}>
                  {React.createElement(activeStage.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider">
                    Stage {activeStage.number} • {activeStage.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{activeStage.title}</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeStage.description}
              </p>

              {/* Tools Badges */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase">Primary Tools:</span>
                <div className="flex flex-wrap gap-2">
                  {activeStage.tools.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-dark-950 border border-slate-700/70 text-xs font-mono text-brand-cyan">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Input & Output */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-dark-950 border border-slate-800">
                  <span className="text-slate-500 block uppercase text-[10px]">Input</span>
                  <span className="text-slate-200 font-medium">{activeStage.input}</span>
                </div>
                <div className="p-3 rounded-lg bg-dark-950 border border-slate-800">
                  <span className="text-slate-500 block uppercase text-[10px]">Output</span>
                  <span className="text-brand-teal font-medium">{activeStage.output}</span>
                </div>
              </div>
            </div>

            {/* Right Code Snippet Preview Column */}
            <div className="lg:col-span-6">
              <div className="bg-dark-950 rounded-xl border border-slate-800 p-4 font-mono text-xs overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Code className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>workflow_pipeline.py</span>
                  </span>
                  <span className="text-slate-500">{activeStage.id}.py</span>
                </div>
                <pre className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre">
                  <code>{activeStage.snippet}</code>
                </pre>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
