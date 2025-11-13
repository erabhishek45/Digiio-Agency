// src/components/CTA.js
import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <motion.section
      className="py-28 relative"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl  mx-auto px-6 text-center">
        <motion.div className="glass-card rounded-3xl p-16" variants={item}>
          <motion.span className="text-primary font-bold uppercase tracking-widest text-sm" variants={item}>
            Ready to Begin?
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 max-w-3xl mx-auto"
            variants={item}
          >
            Let's Build Something Extraordinary Together
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            variants={item}
          >
            Schedule a consultation with our team to discuss your project vision and requirements.
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block bg-primary text-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-80 transition"
            variants={item}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
