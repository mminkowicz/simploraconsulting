import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Clock,
  TrendingUp,
  Shield,
} from "lucide-react";

const stats = [
  { icon: Users, number: "500+", label: "Happy Clients" },
  { icon: Target, number: "98%", label: "Success Rate" },
  { icon: Clock, number: "40+", label: "Hours Saved Weekly" },
  { icon: Award, number: "50+", label: "Systems Mastered" },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "Seamless Integration",
    description:
      "We connect all your systems so they work together as one unified ecosystem, not separate tools.",
  },
  {
    icon: Shield,
    title: "Reliable Management",
    description:
      "We don't just build systems — we manage them continuously to ensure they keep running smoothly.",
  },
  {
    icon: Users,
    title: "Business-Focused",
    description:
      "Every system we design is built with your business goals in mind, not just technical requirements.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".about-item")
              .forEach((el, i) =>
                setTimeout(() => el.classList.add("slide-up"), i * 150)
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
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Header & Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="about-item text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Who We <span className="gradient-text">Are</span>
            </h2>
            <p className="about-item text-xl text-slate-600 mb-8">
              At Simplora, we design, build, integrate, and manage the systems your business 
              depends on — like CRMs, project management tools, automation platforms, databases, 
              and more — so everything runs smoothly and works together seamlessly.
            </p>

            <div className="about-item space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Our Mission
                  </h3>
                  <p className="text-slate-600">
                    To ensure your business runs better by making your systems work better. 
                    We handle the technical complexity so you can focus on growth and success.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Our Approach
                  </h3>
                  <p className="text-slate-600">
                    We don't just fix systems — we design them to work together seamlessly, 
                    creating a unified ecosystem that powers your entire business.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Our Promise
                  </h3>
                  <p className="text-slate-600">
                    When your systems work seamlessly, your business runs smoothly. 
                    We're here to make that happen, every day.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="about-item inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg transition"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Image */}
          <div className="about-item relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
