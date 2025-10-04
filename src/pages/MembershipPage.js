import React from 'react';
import { motion } from 'framer-motion';
import membershipImg from '../assets/otherimgs/vcsMembership.png';

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

export default MembershipPage;
