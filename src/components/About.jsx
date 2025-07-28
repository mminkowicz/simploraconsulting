'use client';

import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Zap, Target } from 'lucide-react';
import gsap from 'gsap';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate main content
            gsap.fromTo(
              entry.target.querySelectorAll('.about-fadein'),
              { opacity: 0, y: 50 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.2,
                ease: "power3.out"
              }
            );

            // Animate stats
            if (statsRef.current) {
              gsap.fromTo(
                statsRef.current.querySelectorAll('.stat-number'),
                { opacity: 0, scale: 0.5 },
                { 
                  opacity: 1, 
                  scale: 1, 
                  duration: 0.6, 
                  stagger: 0.1,
                  ease: "back.out(1.7)"
                }
              );
            }

            // Animate timeline
            if (timelineRef.current) {
              gsap.fromTo(
                timelineRef.current.querySelectorAll('.timeline-item'),
                { opacity: 0, x: -50 },
                { 
                  opacity: 1, 
                  x: 0, 
                  duration: 0.8, 
                  stagger: 0.3,
                  ease: "power3.out"
                }
              );
            }
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
      className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Statement */}
        <div className="about-fadein text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Your Business Systems Partner
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 max-w-5xl mx-auto leading-tight mb-8">
            We don't just build systems.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              We transform businesses.
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From chaotic spreadsheets to streamlined automation, we've helped hundreds of businesses 
            turn their operational nightmares into competitive advantages.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="stat-number text-4xl md:text-5xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-sm text-slate-600 font-medium">Systems Built</div>
          </div>
          <div className="text-center">
            <div className="stat-number text-4xl md:text-5xl font-bold text-cyan-600 mb-2">50+</div>
            <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="stat-number text-4xl md:text-5xl font-bold text-indigo-600 mb-2">95%</div>
            <div className="text-sm text-slate-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="stat-number text-4xl md:text-5xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-slate-600 font-medium">Support</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="about-fadein">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Simplora was born from frustration. We watched too many businesses struggle with 
                disconnected tools, manual processes, and systems that worked against them instead of for them.
              </p>
              <p>
                What started as helping a few friends streamline their operations has grown into a 
                mission to democratize business automation. We believe every business, regardless of size, 
                deserves systems that work seamlessly together.
              </p>
              <p>
                Today, we're a team of systems architects, automation specialists, and business strategists 
                who speak both tech and business fluently. We don't just implement tools — we transform 
                how you work.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Proven Expertise</div>
                  <div className="text-sm text-slate-600">Certified in ClickUp, HubSpot, Make, and more</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">People-First Approach</div>
                  <div className="text-sm text-slate-600">We design for your team, not just your processes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Results-Driven</div>
                  <div className="text-sm text-slate-600">Every system we build has measurable ROI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div ref={timelineRef} className="about-fadein">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Our Journey
            </h3>
            <div className="space-y-8">
              <div className="timeline-item relative pl-8 border-l-2 border-blue-200">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]"></div>
                <div className="text-sm text-blue-600 font-semibold mb-2">2020</div>
                <div className="font-semibold text-slate-900 mb-1">Started with a simple idea</div>
                <div className="text-slate-600 text-sm">Helped our first client automate their sales process</div>
              </div>
              <div className="timeline-item relative pl-8 border-l-2 border-cyan-200">
                <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-600 rounded-full -translate-x-[9px]"></div>
                <div className="text-sm text-cyan-600 font-semibold mb-2">2022</div>
                <div className="font-semibold text-slate-900 mb-1">Scaling our impact</div>
                <div className="text-slate-600 text-sm">Reached 25+ clients across different industries</div>
              </div>
              <div className="timeline-item relative pl-8 border-l-2 border-indigo-200">
                <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-600 rounded-full -translate-x-[9px]"></div>
                <div className="text-sm text-indigo-600 font-semibold mb-2">2024</div>
                <div className="font-semibold text-slate-900 mb-1">Industry recognition</div>
                <div className="text-slate-600 text-sm">Named top automation partner by multiple platforms</div>
              </div>
              <div className="timeline-item relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -translate-x-[9px]"></div>
                <div className="text-sm text-purple-600 font-semibold mb-2">Today</div>
                <div className="font-semibold text-slate-900 mb-1">Leading the future</div>
                <div className="text-slate-600 text-sm">Transforming businesses with cutting-edge automation</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
