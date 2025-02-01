import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      {/* Cursor Animation */}
      <div
        className="fixed w-4 h-4 rounded-full bg-[#36C2CE] opacity-70 pointer-events-none transition-transform duration-150"
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}></div>

      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
          darkMode ? 'bg-[#1E1E2E] text-[#A6E3E9]' : 'bg-[#F8F9FA] text-[#222222]'
        } shadow-md py-4`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          {/* Logo */}
          <NavLink to="/home" onClick={() => setIsOpen(false)}>
            <img
              src="/images/profile.png"
              alt="Portfolio Logo"
              className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300"
            />
          </NavLink>

          {/* Menu Links */}
          <ul
            className={`flex flex-col md:flex-row md:gap-6 absolute md:static left-0 top-full w-full md:w-auto ${
              darkMode ? 'bg-[#1E1E2E] text-[#A6E3E9]' : 'bg-[#F8F9FA] text-[#222222]'
            } font-bold md:items-center transition-all duration-300 ease-in-out transform ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
            }`}
          >
            {['Home', 'About', 'Portfolio', 'Blog', 'Services', 'Contact'].map((item, index) => (
              <li key={index} className="relative group text-center md:text-left py-2 md:py-0">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-lg ${
                      isActive ? 'text-[#36C2CE]' : darkMode ? 'text-[#A6E3E9]' : 'text-[#222222]'
                    } hover:text-[#36C2CE] transition-colors duration-300`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#36C2CE] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Right Section (Dark Mode Toggle & Mobile Menu) */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              className="text-gray-800 dark:text-white focus:outline-none"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden flex items-center text-gray-800 dark:text-white hover:text-[#36C2CE] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
 };

 export default Navbar;
