import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, InstagramIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import vcsLogo from './VCSLogo.jpeg';
import mihikaImg from './mihika.png';
import divijaImg from './divija.png';
import hussainImg from './hussain.JPG';
import ayaanImg from './ayaan.JPG';
import meghanaImg from './meghana.JPG';
import christianImg from './christian.png';
import ritikaImg from './ritika.png';
import sudaayImg from './sudaay.png';
import mattImg from './matt.JPG';
import kyleImg from './kyle.JPG';
import sherylImg from './sheryl.png'
import roshanImg from './roshan.png';
import bareeraImg from './bareera.png';
import bhavyaImg from './bhavya.JPEG';


const VCSWebsite = () => {
  const [currentPage, setCurrentPage] = useState('intro');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const timer = setTimeout(() => {
      setCurrentPage('home');
    }, 3500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const scrollToWhoWeAre = () => {
    whoWeAreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatWeDo = () => {
    whatWeDoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
      <AnimatedBackground cursorPosition={cursorPosition} />
      <div className="relative z-10 w-full">
        {currentPage !== 'intro' && (
          <Navigation currentPage={currentPage} setPage={setCurrentPage} />
        )}
          <AnimatePresence mode="wait">
            {currentPage === 'intro' ? (
              <IntroAnimation key="intro" />
            ) : (
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
              {renderPage(currentPage, setCurrentPage, scrollToWhoWeAre, scrollToWhatWeDo, whoWeAreRef, whatWeDoRef)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      <AnimatedCursor cursorPosition={cursorPosition} />
    </div>
  );
};

const IntroAnimation = () => {
  const letters = "VCS AT UCI".split('');
  
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-6xl font-bold">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const DynamicWordCloud = ({ avoidRect }) => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [placedWords, setPlacedWords] = useState([]);

  const words = useMemo(() => [
    { text: 'VENTURE', size: 80 },
    { text: 'CAPITAL', size: 75 },
    { text: 'INVESTMENT', size: 50 },
    { text: 'STARTUP', size: 45 },
    { text: 'FINANCE', size: 40 },
    { text: 'TECHNOLOGY', size: 35 },
    { text: 'INNOVATION', size: 30 },
    { text: 'GROWTH', size: 28 },
    { text: 'FUNDING', size: 26 },
    { text: 'ENTREPRENEUR', size: 24 },
    { text: 'BUSINESS', size: 32 },
    { text: 'STRATEGY', size: 30 },
    { text: 'SCALING', size: 28 },
    { text: 'DISRUPTION', size: 26 },
    { text: 'PRINCIPAL', size: 20 },
    { text: 'LARGE', size: 26 },
    { text: 'POTENTIALLY', size: 22 },
    { text: 'NOVEL', size: 26 },
    { text: 'ALTHOUGH', size: 24 },
    { text: 'BIOTECHNOLOGY', size: 26 },
    { text: 'RETURNS', size: 24 },
    { text: 'POTENTIAL', size: 30 },
    { text: 'PARTNERS', size: 28 },
    { text: 'RISK', size: 20 },
    { text: 'BANKING', size: 22 },
    { text: 'FIRM', size: 45 },
    { text: 'HIGH', size: 42 },
    { text: 'EQUITY', size: 40 },
    { text: 'COMPANIES', size: 38 },
    { text: 'PRIVATE', size: 36 },
    { text: 'CAPITALISTS', size: 34 },
    { text: 'LIMITED', size: 32 },
    { text: 'INVESTORS', size: 30 },
    { text: 'COMPANY', size: 28 },
    { text: 'POSITION', size: 26 },
    { text: 'EXPERIENCE', size: 24 },
    { text: 'RATES', size: 22 },
    { text: 'TYPICALLY', size: 20 },
    { text: 'DEBT', size: 20 },
    { text: 'PARTICULAR', size: 18 },
    { text: 'INTEREST', size: 18 },
    { text: 'MANAGEMENT', size: 18 },
    { text: 'FIRMS', size: 18 },
    { text: 'FUNDS', size: 18 },
    { text: 'LOAN', size: 18 },
    { text: 'NETWORKS', size: 18 },
    { text: 'OPERATING', size: 18 },
    { text: 'ASSOCIATE', size: 22 },
    { text: 'MOVE', size: 20 },
    { text: 'REALIZING', size: 18 },
    { text: 'MAKES', size: 16 },
    { text: 'KNOWN', size: 20 },
    { text: 'FIND', size: 18 },
    { text: 'YEARS', size: 18 },
    { text: 'TEND', size: 16 },
    { text: 'BACKGROUND', size: 20 },
    { text: 'FUNDS', size: 24 },
    { text: 'ADDITION', size: 18 },
    { text: 'OPERATIONAL', size: 28 },
    { text: 'PARTNERSHIP', size: 28 },
    { text: 'ROUND', size: 26 },
    { text: 'ANOTHER', size: 26 },
    { text: 'POSITIONING', size: 24 },
    { text: 'GROWTH', size: 28 },
  ], []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const placeWords = () => {
      const placed = [];
      const { width, height } = dimensions;
      const padding = 20;
      const maxAttempts = 200;
    
      words.forEach((word) => {
        let attempts = 0;
        
        while (attempts < maxAttempts) {
          const x = Math.random() * (width - padding * 2) + padding;
          const y = Math.random() * (height - padding * 2) + padding;
    
          const bbox = {
            left: x - word.size * word.text.length * 0.25,
            right: x + word.size * word.text.length * 0.25,
            top: y - word.size * 0.6,
            bottom: y + word.size * 0.6
          };
    
          if (bbox.left > padding && bbox.right < width - padding && 
              bbox.top > padding && bbox.bottom < height - padding) {
            const overlap = placed.some(w => 
              !(bbox.left > w.bbox.right || 
                bbox.right < w.bbox.left || 
                bbox.top > w.bbox.bottom ||
                bbox.bottom < w.bbox.top)
            );
    
            const avoidContentArea = 
              bbox.left < avoidRect.left + avoidRect.width &&
              bbox.right > avoidRect.left &&
              bbox.top < avoidRect.top + avoidRect.height &&
              bbox.bottom > avoidRect.top;
    
            if (!overlap && !avoidContentArea) {
              placed.push({ ...word, x, y, bbox });
              break;
            }
          }
    
          attempts++;
        }
    
        if (attempts === maxAttempts) {
          console.warn(`Could not place word: ${word.text}`);
        }
      });
    
      setPlacedWords(placed);
    };

    placeWords();
  }, [dimensions, words, avoidRect]);

  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
      {placedWords.map((word, index) => (
        <motion.text
          key={word.text}
          x={word.x}
          y={word.y}
          fontSize={word.size}
          fill="#a78bfa"
          fillOpacity="0.15"
          textAnchor="middle"
          dominantBaseline="middle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {word.text}
        </motion.text>
      ))}
    </svg>
  );
};

const AnimatedBackground = ({ cursorPosition }) => {
  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-purple-900 to-indigo-800"
      style={{
        backgroundPosition: `${cursorPosition.x / 20}px ${cursorPosition.y / 20}px`,
        transition: 'background-position 0.2s ease-out'
      }}
    >
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const HomePage = ({ setPage, scrollToWhoWeAre, scrollToWhatWeDo, whoWeAreRef, whatWeDoRef }) => {
  const [contentRect, setContentRect] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      setContentRect(rect);
    }
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-purple-900 overflow-hidden">
        <DynamicWordCloud avoidRect={contentRect} />
        <div ref={contentRef} className="relative z-20 p-8 bg-purple-900 bg-opacity-80 rounded-lg shadow-lg">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to VCS at UCI
          </motion.h1>
          <motion.p 
            className="mb-8 text-lg md:text-xl text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Empowering the next generation of venture capitalists and entrepreneurs
          </motion.p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <InteractiveButton label="Who We Are" onClick={scrollToWhoWeAre} />
            <InteractiveButton label="Join Us" onClick={() => setPage('join')} />
            <InteractiveButton label="What We Do" onClick={scrollToWhatWeDo} />
          </div>
        </div>
      </div>
      <WhoWeArePage ref={whoWeAreRef} />
      <WhatWeDoPage ref={whatWeDoRef} />
    </>
  );
};

const StyledTitle = ({ children }) => (
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


const StyledSubheading = ({ children }) => (
  <h2 className="text-4xl font-bold mb-8 pb-2 border-b-4 border-[#ffbd59] inline-block">
    {children}
  </h2>
);

const WhoWeArePage = React.forwardRef((props, ref) => (
  <div ref={ref} className="min-h-screen bg-purple-900 text-white py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <StyledTitle>Who We Are</StyledTitle>
      </div>
      <div className="mb-12">
        <StyledSubheading>Vision</StyledSubheading>
        <p className="text-xl mt-4">
          To become the leading student organization at UCI that bridges the gap between academia and
          the venture capital industry, fostering future leaders in deal-sourcing, investments and
          entrepreneurship.
        </p>
      </div>
      <div>
        <StyledSubheading>Mission</StyledSubheading>
        <p className="text-xl mt-4">
          To educate and empower UCI students by providing practical experience, mentorship,
          collaboration with industry professionals and networking opportunities in the venture capital
          field in Southern California, thereby enhancing their understanding and engagement in the
          private equity ecosystem.
        </p>
      </div>
    </div>
  </div>
));

const WhatWeDoPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="min-h-screen bg-purple-900 text-white py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <StyledTitle>What We Do</StyledTitle>
      </div>
      <div className="mb-12">
        <StyledSubheading>Strategies</StyledSubheading>
        <ul className="list-disc list-outside text-xl mt-4 pl-5 space-y-4">
          <li>Education and Training: Offer comprehensive workshops, seminars, and simulations to
          teach students the fundamentals of venture capital and startup investment.</li>
          <li>Partnership Development: Build strong relationships with local venture capital firms,
          investors, and industry professionals to provide valuable insights and opportunities for
          our members.</li>            
          <li>Practical Experience: Facilitate hands-on projects and internships that allow students to
          apply their knowledge in real-world scenarios.</li>
          <li>Inclusive Growth: Establish a two-tier committee system to include both experienced
          members and newcomers, ensuring continuous learning and development for all
          participants.</li>
        </ul>
      </div>
      <div>
        <StyledSubheading>Goals</StyledSubheading>
        <ul className="list-disc list-outside text-xl mt-4 pl-5 space-y-4">
          <li>Educate at least 30 students quarterly on venture capital and investment strategies.</li>
          <li>Form partnerships with at least 5 local venture capital firms and industry experts.</li>
          <li>Conduct 4-7 educational workshops and practical simulations each quarter.</li>
          <li>Develop a pipeline of talent through our Learning Development Team, transitioning them
          to the Executive Board as they gain experience.</li>
        </ul>
      </div>
    </div>
  </div>
));
const InteractiveButton = ({ label, onClick }) => (
  <motion.button
    onClick={onClick}
    className="px-6 py-2 bg-yellow-400 text-purple-900 rounded-full font-bold hover:bg-white hover:text-purple-900 transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);

const Navigation = ({ currentPage, setPage }) => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-purple-900 bg-opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={vcsLogo} alt="VCS Logo" className="h-16 w-auto mr-4" />
          <h1 className="text-xl font-bold text-white hidden md:block">Venture Capital Society</h1>
        </div>
        <div className="flex items-center space-x-2">
          {['home', 'events', 'collabs', 'team', 'join'].map((page) => (
            <motion.button
              key={page}
              onClick={() => setPage(page)}
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                currentPage === page ? 'bg-yellow-400 text-purple-900' : 'bg-purple-800 text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </motion.button>
          ))}
          <div className="flex items-center space-x-2 ml-4">
            <motion.a
              href="https://www.instagram.com/vcs.uci?igsh=MWQ1ZGUxMzBkMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/venture-capital-society-uci/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedinIcon size={24} />
            </motion.a>
            <motion.div
              className="relative"
              onHoverStart={() => setShowEmail(true)}
              onHoverEnd={() => setShowEmail(false)}
              onClick={() => setShowEmail(!showEmail)}
            >
              <motion.div
                className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MailIcon size={24} />
              </motion.div>
              <AnimatePresence>
                {showEmail && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 py-2 px-4 bg-white text-purple-900 rounded-md shadow-lg text-sm whitespace-nowrap"
                  >
                    ucivcs@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};



const AnimatedCursor = ({ cursorPosition }) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 text-yellow-400"
      animate={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
      transition={{ type: 'spring', damping: 30, mass: 0.5 }}
    >
      <DollarSign size={24} />
    </motion.div>
  );
};


const renderPage = (currentPage, setPage, scrollToWhoWeAre, scrollToWhatWeDo, whoWeAreRef, whatWeDoRef) => {
  switch (currentPage) {
    case 'home':
      return <HomePage setPage={setPage} scrollToWhoWeAre={scrollToWhoWeAre} scrollToWhatWeDo={scrollToWhatWeDo} whoWeAreRef={whoWeAreRef} whatWeDoRef={whatWeDoRef} />;
    case 'events':
      return <EventsPage />;
    case 'collabs':
      return <CollabsPage />;
    case 'team':
      return <TeamPage />;
    case 'join':
      return <JoinPage />;
    default:
      return <HomePage setPage={setPage} scrollToWhoWeAre={scrollToWhoWeAre} scrollToWhatWeDo={scrollToWhatWeDo} whoWeAreRef={whoWeAreRef} whatWeDoRef={whatWeDoRef} />;
  }
};


const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { date: new Date(2024, 8, 30), title: "Meet the Board", description: "Board intro, get to know everyone" },
    { date: new Date(2024, 9, 8), title: "What is Venture Capital?", description: "What is VC? History of VC? VC vs other investment types?" },
    { date: new Date(2024, 9, 17), title: "Speaker: Nikhil Choudhary", description: "General Partner @ Nirman VCs" },
    { date: new Date(2024, 9, 22), title: "Startup Analysis", description: "Qualitative vs. Quantitative; aka how does a VC analyze a startup?" },
    { date: new Date(2024, 10, 7), title: "Speaker: Filipe Silva", description: "Head of Global Ops @ Hillside Enterprises" },
    { date: new Date(2024, 10, 12), title: "Venture Capital Firms 101", description: "Famous VC firms, how they are structured, and how to get involved" },
    { date: new Date(2024, 10, 21), title: "Speaker: Himanshu Vikram Singh", description: "Sr. Financial Analyst @ CerraCap Ventures" },
    { date: new Date(2024, 10, 26), title: "VC Case Studies", description: "Exploring some of the most famous stories in VC; Uber, Airbnb, etc." },
  ];

  const months = [
    { name: 'September', year: 2024, month: 8 },
    { name: 'October', year: 2024, month: 9 },
    { name: 'November', year: 2024, month: 10 }
  ];

  return (
    <div className="min-h-screen bg-purple-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">Upcoming Events</h1>
        {months.map((monthData) => (
          <Calendar 
            key={monthData.name} 
            monthData={monthData} 
            events={events.filter(event => event.date.getMonth() === monthData.month)}
            onEventClick={setSelectedEvent}
          />
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

const Calendar = ({ monthData, events, onEventClick }) => {
  const daysInMonth = new Date(monthData.year, monthData.month + 1, 0).getDate();
  const firstDayOfMonth = new Date(monthData.year, monthData.month, 1).getDay();
  
  const days = [...Array(daysInMonth).keys()].map(i => i + 1);
  const blanks = [...Array(firstDayOfMonth).keys()];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">{monthData.name} {monthData.year}</h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {blanks.map((_, index) => (
          <div key={`blank-${index}`} className="h-24 bg-purple-800 rounded-lg"></div>
        ))}
        {days.map(day => {
          const dateEvents = events.filter(event => event.date.getDate() === day);
          return (
            <div key={day} className="h-24 bg-purple-800 rounded-lg p-1 overflow-hidden">
              <div className="text-sm mb-1">{day}</div>
              {dateEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-yellow-400 text-purple-900 text-xs p-1 mb-1 rounded cursor-pointer"
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
      className="bg-purple-800 p-8 rounded-lg max-w-2xl w-full"
      onClick={e => e.stopPropagation()}
    >
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">{event.title}</h2>
      <p className="text-xl mb-4">{event.date.toDateString()}</p>
      <p className="text-lg">{event.description}</p>
      <button 
        onClick={onClose}
        className="mt-6 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold hover:bg-white transition duration-300"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

const CollabsPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-purple-900 text-white py-20 px-4">
    <h2 className="text-3xl font-bold mb-8">Collaborations</h2>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h3 className="text-7xl md:text-9xl font-extrabold text-yellow-400 opacity-80 mb-8">
        Coming Soon
      </h3>
      <p className="text-xl max-w-2xl mx-auto">
        We're working on exciting collaborations to enhance your experience. 
        Stay tuned for updates on our partnerships and joint initiatives!
      </p>
    </motion.div>
  </div>
);

const ExecTeam = () => {
  const execMembers = [
    { name: 'Mihika Guntur', position: 'President', image: mihikaImg },
    { name: 'Divija Mudumbai', position: 'Co-Exec Vice President', image: divijaImg },
    { name: 'Hussain Mahuvawala', position: 'Co-Exec Vice President', image: hussainImg },
    { name: 'Ayaan Dhir', position: 'VP of Professional Development', image: ayaanImg },
    { name: 'Meghana Burugupalli', position: 'VP of Technology', image: meghanaImg },
    { name: 'Christian Mccormick', position: 'VP of External Affairs', image: christianImg },
    { name: 'Ritika Ramnani', position: 'Co-VP of Marketing', image: ritikaImg },
    { name: 'Sheryl Gupta', position: 'Co-VP of Marketing', image: sherylImg },
    { name: 'Sudaay Chaloo', position: 'VP of Internal Affairs', image: sudaayImg },
    { name: 'Matt Ayabe', position: 'VP of Engagement', image: mattImg },
    { name: 'Kyle King', position: 'VP of Finance', image: kyleImg }
  ];

  return (
    <div className="container mx-auto pt-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Executive Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {execMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={member.image} alt={member.name} className="h-40 w-40 rounded-full mx-auto mb-4 border-4 border-yellow-400" />
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-xl text-yellow-400">{member.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Interns = () => {
  const internMembers = [
    { name: "Roshan Raj", position: "Tech Intern", image: roshanImg },
    {name: "Bareera Gulraiz", position: "Intern", image: bareeraImg},
    {name: "Bhavya Jain", position: "Professional Development Intern", image: bhavyaImg}
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Interns</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {internMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={member.image} alt={member.name} className="h-40 w-40 rounded-full mx-auto mb-4 border-4 border-yellow-400" />
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-xl text-yellow-400">{member.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TeamPage = () => (
  <div className="min-h-screen bg-purple-900 text-white py-20 px-4">
    <div className="text-center mb-2">
      <StyledTitle>Our Team</StyledTitle>
    </div>
    <ExecTeam />
    <Interns />
  </div>
);

const JoinPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-purple-900 text-white py-20 px-4">
    <StyledTitle>Join Us</StyledTitle>
    <p className="text-xl mb-8 text-center max-w-2xl">
      Interested in joining? We're excited to welcome new members who are passionate about venture capital and entrepreneurship. 
      Fill out our membership form to get started on your journey with VCS at UCI!
    </p>
    <motion.a
      href="https://forms.gle/UhzCQZrvp4Y1bgS38"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-yellow-400 text-purple-900 rounded-full font-bold hover:bg-white hover:text-purple-900 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Membership Form
    </motion.a>
  </div>
);

export default VCSWebsite;
