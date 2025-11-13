import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-accent opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary opacity-10 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default AnimatedBackground;