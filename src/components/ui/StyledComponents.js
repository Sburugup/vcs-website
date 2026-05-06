import React from 'react';
import { motion } from 'framer-motion';

export const StyledTitle = ({ children }) => (
  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-violet-900">
    <span className="relative inline-block">
      {children}
      <span className="absolute left-0 -bottom-1 h-1 w-24 rounded-full bg-amber-300/80" aria-hidden />
    </span>
  </h1>
);

export const StyledSubheading = ({ children }) => (
  <h2 className="text-4xl font-bold mb-8 pb-2 border-b-2 border-violet-200 text-slate-900 inline-block">
    {children}
  </h2>
);

export const InteractiveButton = ({ label, onClick }) => (
  <motion.button
    onClick={onClick}
    className="px-6 py-2 bg-violet-700 text-white rounded-full font-bold shadow-sm hover:bg-violet-800 transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);
