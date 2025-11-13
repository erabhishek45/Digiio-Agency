// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="mt-20 pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center relative z-10">
        {/* ==== TEXT SECTION ==== */}
        <motion.div
          className="w-full text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <span className="text-stroke">WE BUILD</span><br />
            <span className="gradient-text">DIGITAL FUTURES</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            Nexa transforms businesses through cutting-edge digital solutions that blend innovative design with advanced technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15, delayChildren: 0.4 }
              }
            }}
          >
            <motion.a
              href="#contact"
              className="bg-primary text-dark px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-opacity-80 transition-all hover:scale-105 duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Start Your Project
            </motion.a>

            <motion.a
              href="#work"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg text-center transition-all hover:text-primary/80 hover:scale-105 duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ==== IMAGE SECTION ==== */}
        <motion.div
          className="w-full flex justify-center"
          // initial={{ opacity: 0, scale: 0.95 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true, amount: 0.3 }}
          // transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="relative w-full max-w-5xl">
            {/* Background Box */}
            {/* <motion.div
              className="w-full h-full rounded-2xl absolute -z-10 top-6 left-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            ></motion.div> */}

            {/* Main Image */}
            <motion.img
              src={assets.heroImg}
              alt="Digital innovation"
              className="rounded-2xl shadow-2xl w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />

            {/* Floating Award Box */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-dark p-6 rounded-2xl shadow-xl border border-gray-800 w-3/4"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center">
                <div className="bg-primary/60 bg-opacity-20 p-3 rounded-lg mr-4">
                  {/* <i className="fas fa-trophy text-primary text-2xl"></i> */}
                  <FaTrophy />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Award Winning</h3>
                  <p className="text-gray-400">Recognized by THEABHISHEKCODES 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
