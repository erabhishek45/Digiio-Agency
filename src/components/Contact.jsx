// src/components/Contact.js
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
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
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <motion.section
      id="contact"
      className="py-28 relative"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row">
          {/* Left Info Section */}
          <motion.div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12" variants={item}>
            <motion.span className="text-primary font-bold uppercase tracking-widest text-sm" variants={item}>
              Contact Us
            </motion.span>
            <motion.h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6" variants={item}>
              Get In Touch
            </motion.h2>
            <motion.p className="text-base text-gray-300 mb-10" variants={item}>
              Have a project in mind or want to learn more about our services? Reach out to our team.
            </motion.p>

            <motion.div className="space-y-8" variants={item}>
              <motion.div className="flex items-start" variants={item}>
                <div className="bg-primary/20 bg-opacity-20 p-4 rounded-xl mr-6">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Our Headquarters</h4>
                  <p className="text-gray-400">Innovation District, 250 new delhi<br /></p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={item}>
                <div className="bg-primary/20 bg-opacity-20 p-4 rounded-xl mr-6">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Email Us</h4>
                  <p className="text-gray-400">contact@digiio.com<br />support@digiio.digital</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={item}>
                <div className="bg-primary/20 bg-opacity-20 p-4 rounded-xl mr-6">
                  <FaPhoneAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Call Us</h4>
                  <p className="text-gray-400">+91 123-789-0123<br />Mon-Fri, 9am-6pm PST</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Form Section */}
          <motion.form
            className="lg:w-1/2 glass-card p-10 rounded-2xl"
            onSubmit={handleSubmit}
            variants={item}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" variants={item}>
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark border border-gray-700 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark border border-gray-700 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </motion.div>

            <motion.div className="mb-6" variants={item}>
              <label htmlFor="service" className="block text-gray-300 font-medium mb-2">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-dark border border-gray-700 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent  text-sm"
              >
                <option value="">Select a service</option>
                <option value="3d">3D Visualization</option>
                <option value="ai">AI Integration</option>
                <option value="web3">Web3 Development</option>
                <option value="apps">Immersive Apps</option>
                <option value="data">Data Visualization</option>
                <option value="automation">Automation Systems</option>
              </select>
            </motion.div>

            <motion.div className="mb-8" variants={item}>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-dark border border-gray-700 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-sm"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-dark py-4 px-6 rounded-lg font-bold hover:bg-opacity-80 transition cursor-pointer"
              variants={item}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
