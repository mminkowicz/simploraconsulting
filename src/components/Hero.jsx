'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const headline = useRef(null);
  const subhead = useRef(null);
  const cta = useRef(null);

  useEffect(() => {
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo(headline.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(subhead.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .fromTo(cta.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-24 text-center bg-gradient-to-br from-white via-[#f0f9ff] to-white">
      <div className="max-w-5xl mx-auto">
        {/* Tagline */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#174AFF] bg-[#E0F2FF] rounded-full">
            Simplifying Business Systems
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headline}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight"
        >
          Your Business Runs Better<br />
          When Your Systems Do.
        </h1>

        {/* Subheadline */}
        <p
          ref={subhead}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
        >
          At Simplora, we design, build, integrate, and manage the systems your business depends on — like CRMs, project management tools, automation platforms, databases, and more — so everything runs smoothly and works together seamlessly.
        </p>

        {/* CTA Buttons */}
        <div
          ref={cta}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/book"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#2FCBFF] to-[#174AFF] text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform"
          >
            Talk to a Systems Expert →
          </a>
          <a
            href="#services"
            className="px-8 py-3 rounded-full border-2 border-[#174AFF] text-[#174AFF] font-semibold text-lg hover:bg-blue-50 transition"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
