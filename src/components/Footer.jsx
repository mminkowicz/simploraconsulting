import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Simplora Consulting</h2>
          <p className="text-gray-500 text-sm">
            Simplifying your business systems — one integration at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="#features" className="hover:text-blue-600 transition">Features</a></li>
            <li><a href="#clients" className="hover:text-blue-600 transition">Clients</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Connect</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:hello@simplora.com" className="hover:text-blue-600 transition">hello@simplora.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-blue-600" />
              <a href="https://instagram.com/simplora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-blue-600" />
              <a href="https://linkedin.com/company/simplora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 px-4 sm:px-0 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Simplora Consulting. All rights reserved.
      </div>
    </footer>
  );
}
