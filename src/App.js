import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SunIcon, BookOpenIcon, UsersIcon, TargetIcon, MenuIcon, XIcon } from 'lucide-react';
import ExecTeam from './ExecBoard';
import Interns from './Interns';

const VCSWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimeout;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle mouse enter to open the dropdown instantly
  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);  // Cancel any pending closing
    setIsDropdownOpen(true);  // Open the dropdown
  };

  // Handle mouse leave to delay closing of dropdown
  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);  // Close after 500ms
    }, 500);  // Delay of 500ms
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout) clearTimeout(dropdownTimeout);  // Cleanup on unmount
    };
  }, []);

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
                <li className="relative group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                  <a href="#" className="hover:text-orange-400 transition duration-300">Team</a>
                  <ul className={`absolute bg-blue-900 text-white space-y-2 mt-2 p-2 rounded-md transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
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
                {/* Other content here */}
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
