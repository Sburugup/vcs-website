import React from 'react';
import { motion } from 'framer-motion';
import springAnalystProgramImg from '../assets/otherimgs/springAnalystProgram.png';

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

export default AnalystProgramPage;
