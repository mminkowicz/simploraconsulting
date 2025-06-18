import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Simplora</h2>
          <p className="text-gray-500 text-sm">
            Simplifying your business systems — one integration at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
          <a href="#services" className="hover:text-blue-600 block transition">Services</a>
          <a href="#features" className="hover:text-blue-600 block transition">Features</a>
          <a href="#clients" className="hover:text-blue-600 block transition">Clients</a>
          <a href="#contact" className="hover:text-blue-600 block transition">Contact</a>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Connect</h3>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            <a href="mailto:hello@simplora.com" className="hover:text-blue-600 transition">
              hello@simplora.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-blue-600" />
            <a href="https://instagram.com/simplora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              Instagram
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4 text-blue-600" />
            <a href="https://linkedin.com/company/simplora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Simplora Consulting. All rights reserved.
      </div>
    </footer>
  );
}
