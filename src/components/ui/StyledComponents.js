import React from 'react';
import { motion } from 'framer-motion';

export const StyledTitle = ({ children }) => (
  <h1 className="text-5xl font-bold mb-4 relative inline-block">
    {children.split('').map((char, index) => (
      <span
        key={index}
        className="relative z-10 text-[#270765]"
        style={{
          display: 'inline-block',
          transform: `rotate(${Math.random() * 10 - 5}deg)`,
        }}
      >
        {char}
        <span
          className="absolute bottom-0 left-0 w-full h-1/2 bg-[#ffbd59] -z-10"
          style={{
            transform: `skew(${Math.random() * 20 - 10}deg, ${Math.random() * 20 - 10}deg)`,
          }}
        />
      </span>
    ))}
  </h1>
);

export const StyledSubheading = ({ children }) => (
  <h2 className="text-4xl font-bold mb-8 pb-2 border-b-4 border-[#ffbd59] inline-block">
    {children}
  </h2>
);

export const InteractiveButton = ({ label, onClick }) => (
  <motion.button
    onClick={onClick}
    className="px-6 py-2 bg-yellow-400 text-purple-900 rounded-full font-bold hover:bg-white hover:text-purple-900 transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);
