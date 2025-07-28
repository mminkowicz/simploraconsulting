'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { ChevronDown, CheckCircle, Clock, Users, Zap, Target, ArrowRight, X, Star, TrendingUp, Shield, Award, Play, Pause, BarChart3 } from 'lucide-react';

import clickup from '../assets/platforms/clickup.png';
import hubspot from '../assets/platforms/hubspot.png';
import make from '../assets/platforms/make.png';
import monday from '../assets/platforms/monday.png';
import pipedrive from '../assets/platforms/pipedrive logo.png';
import salesforce from '../assets/platforms/salesforce.png';
import zapier from '../assets/platforms/zapier.png';


const services = [
  {
    id: "customization",
    title: 'Customization',
    description:
      'We tailor your systems to match your exact needs — from custom fields, layouts, dashboards to roles and approvals.',
    icon: FaCogs,
    gradient: 'from-purple-500 to-indigo-500',
    features: [
      'Custom fields and data structures',
      'Branded dashboards and interfaces',
      'Role-based permissions and access',
      'Custom workflows and approval processes',
      'Integration with your existing tools',
      'White-label solutions'
    ],
    process: [
      { step: '01', title: 'Discovery & Analysis', description: 'We analyze your current processes and identify customization opportunities' },
      { step: '02', title: 'Design & Planning', description: 'Create detailed specifications and mockups for your custom solution' },
      { step: '03', title: 'Development & Testing', description: 'Build and thoroughly test your customized system' },
      { step: '04', title: 'Deployment & Training', description: 'Launch your system and train your team on the new workflows' }
    ],
    benefits: [
      'Increased efficiency through streamlined workflows',
      'Better user adoption with familiar interfaces',
      'Scalable solutions that grow with your business',
      'Competitive advantage through unique processes'
    ],
    platforms: ['ClickUp', 'HubSpot', 'Monday.com', 'Pipedrive', 'Salesforce', 'Custom Apps']
  },
  {
    id: "automation",
    title: 'Automation',
    description:
      'Say goodbye to repetitive tasks. We design powerful automations and workflows so everything runs smoothly and hands-free.',
    icon: FaSyncAlt,
    gradient: 'from-yellow-400 to-orange-400',
    features: [
      'Workflow automation design',
      'Trigger-based actions',
      'Multi-step process automation',
      'Error handling and notifications',
      'Performance monitoring',
      'Scalable automation architecture'
    ],
    process: [
      { step: '01', title: 'Process Mapping', description: 'Document current workflows and identify automation opportunities' },
      { step: '02', title: 'Automation Design', description: 'Design efficient automation workflows with proper error handling' },
      { step: '03', title: 'Implementation', description: 'Build and configure automation rules and triggers' },
      { step: '04', title: 'Testing & Optimization', description: 'Test thoroughly and optimize for performance and reliability' }
    ],
    benefits: [
      '70% reduction in manual tasks',
      'Improved accuracy and consistency',
      'Faster response times',
      '24/7 operation without human intervention'
    ],
    platforms: ['Make', 'Zapier', 'ClickUp', 'HubSpot', 'Monday.com', 'Custom Scripts']
  },
  {
    id: "integrations",
    title: 'Integrations',
    description:
      'Connect all the tools your business relies on — ClickUp, HubSpot, Make, Google Workspace, QuickBooks, and more.',
    icon: FaPlug,
    gradient: 'from-pink-500 to-red-400',
    features: [
      'API integration development',
      'Real-time data synchronization',
      'Bidirectional data flow',
      'Error handling and retry logic',
      'Data transformation and mapping',
      'Integration monitoring and alerts'
    ],
    process: [
      { step: '01', title: 'System Audit', description: 'Review all your tools and identify integration needs' },
      { step: '02', title: 'Integration Planning', description: 'Design data flow maps and integration architecture' },
      { step: '03', title: 'Development', description: 'Build and test integrations with proper error handling' },
      { step: '04', title: 'Deployment & Monitoring', description: 'Launch integrations and set up monitoring systems' }
    ],
    benefits: [
      'Eliminate duplicate data entry',
      'Real-time data consistency across systems',
      'Improved decision-making with unified data',
      'Reduced integration maintenance costs'
    ],
    platforms: ['ClickUp', 'HubSpot', 'Make', 'Monday.com', 'Pipedrive', 'Salesforce', 'Google Workspace', 'QuickBooks']
  },
  {
    id: "support",
    title: 'Management & Support',
    description:
      'Ongoing updates, troubleshooting, user support, and performance monitoring so your stack runs at peak speed.',
    icon: FaTools,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      '24/7 system monitoring',
      'Regular maintenance and updates',
      'User support and training',
      'Performance optimization',
      'Security updates and patches',
      'Backup and disaster recovery'
    ],
    process: [
      { step: '01', title: 'Support Setup', description: 'Establish monitoring, backup, and support procedures' },
      { step: '02', title: 'Ongoing Maintenance', description: 'Regular updates, optimization, and system health checks' },
      { step: '03', title: 'User Support', description: 'Provide training and support for your team' },
      { step: '04', title: 'Continuous Improvement', description: 'Monitor performance and implement improvements' }
    ],
    benefits: [
      'Minimal downtime and disruptions',
      'Always up-to-date systems',
      'Expert support when you need it',
      'Peace of mind knowing systems are cared for'
    ],
    platforms: ['All Platforms', 'Custom Systems', 'Cloud Infrastructure']
  },
  {
    id: "strategy",
    title: "Advisory & Strategy",
    description: "We're strategic partners — offering planning, tool selection, and long-term system alignment.",
    icon: FaRocket,
    gradient: "from-green-500 to-emerald-400",
    features: [
      'Technology strategy consulting',
      'Tool evaluation and selection',
      'System architecture design',
      'ROI analysis and planning',
      'Change management support',
      'Long-term technology roadmaps'
    ],
    process: [
      { step: '01', title: 'Business Assessment', description: 'Understand your business goals and current technology landscape' },
      { step: '02', title: 'Strategy Development', description: 'Create comprehensive technology strategy and roadmap' },
      { step: '03', title: 'Implementation Planning', description: 'Plan the execution of your technology strategy' },
      { step: '04', title: 'Ongoing Advisory', description: 'Provide ongoing strategic guidance and support' }
    ],
    benefits: [
      'Informed technology decisions',
      'Optimized technology investments',
      'Reduced implementation risks',
      'Long-term technology alignment'
    ],
    platforms: ['Strategic Planning', 'Tool Evaluation', 'Architecture Design']
  },
  {
    id: "development",
    title: "Custom Development",
    description: "Need more than off-the-shelf? We build custom apps, scripts, and middleware tailored to your stack.",
    icon: FaCode,
    gradient: "from-fuchsia-500 to-rose-500",
    features: [
      'Custom web applications',
      'API development',
      'Database design and optimization',
      'Mobile app development',
      'Scripting and automation',
      'Third-party integrations'
    ],
    process: [
      { step: '01', title: 'Requirements Gathering', description: 'Deep dive into your business needs and technical requirements' },
      { step: '02', title: 'Solution Design', description: 'Design the architecture and user experience for your custom solution' },
      { step: '03', title: 'Development', description: 'Build your custom solution with regular progress updates' },
      { step: '04', title: 'Testing & Deployment', description: 'Thorough testing and smooth deployment to production' }
    ],
    benefits: [
      'Perfect fit for your business needs',
      'Competitive advantage through unique solutions',
      'Scalable and maintainable code',
      'Full ownership of your custom solution'
    ],
    platforms: ['React', 'Node.js', 'Python', 'PHP', 'Mobile Development', 'Cloud Platforms']
  },
  {
    id: "data",
    title: 'Data Services',
    description:
      'Clean, import, export, dedupe, and segment data so its accurate, usable, and analytics-ready.',
    icon: FaDatabase,
    gradient: 'from-teal-500 to-blue-400',
    features: [
      'Data cleaning and deduplication',
      'Data migration and import',
      'Database optimization',
      'Data analysis and reporting',
      'Data governance setup',
      'Backup and recovery systems'
    ],
    process: [
      { step: '01', title: 'Data Assessment', description: 'Analyze your current data quality and structure' },
      { step: '02', title: 'Data Cleaning', description: 'Clean, deduplicate, and standardize your data' },
      { step: '03', title: 'Migration & Setup', description: 'Migrate data to new systems and set up governance' },
      { step: '04', title: 'Optimization', description: 'Optimize for performance and set up monitoring' }
    ],
    benefits: [
      'Improved data accuracy and reliability',
      'Better decision-making with clean data',
      'Faster system performance',
      'Reduced data-related errors'
    ],
    platforms: ['SQL Databases', 'NoSQL Databases', 'Cloud Storage', 'Analytics Platforms']
  },
  {
    id: "training",
    title: 'Training & Onboarding',
    description:
      'Empower your team with hands-on training, video docs, and onboarding flows built for adoption.',
    icon: FaGraduationCap,
    gradient: 'from-violet-500 to-purple-500',
    features: [
      'Custom training programs',
      'Video documentation',
      'Interactive workshops',
      'User adoption strategies',
      'Ongoing support and Q&A',
      'Training materials and resources'
    ],
    process: [
      { step: '01', title: 'Training Needs Assessment', description: 'Identify training needs and create custom programs' },
      { step: '02', title: 'Content Development', description: 'Create training materials and documentation' },
      { step: '03', title: 'Training Delivery', description: 'Deliver training through workshops and sessions' },
      { step: '04', title: 'Follow-up & Support', description: 'Provide ongoing support and additional training as needed' }
    ],
    benefits: [
      'Faster user adoption',
      'Reduced support requests',
      'Increased system utilization',
      'Better return on technology investment'
    ],
    platforms: ['All Business Systems', 'Custom Training Programs', 'Video Documentation']
  },
  {
    id: "audit",
    title: 'Audits & Optimization',
    description:
      'We evaluate your systems, find gaps and inefficiencies, then optimize for performance and ROI.',
    icon: FaSearchPlus,
    gradient: 'from-amber-500 to-yellow-500',
    features: [
      'System performance audits',
      'Security assessments',
      'Cost optimization analysis',
      'User adoption evaluation',
      'Integration gap analysis',
      'Optimization recommendations'
    ],
    process: [
      { step: '01', title: 'Comprehensive Audit', description: 'Review all aspects of your current systems' },
      { step: '02', title: 'Analysis & Reporting', description: 'Analyze findings and create detailed recommendations' },
      { step: '03', title: 'Optimization Planning', description: 'Create action plan for implementing improvements' },
      { step: '04', title: 'Implementation Support', description: 'Support the implementation of optimization recommendations' }
    ],
    benefits: [
      'Improved system performance',
      'Reduced costs and inefficiencies',
      'Better user experience',
      'Increased ROI on technology investments'
    ],
    platforms: ['All Business Systems', 'Performance Monitoring', 'Cost Analysis']
  },
];

