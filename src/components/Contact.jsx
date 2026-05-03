'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-10"
      >
        {/* LEFT */}
        <div>
          <h2 className="text-2xl text-text-primary mb-6">Contact</h2>
          <p className="text-text-secondary">nur.adnan@example.com</p>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-4">
            <input className="w-full p-3 bg-black/20 text-text-primary" placeholder="Name" />
            <input className="w-full p-3 bg-black/20 text-text-primary" placeholder="Email" />
            <textarea className="w-full p-3 bg-black/20 text-text-primary" placeholder="Message" />

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 px-6 py-3 text-black font-bold"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;