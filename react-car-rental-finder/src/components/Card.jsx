import React from 'react';

const Card = ({ children, variant = 'light' }) => {
  // Determine background based on variant
  const bgClass =
    variant === 'dark'
      ? 'bg-teal-600 text-white'   // Dark teal with white text
      : 'bg-teal-50 text-teal-900'; // Light teal with dark text

  return (
    <div
      className={`${bgClass} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      {children}
    </div>
  );
};

export default Card;
