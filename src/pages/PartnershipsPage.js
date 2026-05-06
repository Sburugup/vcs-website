import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import boardImg from '../assets/otherimgs/vcsBoard.png';

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
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl p-8 mb-16 border border-slate-200 shadow-sm">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Welcome to VCS at UCI</h2>
            <p className="text-lg space-y-4 text-slate-700 leading-relaxed">
              At VCS at UCI, our analysts undergo a <span className="text-violet-800 font-semibold">rigorous 9-week intensive training program</span> designed to equip them with the critical skills needed in the venture capital industry. From <span className="text-violet-800 font-semibold">mastering due diligence</span> to <span className="text-violet-800 font-semibold">understanding market dynamics</span> and <span className="text-violet-800 font-semibold">crafting compelling pitches</span>, our members are well-prepared to provide valuable support to startups and VC firms alike. Their hands-on experience and multidisciplinary backgrounds make them uniquely qualified to tackle real-world challenges and deliver impactful solutions.
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
        <div className="bg-white rounded-xl p-8 mb-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">For Startups</h2>
          <p className="text-lg mb-6 text-slate-700 leading-relaxed">
            At VCS at UCI, we're committed to supporting innovative startups by providing <span className="text-amber-800 font-semibold">hands-on venture consulting services</span>. Our diverse members, hailing from various academic backgrounds, share a strong passion for entrepreneurship, problem-solving, and market analysis. We're eager to collaborate with your startup, offering a <span className="text-amber-800 font-semibold">dedicated team for an 8-week project</span> during <span className="text-amber-800 font-semibold">Spring 2025, and all quarters starting Fall 2025</span>. This collaboration will be mutually beneficial, leveraging our members' talents and providing your startup actionable insights and strategic support.
          </p>
          
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-4 bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
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
                    className="bg-slate-50 border-t border-slate-200"
                  >
                    <div className="p-4 space-y-4 text-slate-700">
                      <div>
                        <h3 className="text-lg font-semibold text-violet-900">Pitch Deck Development</h3>
                        <p className="ml-4">Craft <span className="text-amber-800 font-medium">compelling and data-driven pitch decks</span> tailored to capture investor interest and effectively communicate your vision.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-violet-900">VC Insights and Metrics</h3>
                        <p className="ml-4">Provide guidance on the <span className="text-amber-800 font-medium">metrics that matter most to venture capitalists</span> and how to align your narrative to resonate with them.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-violet-900">Investor Matching</h3>
                        <p className="ml-4">Research and identify investors who <span className="text-amber-800 font-medium">align with your industry, stage, and funding needs</span> to maximize your chances of success.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* For VC Firms Section */}
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">For VC Firms</h2>
          <p className="text-lg mb-6 text-slate-700 leading-relaxed">
            VCS at UCI is a student-led organization that specializes in <span className="text-violet-800 font-semibold">venture capital practices including sourcing, due diligence, market research, and investment analysis</span>. Our members bring a variety of skills and experiences, with many having completed <span className="text-violet-800 font-semibold">internships in VC, PE, and tech sectors</span>. We're excited about the opportunity to partner with your firm on an <span className="text-amber-800 font-semibold">8-week project, available in Spring 2025, and all quarters starting Fall 2025</span>, that will not only enhance our members' learning but also add value to your firm through fresh perspectives and rigorous analysis.
          </p>
          
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-4 bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
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
                    className="bg-slate-50 border-t border-slate-200"
                  >
                    <div className="p-4 space-y-4 text-slate-700">
                      <div>
                        <h3 className="text-lg font-semibold text-violet-900">Due Diligence</h3>
                        <p className="ml-4">Conduct <span className="text-amber-800 font-medium">thorough research and analysis</span> of potential investments, providing actionable insights to inform your decision-making process.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-violet-900">Market Research</h3>
                        <div className="ml-4 space-y-2">
                          <p>Analyze <span className="text-amber-800 font-medium">industry trends, competitive landscapes, and market opportunities</span> to support strategic investments and portfolio growth.</p>
                          <h4 className="text-md font-semibold text-violet-800">Competitive Analysis</h4>
                          <p className="ml-4">Evaluate competitors to identify <span className="text-amber-800 font-medium">strengths, weaknesses, and market positioning</span>, aiding in portfolio company strategy and investment decisions.</p>
                          <h4 className="text-md font-semibold text-violet-800">Portfolio Company Support</h4>
                          <p className="ml-4">Offer <span className="text-amber-800 font-medium">flexible support tailored to the needs</span> of your portfolio companies, such as financial modeling or market entry strategy development.</p>
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

export default PartnershipsPage;
