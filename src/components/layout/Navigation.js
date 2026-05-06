import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import vcsLogo from "../../assets/otherimgs/newLogo.png";

const Navigation = ({ currentPage, setPage }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showJoinDropdown, setShowJoinDropdown] = useState(false);

  // Close dropdown when clicking outside (desktop-friendly)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showJoinDropdown && !event.target.closest(".join-dropdown")) {
        setShowJoinDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showJoinDropdown]);

  const handleMembershipClick = () => {
    setPage("join");
    setShowJoinDropdown(false);
  };

  const handleAnalystProgramClick = () => {
    setPage("analystProgram");
    setShowJoinDropdown(false);
  };


  return (
    <nav className="absolute top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-2 md:px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src={vcsLogo}
            alt="VCS Logo"
            className="h-12 md:h-16 w-auto max-w-[140px] md:max-w-[180px] object-contain"
          />
          <h1 className="text-lg md:text-xl font-semibold text-slate-900">
            Venture Capital Society
          </h1>
        </div>

        <div className="flex items-center gap-1 md:gap-2 flex-wrap">
          {/* Regular navigation buttons */}
          {["home", "events", "partnerships", "team"].map((page) => (
            <motion.button
              key={page}
              onClick={() => setPage(page)}
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold transition-colors ${
                currentPage === page
                  ? "bg-violet-700 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-violet-300 hover:text-violet-800"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </motion.button>
          ))}

          {/* Join Dropdown */}
          <div className="relative join-dropdown z-[9999]">
            <motion.button
              onClick={() => setShowJoinDropdown((v) => !v)}
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold transition-colors ${
                currentPage === "join" ||
                currentPage === "analystProgram"
                  ? "bg-violet-700 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-violet-300 hover:text-violet-800"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us
            </motion.button>

            <AnimatePresence>
              {showJoinDropdown && (
                <>
                  {/* Mobile overlay (captures taps; prevents menu being behind content) */}
                  <div
                    className="fixed inset-0 z-[9998] sm:hidden"
                    onClick={() => setShowJoinDropdown(false)}
                  />

                  {/* Dropdown panel: fixed on mobile, absolute on sm+ */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={[
                      // Mobile: fixed full-width-ish panel
                      "fixed sm:absolute",
                      "top-20 left-3 right-3 sm:top-auto sm:left-auto sm:right-0",
                      "sm:mt-2",
                      "py-2 sm:w-48",
                      "bg-white rounded-lg shadow-xl border border-slate-200",
                      "z-[9999]",
                      "overflow-hidden",
                    ].join(" ")}
                  >
                    <motion.button
                      onClick={handleMembershipClick}
                      className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-violet-50 hover:text-violet-900 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      Membership
                    </motion.button>

                    <motion.button
                      onClick={handleAnalystProgramClick}
                      className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-violet-50 hover:text-violet-900 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      Analyst Program
                    </motion.button>

                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-1 md:gap-2 md:ml-4">
            <motion.a
              href="https://www.instagram.com/vcs.uci?igsh=MWQ1ZGUxMzBkMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon size={20} className="md:w-6 md:h-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/venture-capital-society-uci/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedinIcon size={20} className="md:w-6 md:h-6" />
            </motion.a>

            <motion.div
              className="relative"
              onHoverStart={() => setShowEmail(true)}
              onHoverEnd={() => setShowEmail(false)}
              onClick={() => setShowEmail((v) => !v)}
            >
              <motion.div
                className="text-slate-500 hover:text-violet-700 transition-colors duration-300 cursor-pointer"
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
                    className="absolute right-0 mt-2 py-2 px-4 bg-white text-slate-900 border border-slate-200 rounded-md shadow-lg text-sm whitespace-nowrap z-[9999]"
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
