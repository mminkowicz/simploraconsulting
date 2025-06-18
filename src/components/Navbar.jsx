'use client';

import { useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Simplora</span>
          <span className="text-gray-900">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {['services', 'features', 'clients', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative group transition text-gray-700 hover:text-blue-600"
            >
              <span className="capitalize">{id}</span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow hover:brightness-110 transition"
        >
          Book a Call
        </a>

        {/* Mobile Menu (Optional placeholder) */}
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </header>
  );
}
