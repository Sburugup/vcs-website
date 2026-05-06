// src/pages/BoardApplicationsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import boardApplicationsImg from "../assets/otherimgs/boardApplications.png"; // <-- put your poster image here

const BoardApplicationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-violet-50/35 to-slate-100 text-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Board Applications
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Help shape VCS at UCI — apply for the board and build the venture ecosystem on campus.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://linktr.ee/ucivcs" // <-- update if you have a direct form link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-amber-400 text-slate-900 rounded-full font-bold text-xl shadow-md hover:bg-violet-800 hover:text-white hover:shadow-lg hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>

              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEIxmFSELV6r3_nKLIews18WZu7FU-DGIF-7YxEpY04vbCbA/viewform" // <-- optionally set this to your Google Form directly
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-white border-2 border-violet-200 rounded-full font-semibold text-lg text-violet-900 hover:bg-violet-50 hover:border-violet-300 hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Linktree / More Info
              </motion.a>
            </div>

            <p className="mt-6 text-slate-600">
              Applications due by{" "}
              <span className="font-bold text-violet-900">March 15</span>.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <motion.div
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-violet-900 border-b-2 border-amber-400 inline-block pb-1">
                Lead, Build, and Grow VCS
              </h2>

              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  VCS Board is where our community gets built — from speaker
                  events and partnerships to member experience and operations.
                  We’re looking for students who want to{" "}
                  <span className="font-bold text-violet-900">
                    take ownership, execute consistently, and help scale the
                    venture ecosystem at UCI
                  </span>
                  .
                </p>

                <p>
                  Board members work directly with the leadership team to ship
                  real outcomes each quarter: programming, marketing, sponsor
                  outreach, systems, and more.
                </p>

                <p className="font-medium text-amber-800">
                  If you’re excited to learn fast, lead teams, and build
                  something meaningful — apply.
                </p>
              </div>
            </motion.div>

            {/* Roles */}
            <motion.div
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-violet-900 border-b-2 border-amber-400 inline-block pb-1">
                Positions Open
              </h2>

              <ul className="space-y-3 text-lg text-slate-700">
                {[
                  "President",
                  "Vice President",
                  "External Affairs",
                  "Internal Affairs",
                  "Professional Development",
                  "Technology",
                  "Finance",
                  "Marketing",
                ].map((role) => (
                  <li key={role} className="flex items-center gap-3">
                    <span className="text-violet-600 text-xl" aria-hidden>✦</span>
                    <span className="hover:text-violet-900 transition-colors duration-300">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Note */}
            {/*
            <motion.div
              className="bg-yellow-400/10 rounded-xl p-6 backdrop-blur-sm border border-yellow-400/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
            </motion.div>
            */}
          </div>

          {/* Right Column - Poster / Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <img
                src={boardApplicationsImg}
                alt="VCS Board Applications"
                className="rounded-xl shadow-2xl w-full object-cover"
              />

              <motion.div
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-violet-900 border-b-2 border-amber-400 inline-block pb-1">
                  What you’ll gain
                </h2>

                <div className="space-y-4">
                  {[
                    "Hands-on leadership experience running real initiatives",
                    "Tight collaboration with founders, investors, and partners",
                    "A strong team and a portfolio of shipped outcomes",
                    "A direct role in shaping VCS culture and strategy",
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3 group">
                      <span className="text-violet-600 text-2xl mt-1" aria-hidden>✦</span>
                      <span className="text-lg text-slate-700 group-hover:text-violet-900 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg bg-violet-50 border border-violet-200 p-4">
                  <p className="text-slate-700">
                    Deadline:{" "}
                    <span className="font-bold text-violet-900">March 15</span>
                    {" · "}
                    More details on{" "}
                    <span className="font-bold text-amber-800">
                      linktr.ee/ucivcs
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BoardApplicationsPage;
