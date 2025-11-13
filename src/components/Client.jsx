// src/components/Clients.js
import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = ['NVIDIA', 'ADIDAS', 'TESLA', 'SPOTIFY', 'AIRBNB'];

  // Motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 uppercase tracking-widest text-sm mb-10">
          Trusted by innovative brands worldwide
        </p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="h-8 text-xl font-bold text-gray-400 client-logo"
              variants={item}
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
