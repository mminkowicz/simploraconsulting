'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Lightbulb, Target, Users, Award, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurStory() {
  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started with a simple idea: help businesses work smarter, not harder.',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'First 10 Clients',
      description: 'Proved our approach works with successful automation projects.',
      icon: Target
    },
    {
      year: '2022',
      title: 'Team Growth',
      description: 'Expanded our team and capabilities to serve more industries.',
      icon: Users
    },
    {
      year: '2023',
      title: 'Platform Recognition',
      description: 'Became certified partners with major platforms like ClickUp and HubSpot.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a top automation partner with 200+ successful projects.',
      icon: Star
    }
  ];

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
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Journey
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a simple idea to transforming hundreds of businesses - here's how Simplora became the trusted partner for business automation.
            </p>
          </motion.div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Born from Frustration
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Simplora was born from a simple observation: too many businesses were struggling with disconnected tools, manual processes, and systems that worked against them instead of for them.
                </p>
                <p>
                  What started as helping a few friends streamline their operations has grown into a mission to democratize business automation. We believe every business, regardless of size, deserves systems that work seamlessly together.
                </p>
                <p>
                  Today, we're a team of systems architects, automation specialists, and business strategists who speak both tech and business fluently. We don't just implement tools — we transform how you work.
                </p>
              </div>

              {/* Values */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Trust & Reliability</div>
                    <div className="text-sm text-gray-600">We build systems you can depend on, day in and day out</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Innovation & Excellence</div>
                    <div className="text-sm text-gray-600">We stay ahead of the curve with cutting-edge solutions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Client Success</div>
                    <div className="text-sm text-gray-600">Your success is our success - we're invested in your growth</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Our Journey
              </h3>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      <milestone.icon className="w-4 h-4" />
                    </div>
                    <div className="text-sm text-blue-600 font-semibold mb-2">{milestone.year}</div>
                    <div className="font-semibold text-gray-900 mb-1">{milestone.title}</div>
                    <div className="text-gray-600 text-sm">{milestone.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 