import React from 'react';
import CountUp from 'react-countup';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJquery, SiFirebase } from 'react-icons/si';
import Typewriter from 'typewriter-effect';

//===================== AboutSection part start 
const AboutSection = () => (
  <section className="about-section container mx-auto mt-5 px-4 sm:px-6 md:px-8 lg:px-16  p-8 rounded-lg shadow-lg">
    {/* Section Title */}
    <div className="relative text-center sm:text-left pt-28 flex justify-center items-center flex-wrap ">
      <h2 className="text-2xl font-bold text-blue-500">About Me</h2>
      <div className="absolute border-2 border-blue-500 w-24 sm:w-32 mx-auto sm:mx-0 pt-10"></div>
    </div>
    {/* About Details */}
    <div className="mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">
      {/* About Text */}
      <div>
        <p className=" text-blue-500 leading-relaxed text-center lg:text-left lg:p-10 max-w-full sm:max-w-xl lg:max-w-3xl">
         Hi I'm Jahidul Islam is a passionate Frontend Developer specializing in React. He has over two years of experience building responsive and dynamic web applications using modern tools like React, Redux, and Tailwind CSS. With a keen eye for design, Jahidul also excels in integrating UI/UX principles, leveraging Figma for prototyping. He is proficient in technologies like JavaScript, Bootstrap, and Firebase. Currently, he is enhancing his backend skills by learning Node.js. Jahidul is committed to delivering high-quality, user-centric solutions. He is available for freelance opportunities and thrives on continuous learning and growth.
          <Typewriter 
            options={{
              strings: ["continuous ", "learning", "and growth."],
              autoStart: true,
              loop: true,
              delay: 75,
            }} 
          />
        </p>
      </div>
      {/* Personal Details */}
      <div className="text-sm sm:text-base mt-10 lg:mt-0 lg:ml-10 text-blue-500">
        {[{
          label: 'Name', value: 'Jahidul Islam'
        }, {
          label: 'Nationality', value: 'Bangladesh'
        }, {
          label: 'Phone', value: '+8801540587085'
        }, {
          label: 'Email', value: 'jahidulislamwebbd@gmail.com'
        }, {
          label: 'Experience', value: '2+ years'
        }, {
          label: 'Freelance', value: 'Available'
        }, {
          label: 'Skype', value: 'jahidul.islam'
        }, {
          label: 'Language', value: 'Bangla, English'
        }].map((item, index) => (
          <div key={index} className="mb-2 flex space-x-2">
            <span className="font-bold">{item.label}:</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

//===================== EducationSection part start
const EducationSection = () => (
  <div className="education-section container px-4 sm:px-6 lg:px-16 bg-gradient-to-l  p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-blue-500 pt-10 text-center sm:text-left">Education</h2>
    <div className="divider mt-2 mb-4 text-blue-500 "></div>

    {[{
      year: 'Degree ongoing Student Bachelor of Social Science -2024',
      title: 'Brindhabon Govt College Habiganj',
      description: 'Jahidul Islam is a student at Habiganj Govt College, pursuing a Bachelors degree in Social Science with a focus on (Humanities). He began his studies in 2025.'
    }, {
      year: 'Higher Secondary Certificate. -2023',
      title: 'Kabir College Academy',
      description: 'Jahidul Islam completed his Higher Secondary Certificate (HSC) in (Humanities) at Habiganj Kabir College Academy in 2023.'
    }, {
      year: 'Secondary School Certificate -2021',
      title: 'Hazrat Shahjala High School Baniachong , Habiganj',
      description: 'Jahidul Islam completed his Secondary School Certificate (SSC) in (Commerce) at Hazrat Shahjala (Ra.) High School, Baniachong, Habiganj, in 2021.'
    }].map((edu, index) => (
      <div key={index} className="education-item mt-12">
        <div className="year bg-slate-700 py-2 px-4 text-blue-500">{edu.year}</div>
        <h3 className="title font-bold text-lg mt-2">{edu.title}</h3>
        <p className="description text-sm mt-2 text-blue-500">{edu.description}</p>
      </div>
    ))}
  </div>
);

//===================== ExperienceSection part start
const ExperienceSection = () => (
  <div className="experience-section container mt-[20px] px-4 sm:px-6 lg:px-16 bg-gradient-to-r  text-blue-500 p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-blue-500 text-center sm:text-left">Experience</h2>
    <div className="divider bg-[#e2ecf6] mt-2 mb-4"></div>

    {[{
      period: 'Creative It Institute Uttara Dhaka Bangladesh -2024',
      title: 'Frontend Developer with React',
      description: 'As a Frontend Developer specializing in React, Jahidul Islam has experience with various web technologies including React, Redux, Tailwind CSS, Bootstrap, and Firebase.'
    }, {
      period: 'Creative It Institute Uttara Dhaka Bangladesh -2024',
      title: 'Node.Js',
      description: 'Jahidul Islam is currently learning Node.js at Creative IT Institute.'
    }].map((exp, index) => (
      <div key={index} className="experience-item mt-12">
        <div className="period bg-slate-700 py-2 px-4 text-blue-500">{exp.period}</div>
        <h3 className="title font-bold text-lg mt-2 text-blue-500">{exp.title}</h3>
        <p className="description text-sm mt-2 text-blue-500">{exp.description}</p>
      </div>
    ))}
  </div>
);

//====================== SkillSection part start
const SkillSection = () => (
  <div className="skill-section container mt-16 px-4 sm:px-6 lg:px-16  p-8 rounded-lg shadow-lg">
    <div className="flex justify-center items-center relative mb-4">
      <h2 className="relative text-2xl font-bold text-blue-500 text-center sm:text-left">Coding Skills</h2>
      <h3 className="absolute border-2 border-blue-500 w-[150px] sm:w-[200px] pt-10"></h3>
    </div>
    <div className="divider mt-[100px] mb-8"></div>

    <div className="skills grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-[40px] sm:mt-16">
      {[{
        name: 'HTML5', proficiency: 100, icon: <FaHtml5 size={40} className="text-[#E34F26]" />
      }, {
        name: 'CSS3', proficiency: 100, icon: <FaCss3Alt size={40} className="text-[#1572B6]" />
      }, {
        name: 'JavaScript', proficiency: 100, icon: <FaJs size={40} className="text-[#F7DF1E]" />
      }, {
        name: 'jQuery', proficiency: 95, icon: <SiJquery size={40} className="text-[#0769AD]" />
      }, {
        name: 'Bootstrap', proficiency: 90, icon: <FaBootstrap size={40} className="text-[#563D7C]" />
      }, {
        name: 'Figma', proficiency: 100, icon: <FaFigma size={40} className="text-[#F24E1E]" />
      }, {
        name: 'Tailwind CSS', proficiency: 75, icon: <SiTailwindcss size={40} className="text-[#38BDF8]" />
      }, {
        name: 'React Redux', proficiency: 90, icon: <FaReact size={40} className="text-[#61DAFB]" />
      }, {
        name: 'React Router DOM', proficiency: 80, icon: <FaReact size={40} className="text-[#61DAFB]" />
      }, {
        name: 'Git & GitHub', proficiency: 100, icon: <FaGitAlt size={40} className="text-[#F1502F]" />
      }, {
        name: 'Slick Slider', proficiency: 90, icon: <SiFirebase size={40} className="text-[#FFCB2B]" />
      }, {
        name: 'Firebase', proficiency: 80, icon: <SiFirebase size={40} className="text-[#FFCB2B]" />
      }, {
        name: 'Java', proficiency: 95, icon: <FaJs size={40} className="text-[#F7DF1E]" />
      }].map((skill, index) => (
        <div key={index} className="skill-item text-center transform transition duration-300 hover:scale-110">
          {/* Proficiency Circle with CountUp */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-[#FF204E] flex justify-center items-center overflow-hidden transform transition-all duration-500 hover:bg-[#FF204E] hover:text-white">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-30"></div>
            {/* Proficiency Percentage */}
            <CountUp end={skill.proficiency} suffix="%" duration={2} className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF204E] z-10" />
          </div>

          {/* Icon Inside Circle with Hover Effects */}
          <div className="icon absolute inset-0 flex justify-center items-center transform transition-all duration-500">
            <div className=" p-4 rounded-full border-4 border-[#FF204E] flex justify-center items-center transform transition-all duration-300 hover:bg-[#FF204E] hover:text-white hover:scale-110">
              {skill.icon}
            </div>
          </div>

          {/* Skill Name */}
          <p className="skill-name mt-2 text-sm sm:text-base text-blue-500">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const MainComponent = () => (
  <div className="main-container">
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <SkillSection />
  </div>
);

export default MainComponent;
