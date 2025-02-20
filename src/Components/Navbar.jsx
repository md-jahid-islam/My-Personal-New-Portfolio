 import { 
  MoonIcon, SunIcon, HomeIcon, UserIcon, FolderIcon, 
  DocumentTextIcon, CogIcon, PhoneIcon 
 } 
 from "@heroicons/react/24/solid";
 import React, { useState, useEffect } from "react";
 import { NavLink, useNavigate, useLocation } from "react-router-dom";
 import ClipLoader from "react-spinners/ClipLoader";

 //=========== all page path start =========//
 const pages = [
  { path: "/home", name: "Home", icon: <HomeIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/about", name: "About", icon: <UserIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/portfolio", name: "Portfolio", icon: <FolderIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/blog", name: "Blog", icon: <DocumentTextIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/services", name: "Services", icon: <CogIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/contact", name: "Contact", icon: <PhoneIcon className="w-5 h-5 inline mr-2" /> }
 ];
  //=========== all page path end ===========//

 const Navbar = () => {
  //======== useState =======//
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

 //=========== navigate ==========//
  const navigate = useNavigate();
  const location = useLocation();

 //=========== useEffect localStorage getItem theme ========//
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#1E1E2E"; 
    }

   //======== updateCursor ========//
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);
   //======= setTimeout =======//
    setTimeout(() => {
      setLoading(false);
    }, 2000);

   //======== mousemove ========//
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);
  //======== handleScroll event ======== //
  useEffect(() => {
    const handleScroll = (event) => {
      let currentIndex = pages.findIndex(page => page.path === location.pathname);
      
      if (event.deltaY > 0 && currentIndex < pages.length - 1) {
        navigate(pages[currentIndex + 1].path);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        navigate(pages[currentIndex - 1].path);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [location.pathname, navigate]);

 //========= toggleTheme ========//
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#1E1E2E"; 
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#F8F9FA"; 
      localStorage.setItem("theme", "light");
    }
  };
  //========= design part start =========//
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white dark:bg-[#1E1E2E] transition-all duration-1000 z-50">
          <ClipLoader color={darkMode ? "#A6E3E9" : "#36C2CE"} loading={loading} size={70} />
        </div>
      )}
      <div
        className="fixed w-4 h-4 rounded-full bg-[#36C2CE] opacity-70 pointer-events-none transition-transform duration-150"
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
      ></div>

      <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${darkMode ? "bg-[#1E1E2E] text-[#A6E3E9]" : "bg-[#F8F9FA] text-[#222222]"} shadow-md py-4 ${loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <NavLink to="/home">
            <img src="/images/profile.png" alt="Portfolio Logo" className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300" />
          </NavLink>

          <ul className={`flex flex-col md:flex-row md:gap-6 absolute md:static left-0 top-full w-full md:w-auto ${darkMode ? "bg-[#1E1E2E] text-[#A6E3E9]" : "bg-[#F8F9FA] text-[#222222]"} font-bold md:items-center transition-all duration-300 ease-in-out transform ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"}`}>
            {pages.map(({ path, name, icon }, index) => (
              <li key={index} className="relative group text-center md:text-left py-2 md:py-0">
                <NavLink to={path} className={({ isActive }) => `flex items-center text-lg ${isActive ? "text-[#36C2CE]" : darkMode ? "text-[#A6E3E9]" : "text-[#222222]"} hover:text-[#36C2CE] transition-colors duration-300`}>
                  {icon} {name}
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#36C2CE] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button className="text-gray-800 dark:text-white bg-[#910A67] rounded-full transition-opacity" onClick={toggleTheme} aria-label="Toggle theme">
              {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>

            <button className="md:hidden flex items-center text-gray-800 dark:text-white bg-red-500 rounded-full transition-opacity hover:text-[#36C2CE] focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
 };
 //========= design part end =========//

 export default Navbar;
