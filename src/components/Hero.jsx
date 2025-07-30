'use client';

import { useRef, useEffect } from 'react';

export default function Hero() {
  const headline = useRef(null);
  const subhead = useRef(null);
  const cta = useRef(null);
  const floatingShapes = useRef(null);

  useEffect(() => {
    // Simple CSS animation triggers
    if (headline.current) {
      headline.current.classList.add('animate-fade-in-up');
    }
    if (subhead.current) {
      setTimeout(() => subhead.current.classList.add('animate-fade-in-up'), 200);
    }
    if (cta.current) {
      setTimeout(() => cta.current.classList.add('animate-fade-in-up'), 400);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 text-center overflow-hidden">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/10 via-transparent to-purple-100/10"></div>
      
      {/* Floating decorative elements */}
      <div ref={floatingShapes} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/15 rounded-full blur-sm animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-400/25 rounded-full blur-sm animate-float"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-indigo-400/20 rounded-full blur-sm animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-300/30 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-purple-300/20 rounded-full blur-sm animate-float-delayed"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto z-10">

        {/* Enhanced headline with gradient text */}
        <h1
          ref={headline}
          className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 leading-[0.9] tracking-tight opacity-0"
        >
          Your Business Runs Better<br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            When Your Systems Do.
          </span>
        </h1>

        {/* Enhanced subheadline with better typography */}
        <p
          ref={subhead}
          className="mt-8 text-xl sm:text-2xl md:text-3xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light opacity-0"
        >
          At <span className="font-semibold text-blue-700">Simplora</span>, we simplify the systems your business relies on — from CRMs and project management tools to automation platforms and databases. We design, integrate, and manage everything so your tools work in harmony and your team can focus on what matters.
        </p>

        {/* Enhanced CTA section with better styling */}
        <div
          ref={cta}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0"
        >
          <a
            href="/book"
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10">Talk to a Systems Expert</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#services"
            className="px-10 py-4 rounded-full border-2 border-blue-600 text-blue-700 font-bold text-lg hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
