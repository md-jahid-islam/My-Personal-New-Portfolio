//  import React, { useState } from "react";
//  import { TbArrowLeftFromArc } from "react-icons/tb";
//  import { Link } from "react-router-dom";

//  const Services = () => {
//   const [expanded, setExpanded] = useState(null); 

//   const services = [
//     {
//       id: 1,
//       title: "Firebase Development",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
//       imgSrc: "public/images/firebase.png",
//       details: [
//         "Authentication",
//         "Realtime Database & Firestore",
//         "Cloud Storage",
//         "Firebase Hosting",
//         "Cloud Functions",
//         "Firebase Analytics",
//         "Firebase Crashlytics",
//         "Firebase Remote Config",
//         "Firebase Cloud Messaging (FCM)",
//         "Firebase App Check"
//       ]
//     },
//     {
//       id: 2,
//       title: "Visual Branding API",
//       description: "A aliquam hac quis habitant dolor nunc metus sed. Sed commodo mauris purus molestie fames.",
//       imgSrc: "public/images/brand.png",
//       details: [
//         "Brand.dev",
//         "BrandAPI",
//         "Klazify",
//         "VISUA",
//         "MyBrandAPI"
//       ]
//     },
//     {
//       id: 3,
//       title: "React Development",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
//       imgSrc: "public/images/react.png",
//       details: [
//         "Custom React Website design ",
//         "React Component Library Development",
//         "React Performance Optimization",
//         "React-based Single Page Applications (SPA)",
//         "UI/UX Design with React",
//         "React Web Maintenance",
//         "Cloud Services Integration",
//         "Security Solutions for React",
//         "Custom React Dashboard Development"
//       ]
//     },
//     {
//       id: 4,
//       title: "Web Development",
//       description: "Diam lacus faucibus eget dolor phasellus aliquam sit in. Eget ultricies turpis elit augue cras mauris lorem mauris.",
//       imgSrc: "public/images/webdevelop.png",
//       details: [
//         "Custom Website Development",
//         "Front-end Web Development",
//         "Back-end Web Development",
//         "E-commerce Web Development",
//         "Web Application Development",
//         "UI/UX Design and Prototyping",
//         "Web Hosting and Deployment",
//         "Web Security Services",
//         "Website Redesign & Maintenance",
//         "Cloud Services & Web App Hosting",
//         "Real-Time Web Applications"
//       ]
//     },
//   ];
//   // Toggle the expanded service
//   const toggleExpand = (id) => {
//     setExpanded((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       {/* Header Section */}
//       <div className="text-center">
//         <h2 className="text-3xl font-bold dark:text-white mt-11 text-blue-500 "> My Services</h2>
//         <div className="w-48 h-[3px] bg-[#FF204E] mx-auto my-2"></div>
//         <h2 className="mt-4 text-lg md:text-2xl font-bold text-blue-500 dark:text-gray-300">
//           Building Digital Products With Better Experience
//         </h2>
//         <p className="mt-3 text-sm md:text-lg text-blue-500 dark:text-gray-400">
//           Our vision is to be a trailblazing force in the world of web design and development, recognized for  <br /> our unwavering commitment to excellence, integrity, and customer satisfaction.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//         {services.map((service) => (
//           <div key={service.id} className="relative text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
//             <img className="w-20 h-20 mx-auto rounded-lg mt-5 hover:scale-110 transition duration-300" src={service.imgSrc} alt={service.title} />
//             <h2 className="text-lg md:text-xl font-bold text-[#4f4f4f] dark:text-gray-300 mt-5">{service.title}</h2>

//             <button onClick={() => toggleExpand(service.id)} className="block mt-4 text-lg text-[#4f4f4f] dark:text-gray-300 transform hover:scale-110 transition duration-300">
//               <TbArrowLeftFromArc className={`inline-block text-[20px] ${expanded === service.id ? "rotate-180" : ""} transition-transform duration-300`} />
//             </button>

//             {/* Expanded Description */}
//             <div className={`overflow-hidden transition-all duration-500 ${expanded === service.id ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
//               <ul className="list-disc list-inside text-sm md:text-base text-[#4f4f4f] dark:text-gray-400">
//                 {service.details.map((detail, index) => (
//                   <li key={index}>{detail}</li>
//                 ))}
//               </ul>
//               <Link to="#" className="mt-3 inline-block text-sm font-semibold text-[#FF204E] hover:text-[#008DDA] transition duration-300">Read More</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
//  };

