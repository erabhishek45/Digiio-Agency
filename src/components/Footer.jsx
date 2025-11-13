// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBehance, FaDribbble, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <motion.footer 
      className="bg-black bg-opacity-50 py-16 relative"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12" variants={item}>
          <div className="lg:col-span-2">
            <motion.a href="#" className="text-3xl font-extrabold mb-6 inline-block gradient-text" variants={item}>
              DIGIIO
            </motion.a>
            <motion.p className="text-gray-400 mb-6" variants={item}>
              Pushing the boundaries of digital innovation to create transformative experiences.
            </motion.p>
            <motion.div className="flex space-x-4" variants={item}>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaDribbble />  
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaBehance />  
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div variants={item}>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition">3D Visualization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">AI Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Web3 Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Immersive Apps</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Blog</a></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={item}>
            <h3 className="text-lg font-bold  mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">GDPR</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center" variants={item}>
          <p className="text-gray-500 mb-4 md:mb-0">© 2025 Digiio Digital. All rights reserved. </p>
          <div>
            <a href="#" className="text-gray-500 hover:text-primary transition text-sm mr-6">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary transition text-sm">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
