import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, InstagramIcon, LinkedinIcon, MailIcon } from 'lucide-react';

//Board Members
import mihikaImg from './assets/board/mihika.png';
import divijaImg from './assets/board/divija.png';
import christianImg from './assets/board/christian.png';
import sherylImg from './assets/board/sheryl.png'
import ritikaImg from './assets/board/ritika.png';
import sudaayImg from './assets/board/sudaay.png';
import hussainImg from './assets/board/hussain.png';
import ayaanImg from './assets/board/ayaan.png';
import meghanaImg from './assets/board/meghana.png';
import mattImg from './assets/board/matt.png';
import kyleImg from './assets/board/kyle.png';

//Interns
import roshanImg from './assets/interns/roshan.png';
import bareeraImg from './assets/interns/bareera.png';
import bhavyaImg from './assets/interns/bhavya.png';

//Companies
import fuelVentures from './assets/membercompanies/fuelVentures.png'
import halogen from './assets/membercompanies/halogen.png'
import icertis from './assets/membercompanies/icertis.png'
import mitratech from './assets/membercompanies/mitratech.png'
import microsoft from './assets/membercompanies/microsoft.png'
import profitRecoveryPartners from './assets/membercompanies/profitRecoveryPartners.png'
import trcRetail from './assets/membercompanies/trcRetail.png'
import unitedHealthGroup from './assets/membercompanies/unitedHealthGroup.png'
import redwoodCollective from './assets/membercompanies/redwoodCollective.png'
import tcaVentures from './assets/membercompanies/tcaVenture.png'
import techmojo from './assets/membercompanies/techmojo.png'

//Event imports for calendar

// Speaker events
import nikhilSpeaker from './assets/speakers/nikhil.png'
import felipeSpeaker from './assets/speakers/felipe.png'
import vanCleveSpeaker from './assets/speakers/vanCleve.png'
import amritSpeaker from './assets/speakers/amritPanjabi.png'
import himanshuSpeaker from './assets/speakers/himanshu.png'
import bankTechSpeaker from './assets/speakers/bankTech.png'

// VCS events
import boardIntroEvent from './assets/events/boardIntro.png'
import qualVsQuantEvent from './assets/events/qualVsQuant.png'
import whatIsVcEvent from './assets/events/whatIsVc.png' 
import vcsMfcMastersEvent from './assets/events/vcsMfcMasters.png'
import caseStudiesEvent from './assets/events/caseStudies.png'
import speedDateEvent from './assets/events/speedDate.png'
import memberSocialEvent from './assets/events/memberSocial.png'

// Speaker Events
import sidebarSummit from './assets/otherimgs/sidebarSummit.png'
import boardImg from './assets/otherimgs/vcsBoard.png'
import membershipImg from './assets/otherimgs/vcsMembership.png'
import miniAIF from './assets/otherimgs/miniAIF.png'
import vcsLogo from './assets/otherimgs/vcsLogo.png';
import winterAnalystProgramImg from './assets/otherimgs/winterAnalystProgram.png'
import springAnalystProgramImg from './assets/otherimgs/springAnalystProgram.png'

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

