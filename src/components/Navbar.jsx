"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // One-page nav links
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  const headerClasses = [
    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
    scrolled
      ? "backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm"
      : "bg-white"
  ].join(" ");

  return (
    <header ref={navRef} className={headerClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2" onClick={e => handleNavClick(e, "#home")}> 
          <img
            src="/logo.svg"
            alt="Simplora logo"
            className="h-16 md:h-20 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={e => handleNavClick(e, href)}
              className="text-slate-700 hover:text-[#174AFF] transition"
            >
              {label}
            </a>
          ))}
          <a
            href="https://calendar.app.google/7JhbHhJhNG9fHj849"
            className="inline-flex items-center px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-[#2FCBFF] to-[#174AFF] text-white shadow hover:scale-105 hover:brightness-110 transition-transform"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-slate-700"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] flex flex-col bg-white text-slate-800">
          <div className="flex items-center justify-between px-6 py-5">
            <a
              href="#home"
              onClick={e => handleNavClick(e, "#home")}
              className="flex items-center gap-2"
            >
              <img src="/logo.svg" alt="Simplora logo" className="h-14 w-auto" />
            </a>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col items-center gap-8 text-lg font-semibold">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={e => handleNavClick(e, href)}
                className="hover:text-[#174AFF] transition"
              >
                {label}
              </a>
            ))}
            <a
              href="https://calendar.app.google/7JhbHhJhNG9fHj849"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#2FCBFF] to-[#174AFF] text-white shadow hover:scale-105 transition-transform"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
