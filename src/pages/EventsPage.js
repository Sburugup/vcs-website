import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Calendar from '../components/calendar';
import EventModal from '../components/EventModal';

// Event imports
// import nikhilSpeaker from '../assets/speakers/nikhil.png';
// import felipeSpeaker from '../assets/speakers/felipe.png';
// import vanCleveSpeaker from '../assets/speakers/vanCleve.png';
// import amritSpeaker from '../assets/speakers/amritPanjabi.png';
// import himanshuSpeaker from '../assets/speakers/himanshu.png';
// import bankTechSpeaker from '../assets/speakers/bankTech.png';

import boardIntroEvent from '../assets/events/boardIntro.png';
// import qualVsQuantEvent from '../assets/events/qualVsQuant.png';
// import whatIsVcEvent from '../assets/events/whatIsVc.png';
// import vcsMfcMastersEvent from '../assets/events/vcsMfcMasters.png';
// import caseStudiesEvent from '../assets/events/caseStudies.png';
// import speedDateEvent from '../assets/events/speedDate.png';
// import memberSocialEvent from '../assets/events/memberSocial.png';

// import winterAnalystProgramImg from '../assets/otherimgs/winterAnalystProgram.png';
// import miniAIF from '../assets/otherimgs/miniAIF.png';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const currentMonthRef = useRef(null);

  const events = [
    { date: new Date(2025, 8, 29), time: '6:30 PM - 7:30 PM',  location: "Santora Pitch Lab", title: "Meet the Board", description: "Board intro, get to know everyone", image: boardIntroEvent },
    { date: new Date(2025, 9, 6), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Intro to Venture Capital", description: "Fall Quarter Program: Week 2", image: boardIntroEvent },
    { date: new Date(2025, 9, 13), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Deal Sourcing and Due Diligence", description: "Fall Quarter Program: Week 3", image: boardIntroEvent },
    { date: new Date(2025, 9, 20), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Valuation Basics", description: "Fall Quarter Program: Week 4", image: boardIntroEvent },
    { date: new Date(2025, 9, 22), time: '6:30 PM - 7:30 PM',  location: "Santora Pitch Lab", title: "Speaker Event - CerraCap Ventures", description: "Himanshu Singh, Sr Financial Analyst, talking about Life in and around Venture Capital", image: boardIntroEvent},
    { date: new Date(2025, 10, 3), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Practice, Problems & Markets", description: "Fall Quarter Program: Week 6", image: boardIntroEvent },
    { date: new Date(2025, 10, 10), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Cap Tables & Dilution", description: "Fall Quarter Program: Week 7", image: boardIntroEvent },
    { date: new Date(2025, 10, 17), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "VC Fund Finance", description: "Fall Quarter Program: Week 8", image: boardIntroEvent },
    { date: new Date(2025, 10, 24), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "VC Fund ToolKit", description: "Fall Quarter Program: Week 9", image: boardIntroEvent },
  ];

  const months = [
    { name: 'September', year: 2025, month: 8 },
    { name: 'October', year: 2025, month: 9 },
    { name: 'November', year: 2025, month: 10 },
    { name: 'December', year: 2025, month: 11 },
    { name: 'January', year: 2026, month: 0 },
    { name: 'February', year: 2026, month: 1 },
    { name: 'March', year: 2026, month: 2 },
    { name: 'April', year: 2026, month: 3 },
    { name: 'May', year: 2026, month: 4 },
    { name: 'June', year: 2025, month: 5 }
  ];

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (currentMonthRef.current) {
      currentMonthRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">Upcoming Events</h1>
        {months.map((monthData) => (
          <div
            key={monthData.name}
            ref={monthData.month === currentMonth && monthData.year === currentYear ? currentMonthRef : null}
          >
            <Calendar 
              monthData={monthData} 
              events={events.filter(event => event.date.getMonth() === monthData.month)}
              onEventClick={setSelectedEvent}
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;
