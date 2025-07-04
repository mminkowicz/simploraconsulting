'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Client Logos
import agudah from '../assets/Clients/agudah.png';
import chabadMiami from '../assets/Clients/chabad-miami.png';
import ecomDiversify from '../assets/Clients/ecom-diversify.png';
import forwardPPC from '../assets/Clients/forward-ppc.png';
import machane from '../assets/Clients/machane-israel.png';

const clientLogos = [
  { name: 'Agudah Israel', logo: agudah },
  { name: 'Chabad of Miami', logo: chabadMiami },
  { name: 'Ecom Diversify', logo: ecomDiversify },
  { name: 'Forward PPC', logo: forwardPPC },
  { name: 'Machane Yisrael', logo: machane },
];

const testimonials = [
  {
    name: 'Sarah Klein',
    title: 'Executive Director',
    company: 'Chabad of Midtown',
    text: 'Simplora completely transformed how we manage donor data and communications. Everything is now automated, organized, and stress-free.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Klein&background=0D8ABC&color=fff',
    rating: 5,
  },
  {
    name: 'Mark Daniels',
    title: 'COO',
    company: 'Ecom Diversify',
    text: 'Their ClickUp and CRM integration helped us reduce manual work by 70%. Our workflows are now seamless across sales, support, and operations.',
    avatar: 'https://ui-avatars.com/api/?name=Mark+Daniels&background=0D8ABC&color=fff',
    rating: 5,
  },
  {
    name: 'Rivka Stein',
    title: 'Director of Development',
    company: 'Machane Yisrael',
    text: 'From messy spreadsheets to a fully automated donor system — Simplora made it all work together beautifully.',
    avatar: 'https://ui-avatars.com/api/?name=Rivka+Stein&background=0D8ABC&color=fff',
    rating: 5,
  },
  {
    name: 'David Nguyen',
    title: 'CEO',
    company: 'ForwardPPC',
    text: 'They set up our HubSpot automation in record time and helped us clean up years of cluttered data. Couldn\'t be happier.',
    avatar: 'https://ui-avatars.com/api/?name=David+Nguyen&background=0D8ABC&color=fff',
    rating: 5,
  },
];

export default function ClientsAndTestimonials() {
  const [current, setCurrent] = useState(0);
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
    <>
      {/* --- Clients Section --- */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center text-base font-medium text-gray-500 uppercase tracking-widest mb-12"
    >
      Trusted by innovative organizations
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-center"
    >
      {clientLogos.map((client, i) => (
        <div key={client.name} className="flex justify-center items-center">
          <img
            src={client.logo}
            alt={client.name}
            ref={(el) => (logoRefs.current[i] = el)}
            className="h-20 w-auto max-w-[160px] object-contain transition-all duration-300 hover:scale-105 drop-shadow-sm"
          />
        </div>
      ))}
    </motion.div>
  </div>
</section>

      {/* --- Testimonials Section --- */}
      <section className="py-28 bg-gradient-to-b from-[#f4f8ff] to-white" id="testimonials">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Real feedback from Simplora partners</p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -40 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100 p-10 md:p-14 max-w-3xl mx-auto flex flex-col items-center"
              >
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed italic text-center max-w-2xl mb-8">
                  “{testimonials[current].text}”
                </blockquote>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="text-center sm:text-left">
                    <p className="text-lg font-semibold text-slate-800">{testimonials[current].name}</p>
                    <p className="text-sm text-slate-500">{testimonials[current].title}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full bg-white border border-blue-100 hover:bg-blue-50 flex items-center justify-center transition shadow"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full bg-white border border-blue-100 hover:bg-blue-50 flex items-center justify-center transition shadow"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-blue-600 scale-110 shadow'
                      : 'bg-slate-300 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
