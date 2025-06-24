'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaTools,
  FaCogs,
  FaPlug,
  FaRocket,
  FaSyncAlt,
  FaDatabase,
  FaCode,
  FaGraduationCap,
  FaSearchPlus
} from 'react-icons/fa';

import clickup from '../assets/platforms/clickup.png';
import hubspot from '../assets/platforms/hubspot.png';
import make from '../assets/platforms/make.png';
import monday from '../assets/platforms/monday.png';
import pipedrive from '../assets/platforms/pipedrive logo.png';

const services = [
  {
    id: "customization",
    title: 'Customization',
    description:
      'We tailor your systems to match your exact needs — from custom fields, layouts, dashboards to roles and approvals.',
    icon: FaCogs,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: "automation",
    title: 'Automation',
    description:
      'Say goodbye to repetitive tasks. We design powerful automations and workflows so everything runs smoothly and hands-free.',
    icon: FaSyncAlt,
    gradient: 'from-yellow-400 to-orange-400',
  },
  {
    id: "integrations",
    title: 'Integrations',
    description:
      'Connect all the tools your business relies on — ClickUp, HubSpot, Make, Google Workspace, QuickBooks, and more.',
    icon: FaPlug,
    gradient: 'from-pink-500 to-red-400',
  },
  {
    id: "support",
    title: 'Management & Support',
    description:
      'Ongoing updates, troubleshooting, user support, and performance monitoring so your stack runs at peak speed.',
    icon: FaTools,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: "strategy",
    title: "Advisory & Strategy",
    description: "We’re strategic partners — offering planning, tool selection, and long-term system alignment.",
    icon: FaRocket,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    id: "development",
    title: "Custom Development",
    description: "Need more than off-the-shelf? We build custom apps, scripts, and middleware tailored to your stack.",
    icon: FaCode,
    gradient: "from-fuchsia-500 to-rose-500",
  },
  {
    id: "data",
    title: 'Data Services',
    description:
      'Clean, import, export, dedupe, and segment data so it’s accurate, usable, and analytics-ready.',
    icon: FaDatabase,
    gradient: 'from-teal-500 to-blue-400',
  },
  {
    id: "training",
    title: 'Training & Onboarding',
    description:
      'Empower your team with hands-on training, video docs, and onboarding flows built for adoption.',
    icon: FaGraduationCap,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: "audit",
    title: 'Audits & Optimization',
    description:
      'We evaluate your systems, find gaps and inefficiencies, then optimize for performance and ROI.',
    icon: FaSearchPlus,
    gradient: 'from-amber-500 to-yellow-500',
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Optamyze simplifies, automates, and elevates the systems that power modern businesses.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/services#${service.id}`} className="block h-full group">
                <div className="h-full rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow hover:shadow-2xl p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xs font-semibold text-white bg-black/80 px-2 py-0.5 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-block text-sm font-semibold text-blue-600 hover:underline">
                    View More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Platform Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 text-center"
        >
          <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
            Platforms We Work With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {platforms.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={p.name}
                className="h-12 sm:h-16 w-auto max-w-[120px] object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
