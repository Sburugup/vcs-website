import React from 'react';
import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="bg-purple-800 p-8 rounded-lg max-w-4xl w-full"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400 break-words">{event.title}</h2>
          <p className="text-xl mb-4">Date: {event.date.toDateString()}</p>
          <p className="text-xl mb-4">Time: {event.time}</p>
          <p className="text-xl mb-4">Location: {event.location}</p>
          <p className="text-lg">{event.description}</p>
          <button
            onClick={onClose}
            className="mt-6 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold hover:bg-white transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default EventModal;
