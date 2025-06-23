'use client';

import { motion } from 'framer-motion';
import {
  FaTools,
  FaCogs,
  FaPlug,
  FaRocket,
  FaSyncAlt,
  FaDatabase,
} from 'react-icons/fa';

import clickup from '../assets/platforms/clickup.png';
import hubspot from '../assets/platforms/hubspot.png';
import make from '../assets/platforms/make.png';
import monday from '../assets/platforms/monday.png';
import pipedrive from '../assets/platforms/pipedrive logo.png';

const services = [
  {
    title: 'System Management',
    description:
      'Ongoing support and updates for platforms like Salesforce, HubSpot, Monday, and more.',
    icon: FaTools,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Customization',
    description:
      'Tailored fields, workflows, and automation built for how your team actually operates.',
    icon: FaCogs,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Integrations',
    description:
      'Connect your forms, email, calendars, CRMs, and tools into one seamless system.',
    icon: FaPlug,
    gradient: 'from-pink-500 to-red-400',
  },
  {
    title: 'Implementation',
    description:
      'We handle setup, migration, onboarding, and launch — done fast and done right.',
    icon: FaRocket,
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Automation',
    description:
      'Reminders, sequences, drip flows, and triggers to keep everything moving automatically.',
    icon: FaSyncAlt,
    gradient: 'from-yellow-400 to-orange-400',
  },
  {
    title: 'Data Services',
    description:
      'Cleanup, deduplication, segmentation, imports, exports, and list logic done cleanly.',
    icon: FaDatabase,
    gradient: 'from-teal-500 to-blue-400',
  },
];

const platforms = [
  { name: 'ClickUp', src: clickup },
  { name: 'HubSpot', src: hubspot },
  { name: 'Make', src: make },
  { name: 'Monday.com', src: monday },
  { name: 'Pipedrive', src: pipedrive },
];

export default function Services() {
  return (
    <section className="py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help businesses simplify and scale by managing, customizing, integrating, and implementing their systems.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full group rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow hover:shadow-xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
            Platforms We Work With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {platforms.map((platform) => (
              <img
                key={platform.name}
                src={platform.src}
                alt={platform.name}
                className="h-15 w-auto max-w-[130px] object-contain opacity-80  hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
