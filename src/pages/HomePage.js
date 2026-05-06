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
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-transparent overflow-hidden">
        <DynamicWordCloud avoidRect={contentRect} />
        <div ref={contentRef} className="relative z-20 p-8 max-w-3xl mx-4 bg-white/92 rounded-2xl shadow-md border border-slate-200/80">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-slate-900"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to VCS at UCI
          </motion.h1>
          <motion.p 
            className="mb-8 text-lg md:text-xl text-slate-600 max-w-[62ch] mx-auto"
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
    { text: 'POTENTIAL', size: 30 },
    { text: 'PARTNERS', size: 28 },
    { text: 'RISK', size: 20 },
    { text: 'EQUITY', size: 40 },
    { text: 'COMPANIES', size: 38 },
    { text: 'PRIVATE', size: 36 },
    { text: 'INVESTORS', size: 30 },
    { text: 'EXPERIENCE', size: 24 },
    { text: 'NETWORKS', size: 18 },
    { text: 'PARTNERSHIP', size: 28 },
    { text: 'ROUND', size: 26 },
    { text: 'POSITIONING', size: 24 },
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
      const padding = 24;
      const maxAttemptsPerZone = 30;
      const minGap = 18;

      const columns = 4;
      const rows = 3;
      const zoneWidth = (width - padding * 2) / columns;
      const zoneHeight = (height - padding * 2) / rows;

      const zones = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          zones.push({
            xMin: padding + col * zoneWidth,
            xMax: padding + (col + 1) * zoneWidth,
            yMin: padding + row * zoneHeight,
            yMax: padding + (row + 1) * zoneHeight,
          });
        }
      }

      words.forEach((word) => {
        const startZone = Math.floor(Math.random() * zones.length);
        let placedWord = false;

        for (let zoneOffset = 0; zoneOffset < zones.length && !placedWord; zoneOffset++) {
          const zone = zones[(startZone + zoneOffset) % zones.length];

          for (let attempt = 0; attempt < maxAttemptsPerZone; attempt++) {
            const x = Math.random() * (zone.xMax - zone.xMin) + zone.xMin;
            const y = Math.random() * (zone.yMax - zone.yMin) + zone.yMin;

            const bbox = {
              left: x - word.size * word.text.length * 0.25 - minGap,
              right: x + word.size * word.text.length * 0.25 + minGap,
              top: y - word.size * 0.6 - minGap,
              bottom: y + word.size * 0.6 + minGap,
            };

            if (bbox.left <= padding || bbox.right >= width - padding ||
                bbox.top <= padding || bbox.bottom >= height - padding) {
              continue;
            }

            const overlap = placed.some(w =>
              !(bbox.left > w.bbox.right ||
                bbox.right < w.bbox.left ||
                bbox.top > w.bbox.bottom ||
                bbox.bottom < w.bbox.top)
            );

            const avoidContentArea =
              bbox.left < avoidRect.left + avoidRect.width + 70 &&
              bbox.right > avoidRect.left - 70 &&
              bbox.top < avoidRect.top + avoidRect.height + 50 &&
              bbox.bottom > avoidRect.top - 50;

            if (!overlap && !avoidContentArea) {
              placed.push({ ...word, x, y, bbox });
              placedWord = true;
              break;
            }
          }
        }
      });

      setPlacedWords(placed);
    };

    placeWords();
  }, [dimensions, words, avoidRect]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet" aria-hidden>
      {placedWords.map((word, index) => (
        <motion.text
          key={`${word.text}-${index}`}
          x={word.x}
          y={word.y}
          fontSize={word.size}
          fill="#7c3aed"
          fillOpacity="0.07"
          textAnchor="middle"
          dominantBaseline="middle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
        >
          {word.text}
        </motion.text>
      ))}
    </svg>
  );
};

export default HomePage;
