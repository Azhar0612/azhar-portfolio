import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, HelpCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

const initialLogs = [
  { command: 'whoami', output: `${profileData.name} — B.Tech CSE (Data Science) '27 [CGPA: 8.0]` },
  { command: 'focus', output: 'Data Analytics • Data Science • Business Intelligence • Machine Learning' },
  { command: 'tools', output: 'Python | SQL | Power BI | Excel | Pandas | NumPy | Scikit-learn | Flask | SQLite | Git' },
  { command: 'goal', output: 'Turning raw data into insights, dashboards, and intelligent solutions.' }
];

export default function DataTerminal() {
  const [history, setHistory] = useState(initialLogs);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputStr = '';

    switch (cmd) {
      case 'whoami':
        outputStr = `${profileData.name} (${profileData.displayName}) — B.Tech CSE (Data Science), Grad 2027, CGPA 8.0`;
        break;
      case 'focus':
        outputStr = 'Data Analytics, Exploratory Data Analysis, Data Storytelling, Machine Learning & Database Systems.';
        break;
      case 'tools':
        outputStr = 'Python, SQL, Power BI, Excel, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, R, Flask, Streamlit, SQLite, Git, GitHub.';
        break;
      case 'goal':
        outputStr = 'Turning raw data into decisions through clean pipelines, interactive dashboards, and scalable ML applications.';
        break;
      case 'projects':
        outputStr = '1. Sales Trend Analysis (Featured) | 2. Alternative Credit Assessment | 3. Diabetes Risk Prediction | 4. Student Performance Analysis | 5. Restaurant Booking | 6. Car Price Predictor.';
        break;
      case 'contact':
        outputStr = `Email: ${profileData.contact.email} | GitHub: ${profileData.contact.github} | LinkedIn: ${profileData.contact.linkedin}`;
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'help':
        outputStr = 'Available commands: whoami, focus, tools, goal, projects, contact, clear, help';
        break;
      default:
        outputStr = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: inputVal, output: outputStr }]);
    setInputVal('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="py-16 bg-dark-950 border-b border-slate-800/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Frame */}
        <div className="rounded-xl overflow-hidden bg-dark-900 border border-slate-800 shadow-2xl font-mono text-xs">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-dark-950 border-b border-slate-800 text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="ml-2 text-slate-300 font-bold flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-brand-cyan" />
                <span>azhar-data-cli ~ bash</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setHistory([])}
                className="hover:text-white transition-colors"
                title="Clear Output"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="p-4 sm:p-6 space-y-4 max-h-80 overflow-y-auto bg-dark-950/90 text-slate-300">
            
            <div className="text-slate-500 text-[11px] pb-2 border-b border-slate-800/60">
              Mohammad Azhar Data Shell [Version 1.0.0]. Type <span className="text-brand-cyan">help</span> to list commands.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-brand-cyan">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="font-semibold text-white">{item.command}</span>
                </div>
                <div className="text-slate-300 pl-4 leading-relaxed text-xs">
                  {item.output}
                </div>
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Interactive Input Prompt */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 p-3 bg-dark-900 border-t border-slate-800">
            <span className="text-emerald-400 font-bold pl-2">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command (e.g. whoami, focus, tools, projects, help)..."
              className="flex-1 bg-transparent text-slate-100 focus:outline-none text-xs font-mono placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded bg-brand-cyan/20 text-brand-cyan hover:bg-brand-cyan hover:text-dark-950 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