//  export default Services;
 import React, { useState } from "react";
 import { TbArrowLeftFromArc } from "react-icons/tb";
 import { Link } from "react-router-dom";

 const Services = () => {
  const [expanded, setExpanded] = useState(null); 
  const [servicesToShow, setServicesToShow] = useState(4); // Default to show 4 services initially

  const allServices = [
    {
      id: 1,
      title: "Firebase Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
      imgSrc: "public/images/firebase.png",
      details: [
        "Authentication",
        "Realtime Database & Firestore",
        "Cloud Storage",
        "Firebase Hosting",
        "Cloud Functions",
        "Firebase Analytics",
        "Firebase Crashlytics",
        "Firebase Remote Config",
        "Firebase Cloud Messaging (FCM)",
        "Firebase App Check"
      ]
    },
    {
      id: 2,
      title: "Visual Branding API",
      description: "A aliquam hac quis habitant dolor nunc metus sed. Sed commodo mauris purus molestie fames.",
      imgSrc: "public/images/brand.png",
      details: [
        "Brand.dev",
        "BrandAPI",
        "Klazify",
        "VISUA",
        "MyBrandAPI"
      ]
    },
    {
      id: 3,
      title: "React Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
      imgSrc: "public/images/react.png",
      details: [
        "Custom React Website design ",
        "React Component Library Development",
        "React Performance Optimization",
        "React-based Single Page Applications (SPA)",
        "UI/UX Design with React",
        "React Web Maintenance",
        "Cloud Services Integration",
        "Security Solutions for React",
        "Custom React Dashboard Development"
      ]
    },
    {
      id: 4,
      title: "Web Development",
      description: "Diam lacus faucibus eget dolor phasellus aliquam sit in. Eget ultricies turpis elit augue cras mauris lorem mauris.",
      imgSrc: "public/images/webdevelop.png",
      details: [
        "Custom Website Development",
        "Front-end Web Development",
        "Back-end Web Development",
        "E-commerce Web Development",
        "Web Application Development",
        "UI/UX Design and Prototyping",
        "Web Hosting and Deployment",
        "Web Security Services",
        "Website Redesign & Maintenance",
        "Cloud Services & Web App Hosting",
        "Real-Time Web Applications"
      ]
    },
    // Add future services here
    {
      id: 5,
      title: "AI Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "public/images/ai.png",
      details: ["Machine Learning", "AI Chatbots", "Data Analysis", "Automation Solutions"]
    },
    {
      id: 6,
      title: "Mobile App Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "public/images/app.png",
      details: ["Cross-Platform Apps", "Native Mobile Apps", "App UI/UX Design", "App Integration"]
    }
  ];

  // Toggle the expanded service
  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  // Load more services
  const loadMoreServices = () => {
    setServicesToShow((prev) => prev + 2); 
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold dark:text-white mt-11 text-blue-500 "> My Services</h2>
        <div className="w-48 h-[3px] bg-blue-500 mx-auto my-2"></div>
        <h2 className="mt-4 text-lg md:text-2xl font-bold text-blue-500 dark:text-gray-300">
          Building Digital Products With Better Experience
        </h2>
        <p className="mt-3 text-sm md:text-lg text-blue-500 dark:text-gray-400">
          Our vision is to be a trailblazing force in the world of web design and development, recognized for  <br /> our unwavering commitment to excellence, integrity, and customer satisfaction.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {allServices.slice(0, servicesToShow).map((service) => (
          <div key={service.id} className="relative text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <img className="w-20 h-20 mx-auto rounded-lg mt-5 hover:scale-110 transition duration-300" src={service.imgSrc} alt={service.title} />
            <h2 className="text-lg md:text-xl font-bold text-[#4f4f4f] dark:text-gray-300 mt-5">{service.title}</h2>

            <button onClick={() => toggleExpand(service.id)} className="block mt-4 text-lg text-[#4f4f4f] dark:text-gray-300 transform hover:scale-110 transition duration-300">
              <TbArrowLeftFromArc className={`inline-block text-[20px] ${expanded === service.id ? "rotate-180" : ""} transition-transform duration-300`} />
            </button>

            {/* Expanded Description */}
            <div className={`overflow-hidden transition-all duration-500 ${expanded === service.id ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
              <ul className="list-disc list-inside text-sm md:text-base text-[#4f4f4f] dark:text-gray-400">
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <Link to="#" className="mt-3 inline-block text-sm font-semibold text-[#FF204E] hover:text-[#008DDA] transition duration-300">Read More</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {servicesToShow < allServices.length && (
        <div className="text-center mt-8">
          <button onClick={loadMoreServices} className="text-[#FF204E] font-semibold hover:text-[#008DDA] transition duration-300">
            Load More Services
          </button>
        </div>
      )}
    </div>
  );
 };

 export default Services;
