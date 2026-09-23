import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertTriangle, MessageSquare, MapPin, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    // Check if endpoint is configured
    if (!endpoint || endpoint.includes('your_form_id_here')) {
      // Fallback: Open mailto client directly so email is guaranteed to be sent
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
      
      setErrorMessage("To send messages directly through this web form without opening your mail app, please paste your free Formspree Form ID into .env (VITE_FORMSPREE_ENDPOINT). Email client opened with your message!");
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Only reset form on true success
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(data.error || "Something went wrong while sending your message. Please try again or contact me directly by email.");
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage("Something went wrong while sending your message. Please check your internet connection or contact me directly by email.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's build something meaningful with data.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open to internships, entry-level data analytics roles, research collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Direct Contact Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Contact</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-brand-cyan/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Email Direct</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-brand-cyan transition-colors">
                      {profileData.contact.email}
                    </span>
                  </div>
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-brand-cyan/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-brand-cyan transition-colors">
                      linkedin.com/in/azhar-mohammad69
                    </span>
                  </div>
                </a>

                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-brand-cyan/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">GitHub Organization</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-brand-cyan transition-colors">
                      github.com/Azhar0612
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-teal" />
                <span>India • Available for Remote & Onsite</span>
              </div>

            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
              
              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center mx-auto border border-brand-teal/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Message sent successfully! I'll get back to you at your provided email address soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 rounded-lg bg-dark-900 text-xs font-mono text-slate-400 hover:text-white border border-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Error Notification Alert */}
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-bold text-red-200">Submission Alert</div>
                        <div>{errorMessage}</div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-lg bg-dark-900 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-dark-900 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Message</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Azhar, I reviewed your sales analytics project and would like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-lg bg-dark-900 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 rounded-lg text-xs font-bold bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan text-dark-950 hover:shadow-lg hover:shadow-brand-cyan/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="text-[10px] text-slate-500 font-mono text-center pt-1 flex items-center justify-center gap-2">
                    <span>Direct Email:</span>
                    <a href={`mailto:${profileData.contact.email}`} className="text-brand-cyan underline">
                      {profileData.contact.email}
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
