'use client';

import React, { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.about-fadein')
              .forEach((el, i) =>
                setTimeout(() => el.classList.add('opacity-100', 'translate-y-0'), i * 100)
              );
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Statement */}
        <div className="about-fadein opacity-0 translate-y-8 transition-all duration-700 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-3xl leading-snug">
            <span className="text-sm text-blue-500 tracking-widest uppercase font-semibold mb-2 block">
              What We Stand For
            </span>
            We help businesses simplify systems so they can scale smarter, faster, and with confidence.
          </h2>
        </div>

        {/* 3-Column Info Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-slate-700 text-base md:text-lg leading-relaxed">
          <div className="about-fadein opacity-0 translate-y-8 transition-all duration-700">
            <h4 className="text-sm font-semibold uppercase text-blue-600 mb-2 tracking-wide">
              Our Mission
            </h4>
            <p className="font-medium text-slate-900 mb-1">
              Empower teams through seamless systems.
            </p>
            <p>
              We exist to eliminate the chaos of disconnected tools. By centralizing and streamlining workflows, we help you work better, not harder.
            </p>
          </div>

          <div className="about-fadein opacity-0 translate-y-8 transition-all duration-700">
            <h4 className="text-sm font-semibold uppercase text-blue-600 mb-2 tracking-wide">
              Our Approach
            </h4>
            <p className="font-medium text-slate-900 mb-1">
              People-first, process-obsessed.
            </p>
            <p>
              Every system we build is tailored to the humans behind it. Our solutions are structured, scalable, and simple — never one-size-fits-all.
            </p>
          </div>

          <div className="about-fadein opacity-0 translate-y-8 transition-all duration-700">
            <h4 className="text-sm font-semibold uppercase text-blue-600 mb-2 tracking-wide">
              Our Vision
            </h4>
            <p className="font-medium text-slate-900 mb-1">
              A smarter digital future for every business.
            </p>
            <p>
              We imagine a world where teams don’t fight their tools — they thrive with them. Simplora is here to build that future one system at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
