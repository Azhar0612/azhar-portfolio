import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DataPipeline from './components/DataPipeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AnalyticsPlayground from './components/AnalyticsPlayground';
import DataTerminal from './components/DataTerminal';
import Experience from './components/Experience';
import Research from './components/Research';
import Education from './components/Education';
import GitHubSection from './components/GitHubSection';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <DataPipeline />
        <Skills />
        <Projects />
        <AnalyticsPlayground />
        <DataTerminal />
        <Experience />
        <Research />
        <Education />
        <GitHubSection />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
