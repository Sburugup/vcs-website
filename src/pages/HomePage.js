import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { InteractiveButton } from '../components/ui/StyledComponents';
import WhoWeArePage from './WhoWeArePage';
import WhatWeDoPage from './WhatWeDoPage';
import WhereWeGoPage from './WhereWeGoPage';

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

export default HomePage;
