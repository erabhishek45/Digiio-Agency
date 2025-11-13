// src/components/Testimonials.js
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { testimonials } from '../assets/assets';

const Testimonial = () => {


  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className='text-yellow-400' />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt className='text-yellow-400' />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className='text-gray-300/90'/>);
    }

    return stars;
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Client Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">Trusted by Visionaries</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover-scale">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-sm tracking-wider mb-6">"{testimonial.text}"</p>
              <div className="flex">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;