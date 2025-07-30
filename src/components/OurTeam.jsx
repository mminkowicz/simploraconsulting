'use client';

import React from 'react';
import { Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurTeam() {
  const teamMembers = [
    {
      name: 'Mendel Minkowicz',
      role: 'Founder & Lead Systems Architect',
      bio: 'Expert in business automation and CRM integration with 8+ years of experience transforming operations for growing companies.',
      expertise: ['ClickUp', 'HubSpot', 'Make', 'Business Strategy'],
      avatar: 'https://ui-avatars.com/api/?name=Mendel+Minkowicz&background=0D8ABC&color=fff&size=200',
      linkedin: '#'
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Automation Specialist',
      bio: 'Passionate about creating seamless workflows and helping businesses scale through intelligent automation solutions.',
      expertise: ['Zapier', 'Monday.com', 'Process Optimization', 'Training'],
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=6366F1&color=fff&size=200',
      linkedin: '#'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Integration Engineer',
      bio: 'Technical expert specializing in complex system integrations and custom development solutions.',
      expertise: ['API Development', 'Custom Scripts', 'Database Design', 'Cloud Platforms'],
      avatar: 'https://ui-avatars.com/api/?name=Mike+Rodriguez&background=059669&color=fff&size=200',
      linkedin: '#'
    }
  ];

  return (
    <div id="team" className="min-h-screen bg-white">
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

          <div
            className="text-center mb-16 animate-fade-in-up"
          >
            <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full mb-6">
              <Users className="w-4 h-4 mr-2" />
              Meet the Experts
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate experts behind Simplora who are dedicated to transforming your business operations.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Why Choose Our Team?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">8+</div>
                <div className="text-blue-100 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
                <div className="text-blue-100 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 