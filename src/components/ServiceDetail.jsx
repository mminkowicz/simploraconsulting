'use client';

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Users, Zap, Target } from 'lucide-react';

const serviceDetails = {
  customization: {
    title: 'Customization',
    subtitle: 'Tailored solutions that fit your business perfectly',
    description: 'We transform off-the-shelf tools into powerful, custom systems that match your exact workflows, branding, and business requirements.',
    icon: '⚙️',
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
      {
        step: '01',
        title: 'Discovery & Analysis',
        description: 'We analyze your current processes and identify customization opportunities'
      },
      {
        step: '02',
        title: 'Design & Planning',
        description: 'Create detailed specifications and mockups for your custom solution'
      },
      {
        step: '03',
        title: 'Development & Testing',
        description: 'Build and thoroughly test your customized system'
      },
      {
        step: '04',
        title: 'Deployment & Training',
        description: 'Launch your system and train your team on the new workflows'
      }
    ],
    benefits: [
      'Increased efficiency through streamlined workflows',
      'Better user adoption with familiar interfaces',
      'Scalable solutions that grow with your business',
      'Competitive advantage through unique processes'
    ],
    platforms: ['ClickUp', 'HubSpot', 'Monday.com', 'Pipedrive', 'Salesforce', 'Custom Apps']
  },
  automation: {
    title: 'Automation',
    subtitle: 'Eliminate repetitive tasks and boost productivity',
    description: 'We design intelligent automation workflows that handle routine tasks, reduce errors, and free your team to focus on high-value work.',
    icon: '🔄',
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
      {
        step: '01',
        title: 'Process Mapping',
        description: 'Document current workflows and identify automation opportunities'
      },
      {
        step: '02',
        title: 'Automation Design',
        description: 'Design efficient automation workflows with proper error handling'
      },
      {
        step: '03',
        title: 'Implementation',
        description: 'Build and configure automation rules and triggers'
      },
      {
        step: '04',
        title: 'Testing & Optimization',
        description: 'Test thoroughly and optimize for performance and reliability'
      }
    ],
    benefits: [
      '70% reduction in manual tasks',
      'Improved accuracy and consistency',
      'Faster response times',
      '24/7 operation without human intervention'
    ],
    platforms: ['Make', 'Zapier', 'ClickUp', 'HubSpot', 'Monday.com', 'Custom Scripts']
  },
  integrations: {
    title: 'Integrations',
    subtitle: 'Connect your tools for seamless data flow',
    description: 'We build robust integrations that connect all your business tools, ensuring data flows seamlessly between systems and eliminating manual data entry.',
    icon: '🔌',
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
      {
        step: '01',
        title: 'System Audit',
        description: 'Review all your tools and identify integration needs'
      },
      {
        step: '02',
        title: 'Integration Planning',
        description: 'Design data flow maps and integration architecture'
      },
      {
        step: '03',
        title: 'Development',
        description: 'Build and test integrations with proper error handling'
      },
      {
        step: '04',
        title: 'Deployment & Monitoring',
        description: 'Launch integrations and set up monitoring systems'
      }
    ],
    benefits: [
      'Eliminate duplicate data entry',
      'Real-time data consistency across systems',
      'Improved decision-making with unified data',
      'Reduced integration maintenance costs'
    ],
    platforms: ['ClickUp', 'HubSpot', 'Make', 'Monday.com', 'Pipedrive', 'Salesforce', 'Google Workspace', 'QuickBooks']
  },
  support: {
    title: 'Management & Support',
    subtitle: 'Ongoing care for your business systems',
    description: 'We provide comprehensive ongoing support to ensure your systems run smoothly, stay updated, and continue delivering value to your business.',
    icon: '🛠️',
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
      {
        step: '01',
        title: 'Support Setup',
        description: 'Establish monitoring, backup, and support procedures'
      },
      {
        step: '02',
        title: 'Ongoing Maintenance',
        description: 'Regular updates, optimization, and system health checks'
      },
      {
        step: '03',
        title: 'User Support',
        description: 'Provide training and support for your team'
      },
      {
        step: '04',
        title: 'Continuous Improvement',
        description: 'Monitor performance and implement improvements'
      }
    ],
    benefits: [
      'Minimal downtime and disruptions',
      'Always up-to-date systems',
      'Expert support when you need it',
      'Peace of mind knowing systems are cared for'
    ],
    platforms: ['All Platforms', 'Custom Systems', 'Cloud Infrastructure']
  },
  strategy: {
    title: 'Advisory & Strategy',
    subtitle: 'Strategic guidance for your technology decisions',
    description: 'We act as your technology partner, providing strategic guidance on tool selection, system architecture, and long-term technology planning.',
    icon: '🚀',
    gradient: 'from-green-500 to-emerald-400',
    features: [
      'Technology strategy consulting',
      'Tool evaluation and selection',
      'System architecture design',
      'ROI analysis and planning',
      'Change management support',
      'Long-term technology roadmaps'
    ],
    process: [
      {
        step: '01',
        title: 'Business Assessment',
        description: 'Understand your business goals and current technology landscape'
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'Create comprehensive technology strategy and roadmap'
      },
      {
        step: '03',
        title: 'Implementation Planning',
        description: 'Plan the execution of your technology strategy'
      },
      {
        step: '04',
        title: 'Ongoing Advisory',
        description: 'Provide ongoing strategic guidance and support'
      }
    ],
    benefits: [
      'Informed technology decisions',
      'Optimized technology investments',
      'Reduced implementation risks',
      'Long-term technology alignment'
    ],
    platforms: ['Strategic Planning', 'Tool Evaluation', 'Architecture Design']
  },
  development: {
    title: 'Custom Development',
    subtitle: 'Bespoke solutions for unique business needs',
    description: 'When off-the-shelf solutions aren\'t enough, we build custom applications, scripts, and middleware that perfectly fit your business requirements.',
    icon: '💻',
    gradient: 'from-fuchsia-500 to-rose-500',
    features: [
      'Custom web applications',
      'API development',
      'Database design and optimization',
      'Mobile app development',
      'Scripting and automation',
      'Third-party integrations'
    ],
    process: [
      {
        step: '01',
        title: 'Requirements Gathering',
        description: 'Deep dive into your business needs and technical requirements'
      },
      {
        step: '02',
        title: 'Solution Design',
        description: 'Design the architecture and user experience for your custom solution'
      },
      {
        step: '03',
        title: 'Development',
        description: 'Build your custom solution with regular progress updates'
      },
      {
        step: '04',
        title: 'Testing & Deployment',
        description: 'Thorough testing and smooth deployment to production'
      }
    ],
    benefits: [
      'Perfect fit for your business needs',
      'Competitive advantage through unique solutions',
      'Scalable and maintainable code',
      'Full ownership of your custom solution'
    ],
    platforms: ['React', 'Node.js', 'Python', 'PHP', 'Mobile Development', 'Cloud Platforms']
  },
  data: {
    title: 'Data Services',
    subtitle: 'Transform your data into actionable insights',
    description: 'We help you clean, organize, and optimize your data to ensure it\'s accurate, accessible, and ready for analysis and automation.',
    icon: '📊',
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
      {
        step: '01',
        title: 'Data Assessment',
        description: 'Analyze your current data quality and structure'
      },
      {
        step: '02',
        title: 'Data Cleaning',
        description: 'Clean, deduplicate, and standardize your data'
      },
      {
        step: '03',
        title: 'Migration & Setup',
        description: 'Migrate data to new systems and set up governance'
      },
      {
        step: '04',
        title: 'Optimization',
        description: 'Optimize for performance and set up monitoring'
      }
    ],
    benefits: [
      'Improved data accuracy and reliability',
      'Better decision-making with clean data',
      'Faster system performance',
      'Reduced data-related errors'
    ],
    platforms: ['SQL Databases', 'NoSQL Databases', 'Cloud Storage', 'Analytics Platforms']
  },
  training: {
    title: 'Training & Onboarding',
    subtitle: 'Empower your team with knowledge and confidence',
    description: 'We provide comprehensive training programs that ensure your team can effectively use your systems and maximize their value.',
    icon: '🎓',
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
      {
        step: '01',
        title: 'Training Needs Assessment',
        description: 'Identify training needs and create custom programs'
      },
      {
        step: '02',
        title: 'Content Development',
        description: 'Create training materials and documentation'
      },
      {
        step: '03',
        title: 'Training Delivery',
        description: 'Deliver training through workshops and sessions'
      },
      {
        step: '04',
        title: 'Follow-up & Support',
        description: 'Provide ongoing support and additional training as needed'
      }
    ],
    benefits: [
      'Faster user adoption',
      'Reduced support requests',
      'Increased system utilization',
      'Better return on technology investment'
    ],
    platforms: ['All Business Systems', 'Custom Training Programs', 'Video Documentation']
  },
  audit: {
    title: 'Audits & Optimization',
    subtitle: 'Maximize the value of your existing systems',
    description: 'We conduct comprehensive audits of your current systems to identify opportunities for improvement, optimization, and cost savings.',
    icon: '🔍',
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
      {
        step: '01',
        title: 'Comprehensive Audit',
        description: 'Review all aspects of your current systems'
      },
      {
        step: '02',
        title: 'Analysis & Reporting',
        description: 'Analyze findings and create detailed recommendations'
      },
      {
        step: '03',
        title: 'Optimization Planning',
        description: 'Create action plan for implementing improvements'
      },
      {
        step: '04',
        title: 'Implementation Support',
        description: 'Support the implementation of optimization recommendations'
      }
    ],
    benefits: [
      'Improved system performance',
      'Reduced costs and inefficiencies',
      'Better user experience',
      'Increased ROI on technology investments'
    ],
    platforms: ['All Business Systems', 'Performance Monitoring', 'Cost Analysis']
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20">
      {/* Header */}
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} text-white text-3xl mb-6`}>
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {service.subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-lg text-gray-600">Comprehensive features to transform your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-6 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we deliver results for your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600">What you can expect from our {service.title.toLowerCase()} service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {index + 1}
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Platforms */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platforms We Work With</h2>
            <p className="text-lg text-gray-600">Compatible with your existing tools and workflows</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200"
              >
                <span className="text-gray-700 font-medium">{platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our {service.title.toLowerCase()} service can transform your business
            </p>
            <a
              href="https://calendar.app.google/7JhbHhJhNG9fHj849"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
              <Zap className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 