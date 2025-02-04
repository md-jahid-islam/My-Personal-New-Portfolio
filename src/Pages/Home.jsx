 import React, { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';
 import Typewriter from 'typewriter-effect';

 const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
 // Check useEffect stored theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
 //=================== toggleTheme
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
    <div className='container'>
    <div className={` mx-auto px-4 py-10 mt-[60px] h-screen `}>
      {/* Toggle Theme Button */}
      <button 
        onClick={toggleTheme} 
        className="absolute top-4 right-4 px-4 py-2 rounded-md bg-blue-500 font-semibold shadow-lg hover:bg-blue-400"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="baner_part flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
        
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 md:ml-10">
          <h1 className="text-3xl md:text-4xl font-bold pt-10 md:pt-20 text-blue-500"> MD. Jahidul Islam</h1>
          <h2 className="text-lg md:text-xl mt-3 text-blue-500">
            <Typewriter
              options={{
                strings: ["Front-End", "Developer", "with React"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h2>
          <p className="w-72 md:w-80 mt-5 text-[17px] text-blue-500 ">
            Hi, I'm Jahidul Islam, a passionate front-end developer specializing in creating dynamic and responsive web applications. Explore my portfolio to see my contributions to the tech community.
          </p>
          <div className="flex gap-5 mt-10">
            <Link to="/About">
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300">
                View Work
              </button>
            </Link>
            <Link to="/Contact">
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300">
                Contact Me
              </button>
            </Link>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mt-7 text-blue-500 ">Trusted by World Leading Brands <br /> Portfolio!</h2>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end md:mr-10">
          <img className="w-40 h-40 md:w-56 md:h-56 rounded-full transition-transform duration-300 hover:scale-105" src="public/images/profile.png" alt="Main profile" />
          <img className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3 w-10 h-10 md:w-16 md:h-16 rounded-full animate-bounce ml-[320px]" src="public/images/img1.png" alt="Decorative icon 1" />
          <img className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 w-8 h-8 md:w-12 md:h-12 rounded-full animate-spin" src="public/images/img2.png" alt="Decorative icon 2" />

          <h3 className="absolute pt-[240px] text-xl md:text-2xl font-bold text-[#578FCA] ">MD.Jahidul Islam</h3>
           {/*Typewriter Section */}
          <div className="absolute pt-[280px] text-lg md:text-xl font-bold text-[#578FCA] ">
            <Typewriter
              options={{
                strings: ["Front-End Developer", "with React"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}/>
          </div>
          <div>
          </div>
          <div className="absolute pt-[336px]">
            <a className="w-[200px] h-[50px] bg-gradient-to-r from-[#FF0075] to-[#FC4100] hover:from-[#FC4100] hover:to-[#FF0075] rounded-lg flex justify-center items-center text-white font-bold transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3 hover:border-2 hover:border-[#FC4100] hover:text-[#FC4100]" href="/public/images/Jahid-Resume.pdf" download="CV">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
 };

 export default Home;
