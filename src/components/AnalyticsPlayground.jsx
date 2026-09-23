import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { BarChart3, Filter, TrendingUp, DollarSign, ShoppingCart, Percent, RefreshCw } from 'lucide-react';
import { playgroundInitialData } from '../data/playgroundData';

// Register ChartJS modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function AnalyticsPlayground() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Lookup reactive metrics
  const activeKPIs = playgroundInitialData.kpiStats[selectedRegion] || playgroundInitialData.kpiStats['All'];
  const trendData = playgroundInitialData.monthlyTrends[selectedRegion] || playgroundInitialData.monthlyTrends['All'];
  const categoryData = playgroundInitialData.categoryShare[selectedCategory] || playgroundInitialData.categoryShare['All'];

  // Line Chart Config
  const lineChartData = {
    labels: trendData.months,
    datasets: [
      {
        label: 'Monthly Revenue ($)',
        data: trendData.sales,
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.12)',
        fill: true,
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#06b6d4',
      },
      {
        label: 'Profit ($)',
        data: trendData.profit,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.08)',
        fill: true,
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#10b981',
      }
    ]
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#94a3b8', font: { family: 'Inter', size: 11 } }
      },
      tooltip: {
        backgroundColor: '#0b0f19',
        borderColor: '#334466',
        borderWidth: 1,
        titleColor: '#f8fafc',
        bodyColor: '#38bdf8',
        padding: 10
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.04)' },
        ticks: { color: '#64748b', font: { family: 'Inter', size: 10 } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.04)' },
        ticks: { color: '#64748b', font: { family: 'Inter', size: 10 } }
      }
    }
  };

  // Doughnut Chart Config
  const doughnutChartData = {
    labels: categoryData.map(c => c.name),
    datasets: [
      {
        data: categoryData.map(c => c.sales),
        backgroundColor: categoryData.map(c => c.color),
        borderColor: '#070a11',
        borderWidth: 2,
      }
    ]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#94a3b8', font: { family: 'Inter', size: 11 } }
      },
      tooltip: {
        backgroundColor: '#0b0f19',
        borderColor: '#334466',
        borderWidth: 1,
        titleColor: '#f8fafc',
        bodyColor: '#38bdf8',
        padding: 10
      }
    }
  };

  const handleResetFilters = () => {
    setSelectedRegion('All');
    setSelectedCategory('All');
  };

  return (
    <section id="playground" className="py-20 bg-dark-950 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Live Interactive Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Analytics Playground
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Test real-time interactive data filtering across regions and product categories built directly into this portfolio interface.
          </p>
          <div className="inline-block text-[11px] font-mono text-slate-500 bg-dark-900 px-3 py-1 rounded-full border border-slate-800">
            ℹ Note: Interactive controls render realistic sample dataset metrics for evaluation.
          </div>
        </div>

        {/* Dashboard Shell */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-8 bg-dark-900/90 shadow-2xl">
          
          {/* Dashboard Control Bar */}
          <div className="flex items-center justify-between flex-wrap gap-4 p-4 rounded-xl bg-dark-950 border border-slate-800">
            
            <div className="flex items-center gap-4 flex-wrap">
              {/* Region Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Region:</span>
                <div className="flex items-center gap-1 bg-dark-900 p-1 rounded-lg border border-slate-800">
                  {playgroundInitialData.regions.map(region => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                        selectedRegion === region
                          ? 'bg-brand-cyan text-dark-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-dark-900 border border-slate-800 text-slate-200 text-xs font-mono rounded-lg px-3 py-1.5 focus:outline-none focus:border-brand-cyan"
                >
                  {playgroundInitialData.categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>

          </div>

          {/* Top KPI Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>TOTAL REVENUE</span>
                <DollarSign className="w-4 h-4 text-brand-cyan" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">{activeKPIs.totalSales}</div>
              <div className="text-[11px] text-emerald-400 font-mono">Region: {selectedRegion}</div>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>TOTAL PROFIT</span>
                <TrendingUp className="w-4 h-4 text-brand-teal" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-brand-teal">{activeKPIs.totalProfit}</div>
              <div className="text-[11px] text-slate-400 font-mono">Margin: {activeKPIs.profitMargin}</div>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>TOTAL ORDERS</span>
                <ShoppingCart className="w-4 h-4 text-brand-indigo" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">{activeKPIs.totalOrders}</div>
              <div className="text-[11px] text-slate-400 font-mono">Avg Value: {activeKPIs.avgOrderValue}</div>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>PROFIT MARGIN %</span>
                <Percent className="w-4 h-4 text-brand-cyan" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-brand-cyan">{activeKPIs.profitMargin}</div>
              <div className="text-[11px] text-emerald-400 font-mono">Optimized Target</div>
            </div>

          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Monthly Trend Line Chart */}
            <div className="lg:col-span-8 p-5 rounded-xl bg-dark-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-sm font-bold text-white font-mono">Monthly Revenue & Profit Trajectory</h3>
                <span className="text-[11px] font-mono text-brand-cyan">Chart.js Responsive Line</span>
              </div>
              <div className="h-64 sm:h-72 w-full">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            {/* Category Breakdown Doughnut Chart */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-dark-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-sm font-bold text-white font-mono">Category Share</h3>
                <span className="text-[11px] font-mono text-slate-400">{selectedCategory}</span>
              </div>
              <div className="h-64 sm:h-72 w-full flex items-center justify-center">
                <Doughnut data={doughnutChartData} options={doughnutOptions} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
