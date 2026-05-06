import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import components
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import TeamPage from './pages/TeamPage';
import MembershipPage from './pages/MembershipPage';
import AnalystProgramPage from './pages/AnalystProgramPage';
import BoardAppPage from './pages/BoardAppPage'

const VCSWebsite = () => {
  const [currentPage, setCurrentPage] = useState('intro');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const whereWeGoRef = useRef(null);
  const pendingWhereWeGoScrollRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const timer = setTimeout(() => {
      setCurrentPage('home');
    }, 2400);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (currentPage !== 'home' || !pendingWhereWeGoScrollRef.current) {
      return;
    }

    const scrollWhenReady = () => {
      if (!whereWeGoRef.current) {
        return;
      }
      whereWeGoRef.current.scrollIntoView({ behavior: 'smooth' });
      pendingWhereWeGoScrollRef.current = false;
    };

    // Let Home content mount before attempting the scroll.
    const timer = setTimeout(scrollWhenReady, 60);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const scrollToWhoWeAre = () => {
    whoWeAreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatWeDo = () => {
    whatWeDoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhereWeGo = () => {
    if (currentPage !== 'home') {
      pendingWhereWeGoScrollRef.current = true;
      setCurrentPage('home');
      return;
    }
    whereWeGoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-slate-50 text-slate-900 overflow-x-hidden">
      <AnimatedBackground cursorPosition={cursorPosition} />
      <div className="relative z-10 w-full">
        {currentPage !== 'intro' && (
          <Navigation 
            currentPage={currentPage} 
            setPage={setCurrentPage}
          />
        )}
        <AnimatePresence mode="wait">
          {currentPage === 'intro' ? (
            <IntroAnimation key="intro" />
          ) : (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
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
    </div>
  );
};

const IntroAnimation = () => {
  const letters = "VCS AT UCI".split('');
  
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 via-violet-50 to-slate-100 text-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="text-4xl md:text-6xl font-extrabold tracking-tight">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
            className="inline-block text-violet-900"
          >
            {letter}
          </motion.span>
        ))}
        </div>
        <motion.div
          className="h-1.5 w-48 overflow-hidden rounded-full bg-violet-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <motion.div
            className="h-full rounded-full bg-amber-300"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </motion.div>
        <motion.p
          className="text-sm font-medium tracking-wide text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.25 }}
        >
          Venture Capital Society at UCI
        </motion.p>
      </div>
    </motion.div>
  );
};

const AnimatedBackground = ({ cursorPosition }) => {
  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-slate-50 via-violet-100/50 to-slate-100"
      style={{
        backgroundPosition: `${cursorPosition.x / 20}px ${cursorPosition.y / 20}px`,
        transition: 'background-position 0.2s ease-out'
      }}
    >
      <div className="absolute inset-0 opacity-[0.12]">
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
    case 'boardApplication':
      return <BoardAppPage />;

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
