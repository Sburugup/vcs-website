import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign } from 'lucide-react';

// Import components
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import TeamPage from './pages/TeamPage';
import MembershipPage from './pages/MembershipPage';
import AnalystProgramPage from './pages/AnalystProgramPage';

const VCSWebsite = () => {
  const [currentPage, setCurrentPage] = useState('intro');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const whereWeGoRef = useRef(null);

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

  const scrollToWhereWeGo = () => {
    whereWeGoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
      <AnimatedBackground cursorPosition={cursorPosition} />
      <div className="relative z-10 w-full">
        {currentPage !== 'intro' && (
          <Navigation 
            currentPage={currentPage} 
            setPage={setCurrentPage} 
            scrollToWhereWeGo={scrollToWhereWeGo}
          />
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
              {renderPage(
                currentPage, 
                setCurrentPage, 
                scrollToWhoWeAre, 
                scrollToWhatWeDo, 
                scrollToWhereWeGo,
                whoWeAreRef, 
                whatWeDoRef,
                whereWeGoRef
              )}
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

const AnimatedCursor = ({ cursorPosition }) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 text-yellow-400"
      animate={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
      transition={{ type: 'spring', damping: 30, mass: 0.5 }}
      style={{ mixBlendMode: 'difference' }}
    >
      <DollarSign size={24} />
    </motion.div>
  );
};

const renderPage = (currentPage, setPage, scrollToWhoWeAre, scrollToWhatWeDo, scrollToWhereWeGo, whoWeAreRef, whatWeDoRef, whereWeGoRef) => {
  switch (currentPage) {
    case 'home':
      return <HomePage 
        setPage={setPage} 
        scrollToWhoWeAre={scrollToWhoWeAre} 
        scrollToWhatWeDo={scrollToWhatWeDo} 
        scrollToWhereWeGo={scrollToWhereWeGo}
        whoWeAreRef={whoWeAreRef} 
        whatWeDoRef={whatWeDoRef} 
        whereWeGoRef={whereWeGoRef} 
      />;
    case 'events':
      return <EventsPage/>;
    case 'partnerships':
      return <PartnershipsPage/>;
    case 'team':
      return <TeamPage/>;
    case 'join':
      return <MembershipPage/>;
    case 'analystProgram':
      return <AnalystProgramPage/>;
    case 'Board Application':
      return <ApplyPage />;

    default:
      return <HomePage 
        setPage={setPage} 
        scrollToWhoWeAre={scrollToWhoWeAre} 
        scrollToWhatWeDo={scrollToWhatWeDo}
        scrollToWhereWeGo={scrollToWhereWeGo}
        whoWeAreRef={whoWeAreRef} 
        whatWeDoRef={whatWeDoRef}
        whereWeGoRef={whereWeGoRef}
      />;
  }
};

export default VCSWebsite;
