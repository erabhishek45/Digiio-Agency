// src/components/Stats.js
import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../assets/assets';

const Stats = () => {
  

  // Framer Motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="glass-card rounded-3xl p-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="p-6"
                variants={item}
              >
                <h3 className={`text-5xl font-bold ${stat.color} mb-3`}>{stat.number}</h3>
                <p className="text-gray-400 uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