const HomePage = ({ setPage, scrollToWhoWeAre, scrollToWhatWeDo, scrollToWhereWeGo, whoWeAreRef, whatWeDoRef, whereWeGoRef }) => {
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
            <InteractiveButton label="What We Do" onClick={scrollToWhatWeDo} />
            <InteractiveButton label="Where We Go" onClick={scrollToWhereWeGo} />
            <InteractiveButton label="Upcoming Events" onClick={() => setPage('events')} />
          </div>
        </div>
      </div>
      <WhoWeArePage ref={whoWeAreRef} />
      <WhatWeDoPage ref={whatWeDoRef} />
      <WhereWeGoPage ref={whereWeGoRef} />
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


// New Where We Go Section
const WhereWeGoPage = React.forwardRef((props, ref) => {
  const companyLogos = [
    { logo: fuelVentures, link: 'https://www.fuel.ventures/'},
    { logo: halogen, link: 'https://halogenvc.com/'}, 
    { logo: icertis, link: 'https://www.icertis.com/'},
    { logo: mitratech, link: 'https://mitratech.com/'},
    { logo: microsoft, link: 'https://www.microsoft.com/en-us/'},
    { logo: profitRecoveryPartners, link: 'https://prpllc.com/'},
    { logo: sidebarSummit, link: 'https://www.sidebarsummit.com/'},
    { logo: tcaVentures, link: 'https://tcaventuregroup.com/'},
    { logo: techmojo, link: 'https://www.techmojo.com/'},
    { logo: trcRetail, link: 'https://trcretail.com/'},
    { logo: unitedHealthGroup, link: 'https://www.unitedhealthgroup.com/'},
    { logo: redwoodCollective, link: 'https://www.redwoodcollective.net/'}
  ];

  return (
    <div ref={ref} className="min-h-screen bg-purple-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <StyledTitle>Where We Go</StyledTitle>
        </div>
        <div className="mb-12">
          <StyledSubheading>Our Alumni Success Stories</StyledSubheading>
          <p className="text-xl mt-4 mb-12">
            Our members have gone on to successful careers at top venture capital firms, startups, and technology companies.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {companyLogos.map((company, index) => (
              <motion.a
                key={index}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center justify-center h-32"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={company.logo} 
                  alt="Company logo" 
                  className="max-h-24 max-w-full object-contain" 
                />
              </motion.a>
            ))}
          </div>
        </div>
    </div>
  </div>
  )
});

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

const Navigation = ({ currentPage, setPage, scrollToWhereWeGo }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showJoinDropdown, setShowJoinDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showJoinDropdown && !event.target.closest('.join-dropdown')) {
        setShowJoinDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showJoinDropdown]);

  const handleMembershipClick = () => {
    setPage('join');
    setShowJoinDropdown(false); // Close dropdown after selection
  };

  const handleAnalystProgramClick = () => {
    setPage('analystProgram');
    setShowJoinDropdown(false);
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-purple-900 bg-opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={vcsLogo} alt="VCS Logo" className="h-16 w-auto mr-4" />
          <h1 className="text-xl font-bold text-white hidden md:block">Venture Capital Society</h1>
        </div>
        <div className="flex items-center space-x-2">
          {/* Regular navigation buttons */}
          {['home', 'events', 'partnerships', 'team'].map((page) => (
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

          {/* Where We Go button */}
          <motion.button
            onClick={scrollToWhereWeGo}
            className="px-3 py-1 rounded-full text-sm font-bold bg-purple-800 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Where We Go
          </motion.button>

          {/* Join Dropdown */}
          <div className="relative join-dropdown">
            <motion.button
              onClick={() => setShowJoinDropdown(!showJoinDropdown)}
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                currentPage === 'join' ? 'bg-yellow-400 text-purple-900' : 'bg-purple-800 text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Join
            </motion.button>
            <AnimatePresence>
              {showJoinDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 py-2 w-48 bg-purple-800 rounded-lg shadow-xl z-50"
                >
                  <motion.button
                    onClick={handleMembershipClick}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-purple-700 hover:text-yellow-400 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    Membership
                  </motion.button>
                  <motion.button
                    onClick={handleAnalystProgramClick}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-purple-700 hover:text-yellow-400 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    Analyst Program
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Media Icons */}
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


const PartnershipsPage = () => {
  const [openSections, setOpenSections] = useState({
    startupHelp: false,
    vcHelp: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-purple-900 text-white py-20 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-purple-800 rounded-lg p-8 mb-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to VCS at UCI</h2>
            <p className="text-lg space-y-4">
              At VCS at UCI, our analysts undergo a <span className="text-yellow-400">rigorous 9-week intensive training program</span> designed to equip them with the critical skills needed in the venture capital industry. From <span className="text-yellow-400">mastering due diligence</span> to <span className="text-yellow-400">understanding market dynamics</span> and <span className="text-yellow-400">crafting compelling pitches</span>, our members are well-prepared to provide valuable support to startups and VC firms alike. Their hands-on experience and multidisciplinary backgrounds make them uniquely qualified to tackle real-world challenges and deliver impactful solutions.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src={boardImg} 
              alt="VCS Board" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* For Startups Section */}
        <div className="bg-purple-800 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">For Startups</h2>
          <p className="text-lg mb-6">
            At VCS at UCI, we're committed to supporting innovative startups by providing <span className="text-yellow-400">hands-on venture consulting services</span>. Our diverse members, hailing from various academic backgrounds, share a strong passion for entrepreneurship, problem-solving, and market analysis. We're eager to collaborate with your startup, offering a <span className="text-yellow-400">dedicated team for an 8-week project</span> during <span className="text-yellow-400">Spring 2025, and all quarters starting Fall 2025</span>. This collaboration will be mutually beneficial, leveraging our members' talents and providing your startup actionable insights and strategic support.
          </p>
          
          <div className="space-y-4">
            <div className="border border-purple-600 rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-4 bg-purple-700 hover:bg-purple-600 transition-colors"
                onClick={() => toggleSection('startupHelp')}
              >
                <span className="text-xl font-semibold">How we can help you</span>
                <span className="text-2xl">{openSections.startupHelp ? '−' : '+'}</span>
              </button>
              
              <AnimatePresence>
                {openSections.startupHelp && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-purple-800"
                  >
                    <div className="p-4 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400">Pitch Deck Development</h3>
                        <p className="ml-4">Craft <span className="text-yellow-400">compelling and data-driven pitch decks</span> tailored to capture investor interest and effectively communicate your vision.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400">VC Insights and Metrics</h3>
                        <p className="ml-4">Provide guidance on the <span className="text-yellow-400">metrics that matter most to venture capitalists</span> and how to align your narrative to resonate with them.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400">Investor Matching</h3>
                        <p className="ml-4">Research and identify investors who <span className="text-yellow-400">align with your industry, stage, and funding needs</span> to maximize your chances of success.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* For VC Firms Section */}
        <div className="bg-purple-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">For VC Firms</h2>
          <p className="text-lg mb-6">
            VCS at UCI is a student-led organization that specializes in <span className="text-yellow-400">venture capital practices including sourcing, due diligence, market research, and investment analysis</span>. Our members bring a variety of skills and experiences, with many having completed <span className="text-yellow-400">internships in VC, PE, and tech sectors</span>. We're excited about the opportunity to partner with your firm on an <span className="text-yellow-400">8-week project, available in Spring 2025, and all quarters starting Fall 2025</span>, that will not only enhance our members' learning but also add value to your firm through fresh perspectives and rigorous analysis.
          </p>
          
          <div className="space-y-4">
            <div className="border border-purple-600 rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-4 bg-purple-700 hover:bg-purple-600 transition-colors"
                onClick={() => toggleSection('vcHelp')}
              >
                <span className="text-xl font-semibold">How we can help you</span>
                <span className="text-2xl">{openSections.vcHelp ? '−' : '+'}</span>
              </button>
              
              <AnimatePresence>
                {openSections.vcHelp && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-purple-800"
                  >
                    <div className="p-4 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400">Due Diligence</h3>
                        <p className="ml-4">Conduct <span className="text-yellow-400">thorough research and analysis</span> of potential investments, providing actionable insights to inform your decision-making process.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400">Market Research</h3>
                        <div className="ml-4 space-y-2">
                          <p>Analyze <span className="text-yellow-400">industry trends, competitive landscapes, and market opportunities</span> to support strategic investments and portfolio growth.</p>
                          <h4 className="text-md font-semibold text-yellow-400">Competitive Analysis</h4>
                          <p className="ml-4">Evaluate competitors to identify <span className="text-yellow-400">strengths, weaknesses, and market positioning</span>, aiding in portfolio company strategy and investment decisions.</p>
                          <h4 className="text-md font-semibold text-yellow-400">Portfolio Company Support</h4>
                          <p className="ml-4">Offer <span className="text-yellow-400">flexible support tailored to the needs</span> of your portfolio companies, such as financial modeling or market entry strategy development.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExecTeam = () => {
  const execMembers = [
    { name: 'Mihika Guntur', position: 'President', image: mihikaImg, linkedin: 'https://www.linkedin.com/in/mihika-guntur/'},
    { name: 'Divija Mudumbai', position: 'Co-Exec Vice President', image: divijaImg, linkedin: 'https://www.linkedin.com/in/divija-mudumbai'},
    { name: 'Hussain Mahuvawala', position: 'Co-Exec Vice President', image: hussainImg, linkedin: 'https://www.linkedin.com/in/hm1711/'},
    { name: 'Ayaan Dhir', position: 'VP of Professional Development', image: ayaanImg, linkedin: 'https://www.linkedin.com/in/ayaandhir/'},
    { name: 'Meghana Burugupalli', position: 'VP of Technology', image: meghanaImg, linkedin: 'https://www.linkedin.com/in/srimeghana-burugupalli-913725248/'},
    { name: 'Christian Mccormick', position: 'VP of External Affairs', image: christianImg, linkedin: 'https://www.linkedin.com/in/csmccormick/'},
    { name: 'Ritika Ramnani', position: 'Co-VP of Marketing', image: ritikaImg, linkedin: 'https://www.linkedin.com/in/ritika-ramnani-02090920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'},
    { name: 'Sheryl Gupta', position: 'Co-VP of Marketing', image: sherylImg, linkedin: 'https://www.linkedin.com/in/sheryl-gupta28'},
    { name: 'Sudaay Chaloo', position: 'VP of Internal Affairs', image: sudaayImg, linkedin: 'https://www.linkedin.com/in/sudaaychaloo/'},
    { name: 'Matt Ayabe', position: 'VP of Engagement', image: mattImg, linkedin: 'https://www.linkedin.com/in/mattayabe'},
    { name: 'Kyle King', position: 'VP of Finance', image: kyleImg, linkedin: 'https://www.linkedin.com/in/king-kyle/'}
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
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors duration-200"
                >
                  <LinkedinIcon size={20} />
                </a>
              )}
            </div>
            <p className="text-xl text-yellow-400">{member.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Look at this later to add motion.div for interns for consistency
const Interns = () => {
  const internMembers = [
    { name: "Roshan Raj", position: "Technology Intern", image: roshanImg, linkedin: 'https://www.linkedin.com/in/roshan-raj-9a06a9226/'},
    {name: "Bareera Gulraiz", position: "Intern", image: bareeraImg, linkedin: 'https://www.linkedin.com/in/bareera-gulraiz/'},
    {name: "Bhavya Jain", position: "Professional Development Intern", image: bhavyaImg, linkedin: 'https://www.linkedin.com/in/bhavya-jain-27b27a272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}
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
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          >
            <img src={member.image} alt={member.name} className="h-40 w-40 rounded-full mx-auto mb-4 border-4 border-yellow-400" />
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors duration-200"
                >
                  <LinkedinIcon size={20} />
                </a>
              )}
            </div>
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
    </div>
    <ExecTeam />
    <Interns />
  </div>
);

const MembershipPage = () => {
  const membershipBenefits = [
    "Access to our weekly newsletter featuring exclusive events and opportunities",
    "Personalized mentorship opportunities with experienced professionals",
    "Access to exclusive workshops with industry guest speakers and supplementary materials",
    "Regular updates on internship and fellowship opportunities in venture capital",
    "Complimentary VCS merchandise and professional headshot photography sessions",
    "Participation in our community events, including social gatherings and retreats"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              Join VCS at UCI
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-8">
              Take the next step in your venture capital journey by becoming a member of UCI's premier venture capital organization
            </p>
            <motion.a
              href="https://forms.gle/uGiyGwdhkKUQTTxY9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <motion.div 
              className="bg-purple-800/50 rounded-xl p-8 backdrop-blur-sm border border-purple-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                Winter Quarter Membership
              </h2>
              <p className="text-xl text-purple-100">
                Join now for just <span className="text-yellow-400 font-bold">$5</span> and unlock a comprehensive suite of benefits designed to accelerate your growth in venture capital.
              </p>
            </motion.div>

            <motion.div 
              className="bg-purple-800/50 rounded-xl p-8 backdrop-blur-sm border border-purple-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                Exclusive Benefits
              </h2>
              <div className="space-y-4">
                {membershipBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <span className="text-yellow-400 text-2xl mt-1">✦</span>
                    <span className="text-lg group-hover:text-yellow-300 transition-colors duration-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image and Limited Time Box */}
          <div className="space-y-8">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={membershipImg}
                alt="VCS Membership Benefits"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent rounded-xl"></div>
            </motion.div>

            <motion.div 
              className="bg-yellow-400 rounded-xl p-8 text-purple-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                🌟 Limited Time Opportunity
              </h2>
              <p className="text-lg">
                The first 25 members to join will receive enhanced benefits, including direct mentorship pairing and participation in our exclusive mentorship family program.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalystProgramPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              Analyst Program
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-8">
              Gain the skills, knowledge, and connections to excel in venture capital
            </p>
            <motion.a
              href="https://forms.gle/5J8XheRQuhNiCqJt9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <motion.div 
              className="bg-purple-800/50 rounded-xl p-8 backdrop-blur-sm border border-purple-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                Mastering the Fundamentals of Venture Capital
              </h2>
              <div className="space-y-6 text-lg text-purple-100">
                <p>
                  The heart of our Analyst Program is a <span className="font-bold text-yellow-300">weekly exploration of critical concepts in venture capital and entrepreneurship</span>. Through <span className="font-bold text-yellow-300">interactive sessions, industry insights, and practical case studies</span>, we break down one essential topic each week. This structured approach equips our analysts with the tools to excel in sourcing deals, performing due diligence, analyzing markets, and understanding the intricate mechanics of startups and venture firms.
                </p>
                <p>
                  Our program is designed not only to prepare members for competitive VC roles but also to sharpen their strategic thinking and analytical skills. By the end of the program, participants emerge with the confidence and expertise needed to navigate the dynamic world of venture capital.
                </p>
                <p>
                  For student founders and aspiring investors, the massive information asymmetry between startups and VCs can make securing funding or breaking into venture capital seem impossible. Our Analyst Program demystifies the venture capital process, breaking down term sheets, valuation strategies, and investor decision-making so you can approach fundraising with confidence—whether you're a student entrepreneur building your first startup or a future investor looking to back the next big idea.
                </p>
                <p className="font-medium text-yellow-300">
                  Stay tuned for more updates as we dive into the core of venture capital, one topic at a time.
                </p>
              </div>
            </motion.div>

            {/* Membership Note */}
            <motion.div 
              className="bg-yellow-400/10 rounded-xl p-6 backdrop-blur-sm border border-yellow-400/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg">
                <span className="text-yellow-400">Note:</span> The Analyst Program events are open to all UCI students. While membership is not required to attend, we recommend joining VCS to access additional resources and materials that enhance your understanding of the concepts covered in the program.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Image and Program Highlights */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <img 
                src={springAnalystProgramImg}
                alt="VCS Analyst Program"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
              
              {/* Program Highlights */}
              <motion.div 
                className="bg-purple-800/50 rounded-xl p-8 backdrop-blur-sm border border-purple-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                  At the end of the program you can:
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <span className="text-yellow-400 text-2xl mt-1">✦</span>
                    <span className="text-lg group-hover:text-yellow-300 transition-colors duration-300">
                      Work on a hands-on project with a VC/Startup based in socal
                    </span>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <span className="text-yellow-400 text-2xl mt-1">✦</span>
                    <span className="text-lg group-hover:text-yellow-300 transition-colors duration-300">
                      Stay on the team of VCS as an analyst and continue to work on projects every quarter following completion
                    </span>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <span className="text-yellow-400 text-2xl mt-1">✦</span>
                    <span className="text-lg group-hover:text-yellow-300 transition-colors duration-300">
                      Get priority for board positions
                    </span>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <span className="text-yellow-400 text-2xl mt-1">✦</span>
                    <span className="text-lg group-hover:text-yellow-300 transition-colors duration-300">
                      Network and make meaningful connections with industry professionals
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default VCSWebsite;
