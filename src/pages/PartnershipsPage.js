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

export default PartnershipsPage;
