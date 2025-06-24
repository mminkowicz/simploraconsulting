import React from "react";
import {
  Settings,
  Zap,
  Link as LinkIcon,
  Headphones,
  Lightbulb,
  Code,
  Database,
  GraduationCap,
  Search,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "customization",
    title: "System Customization",
    icon: Settings,
    gradient: "from-purple-500 to-indigo-500",
    description:
      "Tailor your CRM or task management system with custom fields, layouts, dashboards, and approval flows that reflect your unique business processes.",
    features: [
      "Custom field creation & layout design",
      "Role-based access controls",
      "Approval workflows & pipelines",
      "Custom dashboards & reports",
      "Platform branding & white-labeling",
    ],
  },
  {
    id: "automation",
    title: "Process Automation",
    icon: Zap,
    gradient: "from-yellow-400 to-orange-400",
    description:
      "Save hundreds of hours by automating repetitive tasks like email notifications, data updates, task creation, follow-ups, and more.",
    features: [
      "Trigger-based automation",
      "Multi-step workflows",
      "Email & SMS sequences",
      "Auto-assign tasks or deals",
      "Zapier/Make automations",
    ],
  },
  {
    id: "integrations",
    title: "System Integrations",
    icon: LinkIcon,
    gradient: "from-pink-500 to-red-400",
    description:
      "We integrate all your tools — from CRMs and payment gateways to project tools and databases — for smooth, synchronized workflows.",
    features: [
      "HubSpot / ClickUp / Pipedrive integrations",
      "Google Workspace & QuickBooks sync",
      "Custom API middleware & webhooks",
      "Real-time 2-way syncing",
      "Integration monitoring & support",
    ],
  },
  {
    id: "support",
    title: "Management & Support",
    icon: Headphones,
    gradient: "from-blue-500 to-cyan-500",
    description:
      "Ongoing system support, performance tuning, bug fixes, and updates — we keep your systems running at peak performance 24/7.",
    features: [
      "Weekly performance audits",
      "Dedicated tech support",
      "System updates & fixes",
      "User management & access",
      "Emergency response availability",
    ],
  },
  {
    id: "strategy",
    title: "Advisory & Strategy",
    icon: Lightbulb,
    gradient: "from-green-500 to-emerald-400",
    description:
      "We advise on the best tools and strategies to future-proof your business. Get guidance on tech roadmaps, platform selection, and scaling.",
    features: [
      "System audit & review",
      "Tool/platform recommendations",
      "Scalable architecture design",
      "ROI and cost analysis",
      "Digital transformation planning",
    ],
  },
  {
    id: "development",
    title: "Custom Development",
    icon: Code,
    gradient: "from-fuchsia-500 to-rose-500",
    description:
      "Need something that doesn’t exist? We’ll build it. From mini apps and scripts to full API-based middleware.",
    features: [
      "Custom UI apps or portals",
      "Backend scripts & functions",
      "Middleware & webhook bridges",
      "Database design",
      "Tailored business logic",
    ],
  },
  {
    id: "data",
    title: "Data Services",
    icon: Database,
    gradient: "from-teal-500 to-blue-400",
    description:
      "We clean, dedupe, segment, and restructure your data so you get the most value out of it.",
    features: [
      "Bulk import/export & deduplication",
      "Data validation & cleansing",
      "Smart segmentation strategies",
      "Analytics dashboards",
      "Data migration & backup",
    ],
  },
  {
    id: "training",
    title: "Training & Onboarding",
    icon: GraduationCap,
    gradient: "from-violet-500 to-purple-500",
    description:
      "We help your team learn and use your systems with confidence — from hands-on workshops to video tutorials.",
    features: [
      "Custom training sessions",
      "Onboarding workflows",
      "Documentation libraries",
      "Loom video tutorials",
      "Live Q&A support",
    ],
  },
  {
    id: "audit",
    title: "Audits & Optimization",
    icon: Search,
    gradient: "from-amber-500 to-yellow-500",
    description:
      "We dig deep into your current setup, find what’s not working, and show you how to improve performance, security, and ROI.",
    features: [
      "Performance benchmarking",
      "Inefficiency detection",
      "Security audit",
      "System optimization plan",
      "Implementation roadmap",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">What We Do</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our core services designed to streamline, optimize, and scale your business systems.
          </p>
        </div>

        {services.map((service, index) => {
          const Icon = service.icon;
          const reverse = index % 2 === 1;
          return (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row ${
                reverse ? "lg:flex-row-reverse" : ""
              } items-center gap-12`}
              id={service.id}
            >
              <div className="lg:w-1/2 space-y-4">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`lg:w-1/2 rounded-xl shadow-lg bg-gradient-to-br ${service.gradient} text-white p-10 w-full`}
              >
                <h3 className="text-2xl font-bold mb-4">Why it matters</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {service.title} gives you the edge by turning your systems from tools into growth engines. We implement with clarity, so you're never left confused or overwhelmed.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
