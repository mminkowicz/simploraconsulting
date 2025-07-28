"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Enhanced entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Enhanced nav links with descriptions
  const navLinks = [
    { label: "Home", href: "#home", description: "Welcome to Simplora" },
    { 
      label: "About", 
      href: "#about", 
      description: "Our story & mission",
      dropdown: [
        { label: "Our Story", href: "#about", description: "How we started" },
        { label: "Our Team", href: "/team", description: "Meet the experts" }
      ]
    },
    { label: "Services", href: "#services", description: "What we offer" },
    { label: "Contact", href: "#contact", description: "Get in touch" }
  ];

  // Navigation handler that works for both home page and other pages
  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
          }
        }, 100);
      } else {
        // We're already on home page, just scroll to section
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId);
        }
      }
      setMenuOpen(false);
    }
  };

  // Enhanced header classes with glassmorphism
  const headerClasses = [
    "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out",
    scrolled
      ? "backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg shadow-black/5"
      : "backdrop-blur-sm bg-white/60"
  ].join(" ");

  return (
    <header ref={navRef} className={headerClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Enhanced Logo */}
        <a 
          href="#home" 
          className="flex items-center" 
          onClick={e => {
            e.preventDefault();
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              handleNavClick(e, "#home");
            }
          }}
        > 
          <img
            src="/logo.svg"
            alt="Simplora Consulting logo"
            className="h-16 md:h-20 w-auto"
          />
        </a>

        {/* Enhanced Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, href, description, dropdown }) => (
            <div key={label} className="relative group">
              <div className="relative">
                <a
                  href={href}
                  onClick={e => handleNavClick(e, href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 flex items-center gap-1 ${
                    activeSection === href.substring(1) 
                      ? 'text-blue-600' 
                      : 'text-slate-700'
                  }`}
                >
                  {label}
                  {dropdown && <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />}
                {/* Active indicator */}
                {activeSection === href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>
              
                              {/* Dropdown Menu */}
                {dropdown && (
                  <div className="absolute top-full left-0 mt-4 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0 hover:opacity-100 hover:pointer-events-auto">
                    {/* Invisible bridge to prevent dropdown from closing */}
                    <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                    <div className="p-2">
                    {dropdown.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.href.startsWith("#")) {
                            // Handle internal page navigation (like #about)
                            const sectionId = item.href.substring(1);
                            if (location.pathname !== "/") {
                              navigate("/");
                              setTimeout(() => {
                                const el = document.getElementById(sectionId);
                                if (el) {
                                  el.scrollIntoView({ behavior: "smooth" });
                                  setActiveSection(sectionId);
                                }
                              }, 100);
                            } else {
                              const el = document.getElementById(sectionId);
                              if (el) {
                                el.scrollIntoView({ behavior: "smooth" });
                                setActiveSection(sectionId);
                              }
                            }
                          } else {
                            // Handle external page navigation (like /team)
                            navigate(item.href);
                            // If navigating to team page, scroll to team section after navigation
                            if (item.href === "/team") {
                              setTimeout(() => {
                                const el = document.getElementById("team");
                                if (el) {
                                  el.scrollIntoView({ behavior: "smooth" });
                                }
                              }, 100);
                            }
                          }
                          setMenuOpen(false);
                        }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50/80 transition-all duration-200 group/item"
                      >
                        <div>
                          <div className="font-medium text-slate-900 group-hover/item:text-blue-600 transition-colors duration-200">
                            {item.label}
                          </div>
                          <div className="text-xs text-slate-500">{item.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Tooltip for non-dropdown items */}
              {!dropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                  {description}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                </div>
              )}
            </div>
          ))}
          
          {/* Enhanced CTA Button */}
          <a
            href="https://calendar.app.google/7JhbHhJhNG9fHj849"
            className="group relative inline-flex items-center px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
          </a>
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden group relative p-2 text-slate-700 hover:text-blue-600 transition-colors duration-300"
          aria-label="Open menu"
        >
          <div className="relative">
            <Menu className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200/50">
                <a
                  href="#home"
                  onClick={e => {
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      navigate("/");
                    } else {
                      handleNavClick(e, "#home");
                    }
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3"
                >
                  <img src="/logo.svg" alt="Simplora logo" className="h-10 w-auto" />
                  <span className="text-lg font-bold text-slate-800">Simplora</span>
                </a>
                <button 
                  onClick={() => setMenuOpen(false)} 
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  {navLinks.map(({ label, href, description, dropdown }) => (
                    <div key={label}>
                      <a
                        href={href}
                        onClick={e => handleNavClick(e, href)}
                        className={`block px-4 py-3 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
                          activeSection === href.substring(1) 
                            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                            : 'text-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-lg flex items-center justify-between">
                          {label}
                          {dropdown && <ChevronDown className="w-4 h-4" />}
                        </div>
                        <div className="text-sm text-slate-500 mt-1">{description}</div>
                      </a>
                      
                      {/* Mobile dropdown items */}
                      {dropdown && (
                        <div className="ml-4 mt-2 space-y-1">
                          {dropdown.map((item, index) => (
                            <a
                              key={index}
                              href={item.href}
                                                          onClick={(e) => {
                              e.preventDefault();
                              if (item.href.startsWith("#")) {
                                // Handle internal page navigation (like #about)
                                const sectionId = item.href.substring(1);
                                if (location.pathname !== "/") {
                                  navigate("/");
                                  setTimeout(() => {
                                    const el = document.getElementById(sectionId);
                                    if (el) {
                                      el.scrollIntoView({ behavior: "smooth" });
                                      setActiveSection(sectionId);
                                    }
                                  }, 100);
                                } else {
                                  const el = document.getElementById(sectionId);
                                  if (el) {
                                    el.scrollIntoView({ behavior: "smooth" });
                                    setActiveSection(sectionId);
                                  }
                                }
                              } else {
                                // Handle external page navigation (like /team)
                                navigate(item.href);
                                // If navigating to team page, scroll to team section after navigation
                                if (item.href === "/team") {
                                  setTimeout(() => {
                                    const el = document.getElementById("team");
                                    if (el) {
                                      el.scrollIntoView({ behavior: "smooth" });
                                    }
                                  }, 100);
                                }
                              }
                              setMenuOpen(false);
                            }}
                              className="block px-4 py-2 rounded-lg hover:bg-slate-50 transition-all duration-200"
                            >
                              <div className="font-medium text-slate-900">{item.label}</div>
                              <div className="text-sm text-slate-500">{item.description}</div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-slate-200/50">
                <a
                  href="https://calendar.app.google/7JhbHhJhNG9fHj849"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