const platforms = [
  { name: 'ClickUp', src: clickup },
  { name: 'HubSpot', src: hubspot },
  { name: 'Make', src: make },
  { name: 'Monday.com', src: monday },
  { name: 'Pipedrive', src: pipedrive },
  { name: 'Salesforce', src: salesforce },
  { name: 'Zapier', src: zapier },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);

  const openServiceModal = (service) => {
    setSelectedService(service);
    setActiveTab('overview');
    setIsPlaying(false);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    setActiveTab('overview');
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-6">
            <Zap className="w-4 h-4 mr-2" />
            What We Do Best
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We transform business operations through intelligent automation, seamless integrations, and custom solutions that scale with your growth.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              onClick={() => openServiceModal(service)}
            >
              {/* Service Card */}
              <div className="w-full p-6 text-left hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/30 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                    <span className="text-xs font-semibold text-white bg-black/80 px-2 py-0.5 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeServiceModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center`}>
                        <selectedService.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                        <p className="text-gray-600">{selectedService.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={closeServiceModal}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Interactive Tabs */}
                  <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
                    {[
                      { id: 'overview', label: 'Overview', icon: BarChart3 },
                      { id: 'process', label: 'Process', icon: Clock },
                      { id: 'benefits', label: 'Benefits', icon: Target },
                      { id: 'platforms', label: 'Platforms', icon: Users }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Service Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                            <div className="text-xs text-gray-600">Success Rate</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                            <div className="text-2xl font-bold text-green-600 mb-1">2-4</div>
                            <div className="text-xs text-gray-600">Weeks Delivery</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                            <div className="text-xs text-gray-600">Support</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                            <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
                            <div className="text-xs text-gray-600">Projects</div>
                          </div>
                        </div>

                        {/* Interactive Demo */}
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-gray-900">Interactive Demo</h4>
                            <button
                              onClick={togglePlay}
                              className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                            >
                              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                              {isPlaying ? 'Pause' : 'Play'}
                            </button>
                          </div>
                          <div className="space-y-3">
                            {selectedService.features.slice(0, 3).map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                              >
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center`}>
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-gray-700">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* What's Included */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            What's Included
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {selectedService.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'process' && (
                      <motion.div
                        key="process"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Interactive Process Flow */}
                        <div className="relative">
                          <div className="flex items-center justify-between mb-6">
                            <h4 className="text-lg font-semibold text-gray-900">Our Process</h4>
                            <div className="text-sm text-gray-500">4 Steps to Success</div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {selectedService.process.map((step, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                              >
                                <div className="text-center">
                                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {step.step}
                                  </div>
                                  <h5 className="font-semibold text-gray-900 mb-2">{step.title}</h5>
                                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                </div>
                                {index < selectedService.process.length - 1 && (
                                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform translate-x-2"></div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Timeline Visualization */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                          <h5 className="font-semibold text-gray-900 mb-4">Timeline Overview</h5>
                          <div className="space-y-4">
                            {selectedService.process.map((step, index) => (
                              <div key={index} className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                                  {step.step}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-gray-900">{step.title}</div>
                                  <div className="text-sm text-gray-600">{step.description}</div>
                                </div>
                                <div className="text-sm text-gray-500">Week {index + 1}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'benefits' && (
                      <motion.div
                        key="benefits"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Benefits Grid with Icons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedService.benefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                              <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                                  {index === 0 && <TrendingUp className="w-6 h-6" />}
                                  {index === 1 && <Shield className="w-6 h-6" />}
                                  {index === 2 && <Award className="w-6 h-6" />}
                                  {index === 3 && <Star className="w-6 h-6" />}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">Benefit {index + 1}</h5>
                                  <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Success Metrics */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-blue-500" />
                            Success Metrics
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-600 mb-1">70%</div>
                              <div className="text-sm text-gray-600">Efficiency Increase</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-green-600 mb-1">50%</div>
                              <div className="text-sm text-gray-600">Cost Reduction</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-purple-600 mb-1">90%</div>
                              <div className="text-sm text-gray-600">Client Satisfaction</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'platforms' && (
                      <motion.div
                        key="platforms"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Platform Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {selectedService.platforms.map((platform, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="group p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
                            >
                              <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <span className="text-lg font-bold text-gray-600">{platform.charAt(0)}</span>
                                </div>
                                <div className="font-medium text-gray-900 text-sm">{platform}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Integration Capabilities */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                          <h5 className="font-semibold text-gray-900 mb-4">Integration Capabilities</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">API Integration</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">Real-time Sync</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">Custom Workflows</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">Data Migration</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">Error Handling</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">24/7 Monitoring</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA */}
                  <div className="text-center pt-6 border-t border-gray-100 mt-6">
                    <a
                      href="https://calendar.app.google/7JhbHhJhNG9fHj849"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Get Started with {selectedService.title}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Platform Logos Slideshow */}
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
          <div className="relative overflow-hidden">
            <div 
              className="flex items-center gap-x-8 gap-y-6 animate-scroll"
              style={{ 
                width: 'fit-content',
                animation: 'scroll 30s linear infinite'
              }}
            >
              {/* First set of logos */}
              {platforms.map((p) => (
                <img
                  key={`first-${p.name}`}
                  src={p.src}
                  alt={p.name}
                  className="h-12 sm:h-16 w-auto max-w-[120px] object-contain opacity-80 hover:opacity-100 transition duration-300 flex-shrink-0"
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {platforms.map((p) => (
                <img
                  key={`second-${p.name}`}
                  src={p.src}
                  alt={p.name}
                  className="h-12 sm:h-16 w-auto max-w-[120px] object-contain opacity-80 hover:opacity-100 transition duration-300 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
