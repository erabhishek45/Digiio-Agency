import React, { useEffect, useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Clients from './components/Client';
import Services from './components/Services';
import Work from './components/Work';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode font-sans overflow-x-hidden' : 'light-mode font-sans overflow-x-hidden';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };


  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setIsMobileMenuOpen(false);
  // };

  return (
    <div className='font-sans overflow-x-hidden '>
      <AnimatedBackground />

      <Navbar
      isDarkMode={isDarkMode} 
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
      toggleTheme={toggleTheme}
      />

      <main>

        <Hero />
        <Clients />
        <Services />
        <Work />
        <Stats />
        <Testimonial />
        <CTA />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}

export default App