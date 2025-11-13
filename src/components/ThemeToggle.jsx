// src/components/ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-2">
      <i className="fas fa-moon text-primary"></i>
      <div 
        id="themeToggle" 
        className="theme-toggle" 
        onClick={toggleTheme}
      ></div>
      <i className="fas fa-sun text-yellow-400"></i>
    </div>
  );
};

export default ThemeToggle;