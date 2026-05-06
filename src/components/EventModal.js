import React from 'react';
import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-[10000]"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="bg-white p-8 rounded-xl max-w-4xl w-full border border-slate-200 shadow-2xl text-slate-900"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex items-center">
          <img 
            src={event.image}
            alt={event.title}
            className="w-full object-contain h-auto max-h-64 rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-violet-900 break-words">{event.title}</h2>
          <p className="text-xl mb-4 text-slate-700">Date: {event.date.toDateString()}</p>
          <p className="text-xl mb-4 text-slate-700">Time: {event.time}</p>
          <p className="text-xl mb-4 text-slate-700">Location: {event.location}</p>
          <p className="text-lg text-slate-600 leading-relaxed">{event.description}</p>
          <button
            onClick={onClose}
            className="mt-6 bg-amber-400 text-slate-900 px-4 py-2 rounded-full font-bold hover:bg-violet-800 hover:text-white transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default EventModal;
