import React from 'react';
import { motion } from 'framer-motion';

const Calendar = ({ monthData, events, onEventClick }) => {
  const daysInMonth = new Date(monthData.year, monthData.month + 1, 0).getDate();
  const firstDayOfMonth = new Date(monthData.year, monthData.month, 1).getDay();
  
  const days = [...Array(daysInMonth).keys()].map(i => i + 1);
  const blanks = [...Array(firstDayOfMonth).keys()];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-violet-900">{monthData.name} {monthData.year}</h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold text-slate-600 text-sm">{day}</div>
        ))}
        {blanks.map((_, index) => (
          <div key={`blank-${index}`} className="h-24 bg-slate-100 rounded-lg border border-slate-200"></div>
        ))}
        {days.map(day => {
          const dateEvents = events.filter(event => event.date.getDate() === day);
          return (
            <div key={day} className="h-24 bg-white rounded-lg p-1 overflow-hidden border border-slate-200 shadow-sm">
              <div className="text-sm mb-1 text-slate-700 font-medium">{day}</div>
              {dateEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-violet-100 text-violet-900 text-xs p-1 mb-1 rounded cursor-pointer border border-violet-200 hover:bg-violet-200"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => onEventClick(event)}
                >
                  {event.title}
                </motion.div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;