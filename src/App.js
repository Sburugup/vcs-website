import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SunIcon, BookOpenIcon, UsersIcon, TargetIcon, MenuIcon, XIcon } from 'lucide-react';
import ExecTeam from './ExecBoard';
import Interns from './Interns';

const VCSWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="bg-white min-h-screen">
        <header className="bg-blue-900 text-white p-4 fixed w-full z-10">
          <div className="container mx-auto flex items-center justify-between">
            <img src="/api/placeholder/100/50" alt="VCS Logo" className="h-8" />
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#vision" className="hover:text-orange-400 transition duration-300">Vision</a></li>
                <li><a href="#mission" className="hover:text-orange-400 transition duration-300">Mission</a></li>
                <li><a href="#strategies" className="hover:text-orange-400 transition duration-300">Strategies</a></li>
                <li><a href="#goals" className="hover:text-orange-400 transition duration-300">Goals</a></li>
                <li className="relative group">
                  <a href="#" className="hover:text-orange-400 transition duration-300">Team</a>
                  <ul className="absolute hidden group-hover:block bg-blue-900 text-white space-y-2 mt-2 p-2 rounded-md">
                    <li><Link to="/exec-team" className="hover:text-orange-400">Exec Team</Link></li>
                    <li><Link to="/interns" className="hover:text-orange-400">Interns</Link></li>
                  </ul>
                </li>
              </ul>
            </nav>

            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-blue-900 z-20 flex items-center justify-center">
            <nav>
              <ul className="text-white text-2xl space-y-6">
                <li><a href="#vision" onClick={toggleMenu} className="hover:text-orange-400 transition duration-300">Vision</a></li>
                <li><a href="#mission" onClick={toggleMenu} className="hover:text-orange-400 transition duration-300">Mission</a></li>
                <li><a href="#strategies" onClick={toggleMenu} className="hover:text-orange-400 transition duration-300">Strategies</a></li>
                <li><a href="#goals" onClick={toggleMenu} className="hover:text-orange-400 transition duration-300">Goals</a></li>
              </ul>
            </nav>
          </div>
        )}

        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <section className="bg-gradient-to-r from-blue-900 to-orange-400 text-white py-20">
                  <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">VCS at UCI</h1>
                    <p className="text-xl md:text-2xl mb-8">Bridging Academia and Venture Capital</p>
                    <a href="#" className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-orange-400 hover:text-white transition duration-300">Join Us</a>
                  </div>
                </section>

                <section id="vision" className="py-16 bg-gray-100">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                      <SunIcon className="mr-4" size={32} /> Our Vision
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      To become the leading student organization at UCI that bridges the gap between academia and
                      the venture capital industry, fostering future leaders in deal-sourcing, investments and
                      entrepreneurship.
                    </p>
                  </div>
                </section>

                <section id="mission" className="py-16">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                      <BookOpenIcon className="mr-4" size={32} /> Our Mission
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      To educate and empower UCI students by providing practical experience, mentorship,
                      collaboration with industry professionals and networking opportunities in the venture capital
                      field in Southern California, thereby enhancing their understanding and engagement in the
                      private equity ecosystem.
                    </p>
                  </div>
                </section>

                <section id="strategies" className="py-16 bg-gray-100">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                      <UsersIcon className="mr-4" size={32} /> Our Strategies
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      {[
                        { title: "Education and Training", content: "Offer comprehensive workshops, seminars, and simulations to teach students the fundamentals of venture capital and startup investment." },
                        { title: "Partnership Development", content: "Build strong relationships with local venture capital firms, investors, and industry professionals to provide valuable insights and opportunities for our members." },
                        { title: "Practical Experience", content: "Facilitate hands-on projects and internships that allow students to apply their knowledge in real-world scenarios." },
                        { title: "Inclusive Growth", content: "Establish a two-tier committee system to include both experienced members and newcomers, ensuring continuous learning and development for all participants." }
                      ].map((strategy, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">{strategy.title}</h3>
                          <p className="text-gray-700">{strategy.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="goals" className="py-16">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                      <TargetIcon className="mr-4" size={32} /> Our Goals
                    </h2>
                    <ul className="space-y-4 text-xl text-gray-700">
                      {[
                        "Educate at least 30 students quarterly on venture capital and investment strategies.",
                        "Form partnerships with at least 5 local venture capital firms and industry experts.",
                        "Conduct 4-7 educational workshops and practical simulations each quarter.",
                        "Develop a pipeline of talent through our Learning Development Team, transitioning them to the Executive Board as they gain experience."
                      ].map((goal, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-400 mr-4">•</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </>
            } />
            <Route path="/exec-team" element={<ExecTeam />} />
            <Route path="/interns" element={<Interns />} />
          </Routes>
        </main>

        <footer className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4">&copy; 2024 VCS at UCI. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-orange-400">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400">Terms of Service</a>
              <a href="#" className="hover:text-orange-400">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default VCSWebsite;
