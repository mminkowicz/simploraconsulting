'use client';

import { useEffect, useRef } from 'react';

// Client Logos
import agudah from '../assets/Clients/agudah.png';
import chabadMiami from '../assets/Clients/chabad-miami.png';
import ecomDiversify from '../assets/Clients/ecom-diversify.png';
import forwardPPC from '../assets/Clients/forward-ppc.png';
import machane from '../assets/Clients/machane-israel.png';
import gforce from '../assets/Clients/gforce.png';
import KCAFirm from '../assets/Clients/KCAFirm.png';

const clientLogos = [
  { name: 'Agudah Israel', logo: agudah },
  { name: 'Chabad of Miami', logo: chabadMiami },
  { name: 'Ecom Diversify', logo: ecomDiversify },
  { name: 'Forward PPC', logo: forwardPPC },
  { name: 'Machane Yisrael', logo: machane },
  { name: 'Gforce', logo: gforce },
  { name: 'KCA Firm', logo: KCAFirm },
];

export default function Clients() {
  const logoRefs = useRef([]);

  useEffect(() => {
    logoRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.8)';
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'scale(1)';
        }, 200 + i * 100);
      }
    });
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-center text-base font-medium text-gray-500 uppercase tracking-widest mb-12 animate-fade-in-up"
        >
          Trusted by innovative organizations
        </h2>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-center animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {clientLogos.map((client, i) => (
            <div key={client.name} className="flex justify-center items-center p-4 relative z-10">
              <img
                src={client.logo}
                alt={client.name}
                ref={(el) => (logoRefs.current[i] = el)}
                className="h-16 w-32 object-contain transition-all duration-300 hover:scale-105 drop-shadow-sm relative z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
