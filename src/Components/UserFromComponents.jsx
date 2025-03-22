import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaFacebookMessenger, FaBars, FaTimes } from "react-icons/fa";

 const UserFromComponents = () => {
 const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
  AOS.init({ duration: 1000 });
  }, 
  []);

  const handleRedirect = (url) => {
    window.open(url);
  };

  const toggleButtons = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
    <nav>
    <div className="container flex justify-end items-center ">
      <div className='relative'>
      <h2>📲📲 Connect on WhatsApp | 💬!! <br /> Message on Messenger Click Now!</h2>
        
        <button onClick={toggleButtons} className="text-2xl p-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg border-2 border-gray-200 hover:scale-110 transition-all duration-300">
        {isVisible ? <FaTimes /> : <FaBars />}
        </button>

        {isVisible && (
          <div
            className='flex gap-4 p-4 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg border-2 border-gray-200 rounded-2xl absolute top-14 left-1/2 transform -translate-x-1/2'
            data-aos="fade-left">
            <button onClick={() => handleRedirect('https://wa.me/message/O3CTLULQDASLC1')} className="text-xl font-semibold text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-green-600">
            <FaWhatsapp />
            </button>

            <button onClick={() => handleRedirect('https://m.me/jahidul.islam.98621')} className=" text-xl font-semibold text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-blue-600">
            <FaFacebookMessenger />
            </button>
          </div>
        )}
      </div>
    </div>
    </nav>
    </>
  );
 };

 export default UserFromComponents;
//  fsdghsfgn