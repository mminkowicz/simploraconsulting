import React, { useState } from 'react';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here (e.g., email service, API call)
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl p-8 md:p-14">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Let's Connect</h2>
            <p className="text-slate-600 mb-8 text-lg">Send us a message and our team will get back to you soon.</p>
            {submitted ? (
              <div className="text-green-600 font-semibold text-lg py-8">Thank you! We'll be in touch soon.</div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                <div>
                  <label htmlFor="name" className="block text-slate-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-700 font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg shadow hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Options */}
          <div className="flex flex-col items-start justify-center h-full gap-8">
            <div>
              <div className="text-slate-500 text-sm mb-2 font-semibold uppercase tracking-wider">Or reach us directly</div>
              <ul className="space-y-4 text-base">
                <li>
                  <a href="mailto:hello@simplora.co" className="text-blue-700 font-semibold hover:underline">hello@simplora.co</a>
                </li>
                <li>
                  <a href="tel:6786128355" className="text-blue-700 font-semibold hover:underline">678-612-8355</a>
                </li>
                <li>
                  <a
                    href="https://calendar.app.google/BYvoopidMCTQkwJn6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                  >
                    Book a Meeting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
