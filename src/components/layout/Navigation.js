import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import vcsLogo from '../../assets/otherimgs/vcsLogo.png';

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
    setShowJoinDropdown(false);
  };

  const handleAnalystProgramClick = () => {
    setPage('analystProgram');
    setShowJoinDropdown(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-purple-900 bg-opacity-90 shadow-md">
      <div className="container mx-auto px-2 md:px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={vcsLogo} alt="VCS Logo" className="h-12 md:h-16 w-auto mr-2 md:mr-4" />
          <h1 className="text-xl font-bold text-white hidden md:block">Venture Capital Society</h1>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-wrap">
          {/* Regular navigation buttons */}
          {['home', 'events', 'partnerships', 'team'].map((page) => (
            <motion.button
              key={page}
              onClick={() => setPage(page)}
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold ${
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
            className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold bg-purple-800 text-white whitespace-nowrap"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Where We Go
          </motion.button>

          {/* Join Dropdown */}
          <div className="relative join-dropdown">
            <motion.button
              onClick={() => setShowJoinDropdown(!showJoinDropdown)}
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold ${
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
          <div className="flex items-center gap-1 md:gap-2 md:ml-4">
            <motion.a
              href="https://www.instagram.com/vcs.uci?igsh=MWQ1ZGUxMzBkMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon size={20} className="md:w-6 md:h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/venture-capital-society-uci/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedinIcon size={20} className="md:w-6 md:h-6" />
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
                <MailIcon size={20} className="md:w-6 md:h-6" />
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

export default Navigation;
