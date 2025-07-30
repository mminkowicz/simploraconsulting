'use client';

import { Zap, Settings, Link2, Smile } from 'lucide-react';

const steps = [
  {
    icon: Zap,
    iconClass: 'text-blue-600',
    title: 'We Analyze',
    desc: 'We dive deep into your current systems, workflows, and pain points to understand what\'s holding you back.'
  },
  {
    icon: Settings,
    iconClass: 'text-cyan-600',
    title: 'We Design & Build',
    desc: 'We architect and implement solutions tailored to your business, integrating and automating your tools.'
  },
  {
    icon: Link2,
    iconClass: 'text-emerald-600',
    title: 'We Connect',
    desc: 'We ensure all your platforms, data, and processes work together seamlessly as one ecosystem.'
  },
  {
    icon: Smile,
    iconClass: 'text-blue-500',
    title: 'You Grow',
    desc: 'With your systems running smoothly, you focus on what matters most: growing your business.'
  },
];

export default function Transformation() {
  return (
    <section className="py-28 bg-gradient-to-br from-white via-blue-50 to-cyan-50" id="transformation">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            The Simplora Transformation
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light">
            Here's how we turn chaos into clarity, and disconnected tools into a seamless business engine.
          </p>
        </div>

        {/* Steps Journey */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mb-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative z-10 bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center text-center max-w-xs w-full mx-auto md:mx-0 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="mb-4">
                  <Icon className={`w-8 h-8 ${step.iconClass}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-base font-light">{step.desc}</p>
                {/* Connector line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-16 h-1 bg-gradient-to-r from-blue-200 to-cyan-200 -translate-y-1/2 translate-x-full z-0" />
                )}
                {/* Connector line for mobile */}
                {idx < steps.length - 1 && (
                  <div className="block md:hidden absolute bottom-0 left-1/2 w-1 h-8 bg-gradient-to-b from-blue-200 to-cyan-200 -translate-x-1/2 translate-y-full z-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://calendar.app.google/BYvoopidMCTQkwJn6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
