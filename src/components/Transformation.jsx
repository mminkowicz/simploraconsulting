'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

export default function Transformation() {
  const [isBeforeView, setIsBeforeView] = useState(true);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white to-blue-50" id="transformation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Business Before & After Simplora
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            How we transform messy, inefficient systems into powerful automated solutions.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          <button
            onClick={() => setIsBeforeView(true)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition ${
              isBeforeView
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Before Simplora
          </button>
          <button
            onClick={() => setIsBeforeView(false)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition ${
              !isBeforeView
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            After Simplora
          </button>
        </div>

        {/* Content */}
        <div className="rounded-3xl shadow-xl bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left: Before/After */}
            <AnimatePresence mode="wait">
              {isBeforeView ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-red-50 to-orange-100 p-6 sm:p-10 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full border border-red-200 w-fit">
                      Before: Friction & Frustration
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">Disconnected. Manual. Overwhelming.</h3>
                    <ul className="space-y-3 text-gray-700 text-base">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-red-400 rounded-full" />
                        Scattered tools with no communication
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-red-400 rounded-full" />
                        Manual data entry & duplication
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-red-400 rounded-full" />
                        Missed leads and untracked tasks
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-red-400 rounded-full" />
                        Zero clarity, tons of time wasted
                      </li>
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 sm:p-10 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full border border-green-200 w-fit">
                      After: Flow & Clarity
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">Seamless. Automated. Empowered.</h3>
                    <ul className="space-y-3 text-gray-700 text-base">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Integrated platforms that talk to each other
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Automated workflows & syncing
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        One dashboard. Total visibility.
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Peace of mind. More time. Less stress.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right: CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 sm:p-10 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Let’s Make This Your Reality</h4>
                <a
                  href="https://calendar.app.google/BYvoopidMCTQkwJn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow hover:from-blue-700 hover:to-cyan-700 transition"
                >
                  Book Your Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
