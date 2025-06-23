"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

import logo from "../assets/logo.ai.png";

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Services", "Features", "Clients", "Contact"];

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-transparent px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Optamyze logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="hover:text-blue-600 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Call to Action */}
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow hover:brightness-110 transition"
          >
            Book a Call
          </a>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 right-0 w-full h-screen bg-white dark:bg-black bg-opacity-90 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-lg font-semibold text-neutral-800 dark:text-neutral-100">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow hover:brightness-110 transition"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
