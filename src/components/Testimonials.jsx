'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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
    name: 'Emily Watson',
    title: 'Director of Sales',
    company: 'Velocity Corp',
    text: 'Our CRM customization is exactly what we needed. Lead conversion improved by 180% since implementation.',
    avatar: '/avatars/emily.jpg',
    rating: 5,
  },
  {
    name: 'David Lee',
    title: 'COO',
    company: 'Bridgeworks',
    text: 'The automation Simplora built out saved us hours weekly and gave leadership visibility we never had before.',
    avatar: '/avatars/david.jpg',
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
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 150 + i * 100);
      }
    });
  }, []);

  return (
    <>
      {/* Logos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-sm sm:text-base font-semibold text-gray-500 mb-12 uppercase tracking-widest"
          >
            Trusted by forward-thinking organizations
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-16 gap-y-10"
          >
            {clientLogos.map((client, i) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                ref={(el) => (logoRefs.current[i] = el)}
                className="h-7 sm:h-9 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from businesses that transformed with Simplora
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 max-w-4xl mx-auto"
              >
                <div className="text-center space-y-6">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 italic leading-relaxed max-w-3xl mx-auto">
                    “{testimonials[current].text}”
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-base sm:text-lg">
                        {testimonials[current].name}
                      </div>
                      <div className="text-sm sm:text-base text-gray-600">{testimonials[current].title}</div>
                      <div className="text-sm sm:text-base text-blue-600 font-medium">{testimonials[current].company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 hover:border-blue-400 hover:bg-blue-100 flex items-center justify-center transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 hover:border-blue-400 hover:bg-blue-100 flex items-center justify-center transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-blue-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
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
