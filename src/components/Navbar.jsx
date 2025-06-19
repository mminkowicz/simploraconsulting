'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  const navLinks = ['services', 'features', 'clients', 'contact'];

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold tracking-tight z-50">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Simplora
          </span>
          <span className="text-gray-900">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {navLinks.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative group hover:text-blue-600 transition"
            >
              <span className="capitalize">{id}</span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow hover:brightness-110 transition"
        >
          Book a Call
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden z-50"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-white bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-semibold text-gray-800">
          {navLinks.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="capitalize hover:text-blue-600 transition"
            >
              {id}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow hover:brightness-110 transition"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
