'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Users, Target, Award, Clock, Shield, Zap } from 'lucide-react';

/* ----------------------------------
 *  Motion helper
 * --------------------------------*/
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  viewport: { once: true },
});

export default function About() {
  return (
    <main className="pt-24 bg-white text-gray-900 overflow-hidden">
      {/* — HERO — */}
      <section className="relative isolate overflow-hidden py-32 sm:py-40 bg-gradient-to-br from-[#E0F2FE] via-[#CFFAFE] to-[#A5F3FC]">
        {/* accent blobs */}
        <div className="absolute -top-52 -left-52 w-[600px] h-[600px] bg-cyan-300/30 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-blue-400/20 rounded-full blur-[160px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.h1
            {...fadeUp()}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            About&nbsp;Simplora&nbsp;Consulting
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            We're the system architects who turn clunky tool-stacks into elegant, automated workflows.
          </motion.p>
        </div>
      </section>

      {/* — MISSION & VISION — */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                To empower businesses with technology that works seamlessly, scales effortlessly, and drives real growth. We believe that great systems should be invisible — they should just work, every time, without friction.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Simplora Consulting</strong> was founded on one simple idea: <em>systems should work for people, not the other way around.</em> We partner with growth-minded companies to streamline CRMs, automate manual tasks and connect every platform in their tech stack.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                A world where every business has access to enterprise-grade technology that's simple, powerful, and perfectly tailored to their needs. Where teams can focus on what they do best, while their systems handle the rest.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Focused</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Efficient</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Reliable</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">User-Centric</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* — CORE STORY — */}
      <section className="relative py-28 bg-gray-50">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white via-gray-200 to-white" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* narrative */}
          <motion.div {...fadeUp()} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Built for Growth, Powered by Simplicity</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Too many teams drown in disconnected CRMs, manual processes, and messy data. Simplora exists to make tech feel effortless — unifying platforms, automating the mundane, and surfacing insights you can act on.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              From bespoke Salesforce architecture to no-code automation and bullet-proof data hygiene, our team makes complexity disappear so you can focus on what matters—customers and growth.
            </p>
            <ul className="space-y-4">
              {[
                'Custom CRM architecture & process design',
                'Low-code & API integrations across every tool',
                'Automation that removes manual busy-work',
                'Data hygiene & visibility you can trust',
                'Strategic technology planning & implementation',
                'Ongoing support & system optimization'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-medium text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* decorative mockup placeholder */}
          <motion.div
            {...fadeUp(0.2)}
            className="relative aspect-video w-full rounded-3xl bg-gradient-to-br from-blue-100 via-cyan-100 to-white shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-blue-400/30 rounded-2xl blur-[80px]" />
            </div>
            <div className="absolute inset-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40" />
          </motion.div>
        </div>
      </section>

      {/* — VALUES — */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We dont settle for good enough. Every system we build is crafted with precision and attention to detail.',
                icon: Award,
                color: 'blue'
              },
              {
                title: 'Partnership',
                description: 'We\'re not just vendors — we\'re strategic partners invested in your long-term success.',
                icon: Users,
                color: 'green'
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of the curve, constantly exploring new technologies and approaches.',
                icon: Zap,
                color: 'purple'
              },
              {
                title: 'Reliability',
                description: 'Your systems need to work, every time. We build with reliability and performance in mind.',
                icon: Shield,
                color: 'orange'
              },
              {
                title: 'Efficiency',
                description: 'We optimize for speed and simplicity, eliminating waste and maximizing value.',
                icon: Clock,
                color: 'red'
              },
              {
                title: 'Growth',
                description: 'We design systems that scale with your business, supporting your journey to success.',
                icon: Target,
                color: 'indigo'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeUp(index * 0.1)}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${value.color}-100 flex items-center justify-center`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* — TEAM — */}
      <section className="relative py-32 bg-gradient-to-b from-white to-[#F0FDFA]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp()} className="text-4xl font-bold mb-16 text-gray-900">
            Meet&nbsp;the&nbsp;Simplora&nbsp;Team
          </motion.h2>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <TeamCard key={m.name} {...m} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* — CTA — */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Systems?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help streamline your technology and drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* — TEAM DATA — */
const team = [
  {
    name: 'Mendel Minkowicz',
    role: 'Founder & Systems Architect',
    bio: 'Passionate about creating systems that work seamlessly and scale effortlessly. 10+ years of experience in CRM architecture and business process optimization.',
    avatar: 'https://api.dicebear.com/8.x/fun-emoji/svg?seed=mendel',
  },
  {
    name: 'Alex Rivera',
    role: 'Senior Automation Engineer',
    bio: 'Expert in building intelligent workflows and integrations that eliminate manual work and boost productivity across organizations.',
    avatar: 'https://api.dicebear.com/8.x/fun-emoji/svg?seed=alex',
  },
  {
    name: 'Jordan Lee',
    role: 'Data Integrity Lead',
    bio: 'Specializes in data hygiene, migration, and analytics. Ensures your data is clean, reliable, and actionable for better decision-making.',
    avatar: 'https://api.dicebear.com/8.x/fun-emoji/svg?seed=jordan',
  },
];

/* — TEAM CARD — */
function TeamCard({ name, role, bio, avatar, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
      className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm text-center transition-all"
    >
      <img src={avatar} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover shadow mb-4" />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-blue-600 text-sm mt-1 mb-3">{role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </motion.div>
  );
}
