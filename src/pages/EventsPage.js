import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Calendar from '../components/calendar';
import EventModal from '../components/EventModal';

// Event imports
import nikhilSpeaker from '../assets/speakers/nikhil.png';
import felipeSpeaker from '../assets/speakers/felipe.png';
import vanCleveSpeaker from '../assets/speakers/vanCleve.png';
import amritSpeaker from '../assets/speakers/amritPanjabi.png';
import himanshuSpeaker from '../assets/speakers/himanshu.png';
import bankTechSpeaker from '../assets/speakers/bankTech.png';

import boardIntroEvent from '../assets/events/boardIntro.png';
import qualVsQuantEvent from '../assets/events/qualVsQuant.png';
import whatIsVcEvent from '../assets/events/whatIsVc.png';
import vcsMfcMastersEvent from '../assets/events/vcsMfcMasters.png';
import caseStudiesEvent from '../assets/events/caseStudies.png';
import speedDateEvent from '../assets/events/speedDate.png';
import memberSocialEvent from '../assets/events/memberSocial.png';

import winterAnalystProgramImg from '../assets/otherimgs/winterAnalystProgram.png';
import miniAIF from '../assets/otherimgs/miniAIF.png';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const currentMonthRef = useRef(null);

  const events = [
    { date: new Date(2024, 8, 30), time: '6:30 PM - 7:30 PM',  location: "MSTB 124", title: "Meet the Board", description: "Board intro, get to know everyone", image: boardIntroEvent },
    { date: new Date(2024, 9, 8), time: '6:30 PM - 7:30 PM', location: "MSTB 124", title: "What is Venture Capital?", description: "What is VC? History of VC? VC vs other investment types?", image: whatIsVcEvent},
    { date: new Date(2024, 9, 17), time: '6:30 PM - 7:30 PM', location: "SST 220B", title: "Speaker: Nikhil Choudhary", description: "General Partner @ Nirman VCs", image: nikhilSpeaker},
    { date: new Date(2024, 9, 22), time: '6:30 PM - 7:30 PM', location: "MSTB 124", title: "Startup Analysis", description: "Qualitative vs. Quantitative; aka how does a VC analyze a startup?", image: qualVsQuantEvent},
    { date: new Date(2024, 10, 7), time: '6:30 PM - 7:30 PM', location: "MSTB 124", title: "Speaker: Filipe Silva", description: "Head of Global Ops @ Hillside Enterprises", image: felipeSpeaker},
    { date: new Date(2024, 10, 12), time: '6:30 PM - 7:30 PM', location: "MSTB 124", title: "Venture Capital Firms 101", description: "Famous VC firms, how they are structured, and how to get involved", image: memberSocialEvent},
    { date: new Date(2024, 10, 18), time: '6:30 PM - 7:30 PM', location: "SBI 5200", title: "Speciality Masters Program Information Session", description: "We are teaming up with the Math and Finance Club to bring you the Speciality Masters Program information session!", image: vcsMfcMastersEvent},
    { date: new Date(2024, 10, 21), time: '6:30 PM - 7:30 PM', location: "MSTB 124", title: "Speaker: Himanshu Vikram Singh", description: "Sr. Financial Analyst @ CerraCap Ventures", image: himanshuSpeaker},
    { date: new Date(2024, 10, 26), time: '6:30 PM - 7:30 PM', location: "MSTB 124", title: "VC Case Studies", description: "Exploring some of the most famous stories in VC; Uber, Airbnb, etc.", image: caseStudiesEvent},
    { date: new Date(2025, 0, 13), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Analyst Program: Market Research and Investment Memos", description: "Join us for our first week of our 'Analyst Program' where you'll learn the basics of market research and how to create an effective investment memo.", image: winterAnalystProgramImg},
    { date: new Date(2025, 0, 14), time: '11:00 AM - 3:00 PM', location: "Dome of Stars Booth 30", title: "Mini AIF", description: "Come out to visit our booth at Mini AIF to hear about our new opportunities this quarter!", image: miniAIF},
    { date: new Date(2025, 0, 15), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Guest Speaker: Grant Van Cleve", description: "Managing Partner @Hangar 75 Ventures", image: vanCleveSpeaker},
    { date: new Date(2025, 0, 20), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Analyst Program: Sourcing and Due Dilligence", description: "Join us for our second week of our 'Analyst Program'!", image: winterAnalystProgramImg},
    { date: new Date(2025, 0, 22), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Bank Tech Ventures Panel", description: "Carry Ransom and Katie Quelling", image: bankTechSpeaker},
    { date: new Date(2025, 0, 27), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Analyst Program: Product-Market Fit", description: "", image: winterAnalystProgramImg},
    { date: new Date(2025, 0, 29), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Guest Speaker: Amrit Panjabi", description: "CB Insights and Alumni Ventures", image: amritSpeaker},
    { date: new Date(2025, 1, 10), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Analyst Program: KPI's and Unit Economics", description: "", image: winterAnalystProgramImg},
    { date: new Date(2025, 1, 12), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Member Social", description: "Speed Dating", image: speedDateEvent},
    { date: new Date(2025, 1, 19), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Analyst Program: Market Sizing and Valuation", description: "", image: winterAnalystProgramImg},
    { date: new Date(2025, 1, 24), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Analyst Program: Term Sheets and Financing", description: "", image: winterAnalystProgramImg},
    { date: new Date(2025, 2, 3), time: '6:00 PM - 7:00 PM', location: "Social Ecology 2 - 1306", title: "Analyst Program: VC Exits and Fund Operations", description: "", image: winterAnalystProgramImg},
  ];

  const months = [
    { name: 'September', year: 2024, month: 8 },
    { name: 'October', year: 2024, month: 9 },
    { name: 'November', year: 2024, month: 10 },
    { name: 'December', year: 2024, month: 11 },
    { name: 'January', year: 2025, month: 0 },
    { name: 'February', year: 2025, month: 1 },
    { name: 'March', year: 2025, month: 2 },
    { name: 'April', year: 2025, month: 3 },
    { name: 'May', year: 2025, month: 4 },
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
