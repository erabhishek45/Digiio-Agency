// src/components/Header.js
import React from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({
  isDarkMode,
  isMobileMenuOpen,
  toggleMobileMenu,
  toggleTheme,
}) => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto px-6 py-6 flex justify-between items-center fixed w-full backdrop-blur-3xl z-50"
    >
      {/* ==== LOGO ==== */}
      <motion.a
        href="#"
        className="text-3xl font-extrabold"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <span className="gradient-text">DIGIIO</span>
      </motion.a>

      {/* ==== NAVIGATION MENU ==== */}
      {/* <AnimatePresence> */}
      {isMobileMenuOpen && (
        <motion.div
          key="mobileMenu"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="
          fixed inset-0 
          h-screen w-screen 
          flex flex-col items-center justify-center 
          backdrop-blur-xl bg-black/70 
          space-y-6 p-10 lg:hidden
        "
        >
          {/* === Nav Links === */}
          {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              className="text-2xl font-semibold hover:text-primary transition py-3"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}

          {/* === CTA Button === */}
          <motion.a
            href="#contact"
            className="bg-primary text-dark px-8 py-3 rounded-full font-bold hover:bg-opacity-80 transition mt-4"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>

          {/* === Close Icon === */}
          <motion.button
            aria-label="Close Menu"
            className="absolute top-6 right-6 text-3xl"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.8 }}
          >
            <FaTimes />
          </motion.button>
        </motion.div>
      )}

      {/* </AnimatePresence> */}

      {/* ==== DESKTOP MENU ==== */}
      <div className="hidden lg:flex lg:items-center lg:space-x-12">
        {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
            className="text-lg font-medium hover:text-primary transition py-3"
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.a>
        ))}

        <motion.a
          href="#contact"
          className="bg-primary text-dark px-8 py-2 rounded-full font-bold hover:bg-opacity-80 transition mt-4 lg:mt-0 hover:-translate-y-1 duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.a>
      </div>

      {/* ==== RIGHT SIDE CONTROLS ==== */}
      <div className="flex items-center space-x-4">
        {/* === Theme Toggle Button === */}
        <motion.button
          id="themeToggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="text-2xl cursor-pointer"
          whileTap={{ rotate: 360, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </motion.button>

        {/* === Mobile Menu Icon === */}
        <motion.button
          aria-label="Open Menu"
          className="lg:hidden focus:outline-none text-2xl"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
