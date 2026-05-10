'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

/* ── SVG Icons ── */
const LinkedinSvg = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookSvg = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/* ── Contact Info Card ── */
const ContactCard = ({ Icon, title, value, href, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, transition: { duration: 0.25 } }}
    className="group"
  >
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/25 group-hover:to-accent-purple/25 transition-all duration-500 blur-sm" />
      <div className="relative glass-card rounded-2xl p-6 border border-white/10 group-hover:border-accent-blue/20 transition-all duration-500 flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/20 transition-colors duration-300">
          <Icon size={22} />
        </div>
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary">{title}</h4>
        <p className="text-xs text-text-secondary break-all leading-relaxed">{value}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:gap-3 transition-all duration-300 mt-1"
        >
          Write me <ArrowRight size={13} />
        </a>
      </div>
    </div>
  </motion.div>
);

/* ── Contact Section ── */
const Contact = () => {




  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ifj6zo8',
      'template_ssxexfx',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'Kyo4WaV3GnK2mJ1Bv'
    )
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Failed to send!');
      });
  };





  return (
    <section id="contact" className="py-32 px-6 lg:px-12 overflow-hidden relative">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-3xl font-display font-black text-text-primary text-center">
            Get in Touch
          </h2>
          <p className="text-[9px] text-text-secondary font-bold uppercase tracking-widest mt-4">
            Contact Me
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Contact Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[16px] text-center mb-4 font-bold text-text-primary mb-2">Talk to me</h3>
            

            <div className="space-y-5">
              <ContactCard
                Icon={Mail}
                title="EMAIL"
                value="jjjjahidhasan999@gmail.com"
                href="mailto:jjjjahidhasan999@gmail.com"
                delay={0.1}
              />
              <ContactCard
                Icon={LinkedinSvg}
                title="LINKEDIN"
                value="www.linkedin.com/in/jahid--hasan"
                href="https://www.linkedin.com/in/jahid--hasan"
                delay={0.2}
              />
              <ContactCard
                Icon={FacebookSvg}
                title="FACEBOOK"
                value="facebook.com/jahidhasan"
                href="https://www.facebook.com/share/1KgUXoTT3Z/?mibextid=wwXIfr"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[16px] text-center mb-4 font-bold text-text-primary mb-2">Write me your project</h3>
           

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="group">
                <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary mb-2 block">Name</label>
                <div className="relative">
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-accent-blue/0 to-accent-purple/0 group-focus-within:from-accent-blue/30 group-focus-within:to-accent-purple/30 transition-all duration-500 blur-sm" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Insert your Name"
                    className="relative w-full px-5 py-4 rounded-xl glass-card border border-white/10 focus:border-accent-blue/30 bg-transparent text-text-primary text-sm placeholder:text-text-secondary/50 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary mb-2 block">Email</label>
                <div className="relative">
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-accent-blue/0 to-accent-purple/0 group-focus-within:from-accent-blue/30 group-focus-within:to-accent-purple/30 transition-all duration-500 blur-sm" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Insert your email"
                    className="relative w-full px-5 py-4 rounded-xl glass-card border border-white/10 focus:border-accent-blue/30 bg-transparent text-text-primary text-sm placeholder:text-text-secondary/50 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Project */}
              <div className="group">
                <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary mb-2 block">Project</label>
                <div className="relative">
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-accent-blue/0 to-accent-purple/0 group-focus-within:from-accent-blue/30 group-focus-within:to-accent-purple/30 transition-all duration-500 blur-sm" />
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your project"
                    className="relative w-full px-5 py-4 rounded-xl glass-card border border-white/10 focus:border-accent-blue/30 bg-transparent text-text-primary text-sm placeholder:text-text-secondary/50 outline-none transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative group/btn w-full sm:w-auto"
              >
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="text-[15px] px-10 py-4 glass-card text-text-primary font-bold rounded-xl transition-all flex items-center gap-2 group hover:bg-white/[0.05]">
                  Send Message
                  <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 text-accent-blue" />
                </div>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;