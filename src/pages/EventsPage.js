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
import cerracapEvent from '../assets/speakers/cerracapEvent.png';
import boardIntroEvent from '../assets/events/boardIntro.png';
import fallwk2 from '../assets/events/fall quarter wk 2 2025.png';
import fallwk3 from '../assets/events/fall quarter wk 3 2025.png';
import fallwk4 from '../assets/events/fall quarter wk 4 2025.png';

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
    { date: new Date(2025, 9, 6), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Intro to Venture Capital", description: "Fall Quarter Program: Week 2", image: fallwk2 },
    { date: new Date(2025, 9, 13), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Deal Sourcing and Due Diligence", description: "Fall Quarter Program: Week 3", image: fallwk3 },
    { date: new Date(2025, 9, 20), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Valuation Basics", description: "Fall Quarter Program: Week 4", image: fallwk4 },
    { date: new Date(2025, 9, 22), time: '6:30 PM - 7:30 PM',  location: "Santora Pitch Lab", title: "Speaker Event - CerraCap Ventures", description: "Himanshu Singh, Sr Financial Analyst, talking about Life in and around Venture Capital", image: cerracapEvent},
    { date: new Date(2025, 10, 3), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Practice, Problems & Markets", description: "Fall Quarter Program: Week 6", image: boardIntroEvent },
    { date: new Date(2025, 10, 10), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "Cap Tables & Dilution", description: "Fall Quarter Program: Week 7", image: boardIntroEvent },
    { date: new Date(2025, 10, 17), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "VC Fund Finance", description: "Fall Quarter Program: Week 8", image: boardIntroEvent },
    { date: new Date(2025, 10, 24), time: '6:00 PM - 7:00 PM',  location: "SST 122", title: "VC Fund ToolKit", description: "Fall Quarter Program: Week 9", image: boardIntroEvent },
    { date: new Date(2025, 11, 4), time: '5:00 PM - 9:00 PM',  location: "Chipotle UTC", title: "Chipotle Fundraiser", description: "Come support VCS at Chipotle"},
     { date: new Date(2026, 0, 14), time: '6:00 PM - 7:00 PM',  location: "Santora Pitch Lab", title: "Program Kickoff", description: "Giving everyone access to internship applications", image: boardIntroEvent },
    { date: new Date(2026, 0, 21), time: '6:00 PM - 7:00 PM',  location: "SSL 129", title: "VC Industry Deep Dive", description: "Using Pitchbook to understand industries.", image: fallwk2 },
    { date: new Date(2026, 0, 28), time: '6:00 PM - 7:00 PM',  location: "SSL 129", title: "Anti VC Framework", description: "Taking a look at successful companies that weren't supported by VCs", image: fallwk3 },
    { date: new Date(2026, 1, 11), time: '6:00 PM - 7:00 PM',  location: "SSL 129", title: "Pitch Deck Guide", description: "Going over creating a pitch deck", image: fallwk4 },
    { date: new Date(2026, 1, 18), time: '6:30 PM - 7:30 PM',  location: "SSL 129", title: "Deal Showcase", description: "Interns present their deal sourcing projects"},
    { date: new Date(2026, 1, 25), time: '6:00 PM - 7:00 PM',  location: "SSL 129", title: "Interview 101", description: "Exxplaining behavioral and technical interview questions"},
    { date: new Date(2026, 2, 4), time: '6:00 PM - 7:00 PM',  location: "SSL 129", title: "Startup Red Flags", description: "What to avoid in startups based on financial metrics"},
    {
      date: new Date(2026, 9, 6),
      time: 'TBD',
      location: 'TBD',
      title: 'Fall Kickoff / First General Meeting',
      description: 'Tentative. Introduce VCS and what members can expect this quarter, how to get involved, and the Beginner VC Program. Announce the Fall Consulting Project and release applications. Preview upcoming speakers, workshops, and events, then network and meet the board. Consulting applications open.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 9, 11),
      time: '11:59 PM',
      location: 'Online',
      title: 'Consulting Applications Close',
      description: 'Fall Consulting Project applications close Sunday night. VCS will select a small team of about 4–5 students. No prior VC or consulting experience is required.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 9, 12),
      time: 'TBD',
      location: 'TBD',
      title: 'VC Fundamentals Workshop',
      description: 'Beginner-friendly introduction to venture capital: what VC is, how firms work, how startups raise money, what investors look for, and basic startup and market analysis. Consulting applications are reviewed this week.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 9, 16),
      time: 'TBD',
      location: 'TBD',
      title: 'Consulting Team Selected',
      description: 'Selected students are contacted by Friday with the project scope, team information, and kickoff details.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 9, 17),
      time: 'TBD',
      location: 'TBD',
      title: 'Sino-American Symposium',
      description: 'Third Sino-American Symposium on Sustainable Development. Potential VCS collaboration with the Leading Entrepreneur Alliance (LEA). Topics may include artificial intelligence, clean energy, future mobility, entrepreneurship, and sustainable development. VCS’s co-hosting role is still being discussed.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 9, 19),
      time: 'TBD',
      location: 'TBD',
      title: 'Consulting Project Kickoff',
      description: 'Selected students begin the Fall Consulting Project: meet the company, understand the business and challenge, finalize scope, divide responsibilities, and set quarter milestones.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 9, 21),
      time: 'TBD',
      location: 'TBD',
      title: 'Startup & Market Research',
      description: 'Beginner Program workshop on how to understand a startup, its market, competitors, customers, and opportunity.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 9, 26),
      time: 'TBD',
      location: 'TBD',
      title: 'Industry / Founder Speaker',
      description: 'First external speaker session of the quarter. Speaker currently being sourced. Possible themes: building an early-stage company, finding product-market fit, raising venture capital, and lessons from founders and investors. Consulting team continues research and early analysis.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 10, 2),
      time: 'TBD',
      location: 'TBD',
      title: 'Startup Evaluation Workshop',
      description: 'Beginner Program: how investors evaluate teams, markets, business models, competition, traction, and growth potential. Consulting project mid-quarter progress check.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 10, 9),
      time: 'TBD',
      location: 'TBD',
      title: 'VC / Startup Speaker',
      description: 'External founder, investor, or startup ecosystem speaker. Speaker currently being sourced. Possible focus: VC careers, sourcing startups, due diligence, fundraising, and lessons from investing or operating.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 10, 16),
      time: 'TBD',
      location: 'TBD',
      title: 'Research to Recommendation',
      description: 'Beginner Program workshop on turning research into a clear investment or strategy recommendation. The consulting team begins consolidating findings and developing final recommendations.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 10, 23),
      time: 'TBD',
      location: 'TBD',
      title: 'Demo Day Prep',
      description: 'Potential final external speaker or workshop, depending on Thanksgiving-week availability. Speaker currently being sourced. Consulting team finalizes recommendations, builds the presentation, gets board feedback, and prepares for Demo Day.',
      image: boardIntroEvent,
    },
    {
      date: new Date(2026, 10, 30),
      time: 'TBD',
      location: 'TBD',
      title: 'Fall Demo Day',
      description: 'End-of-quarter showcase. The consulting team presents the problem, research and analysis, key findings, strategic recommendations, and potential next steps. Quarter wrap-up includes networking, reflection, recognition of participating students, and a preview of Winter Quarter.',
      image: boardIntroEvent,
    },
  ];

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthMap = new Map();
  events
    .slice()
    .sort((a, b) => a.date - b.date)
    .forEach((event) => {
      const month = event.date.getMonth();
      const year = event.date.getFullYear();
      const key = `${year}-${month}`;
      if (!monthMap.has(key)) {
        monthMap.set(key, {
          name: event.date.toLocaleString('en-US', { month: 'long' }),
          year,
          month,
        });
      }
    });

  const currentKey = `${currentYear}-${currentMonth}`;
  if (!monthMap.has(currentKey)) {
    const now = new Date(currentYear, currentMonth, 1);
    monthMap.set(currentKey, {
      name: now.toLocaleString('en-US', { month: 'long' }),
      year: currentYear,
      month: currentMonth,
    });
  }

  const months = Array.from(monthMap.values()).sort(
    (a, b) => new Date(a.year, a.month, 1) - new Date(b.year, b.month, 1)
  );

  useEffect(() => {
    if (currentMonthRef.current) {
      currentMonthRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-slate-900">Upcoming Events</h1>
        {months.map((monthData) => (
          <div
            key={`${monthData.year}-${monthData.month}`}
            ref={monthData.month === currentMonth && monthData.year === currentYear ? currentMonthRef : null}
          >
            <Calendar 
              monthData={monthData} 
              events={events.filter(
                (event) =>
                  event.date.getMonth() === monthData.month &&
                  event.date.getFullYear() === monthData.year
              )}
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
