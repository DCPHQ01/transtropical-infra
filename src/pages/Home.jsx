import React from 'react'
import { FiAward, FiGlobe } from "react-icons/fi";
import { IoFlashOutline } from "react-icons/io5";
import { FaHelmetSafety } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { Link } from 'react-router-dom';

function Home() {

  const about = [
    {
      id: 1,
      icon: <FiAward className="h-8 w-8 text-green-700" />,
      title: 'INTEGRITY',
      description: `Upholding honesty & transparency in all our operations.`,
    },
    {
      id: 2,
      icon: <IoFlashOutline className="h-8 w-8 text-green-700" />,
      title: 'EXCELLENCE',
      description: `Striving for superior performance & service quality.`,
    },
    {
      id: 3,
      icon: <FiGlobe className="h-8 w-8 text-green-700" />,
      title: 'INNOVATION',
      description: `Integrating new technology & methodologies.`,
    },
    {
      id: 4,
      icon: <FaHelmetSafety className="h-8 w-8 text-green-700" />,
      title: 'SAFETY',
      description: `World-class safety standards in all activities.`,
    },
  ];

  return (
    <>
      <div className="home-container">
        {/* SECTION 1 */}
        <section
          className="relative h-[120vh] w-full bg-cover bg-center flex justify-center"
          style={{
            backgroundImage: "url('../images/background-image.jpg')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content wrapper */}
          <div className="relative z-10 w-full mx-auto lg:px-20 px-4 flex items-center">

            {/* HERO TEXT */}
            <div className="max-w-3xl">
              {/* Tag line */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-28 h-1 bg-green-700"></span>
                <p className="text-green-700 tracking-widest text-md font-bold">
                  ENGINEERING EXCELLENCE
                </p>
              </div>

              {/* Main heading */}
              <h2 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Building Africa’s <br /> Future <br /> Infrastructure
              </h2>

              {/* Description */}
              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                We integrate modern engineering technologies with global best
                practices to birth resilient infrastructures that support national
                development and economic growth.
              </p>

              {/* Hero Buttons */}
              <div className="mx-auto mt-10 flex gap-4">
                <Link to="/services" className="bg-green-700 hover:bg-green-800 text-white border cursor-pointer border-white font-bold py-7 px-8 transition duration-300">
                  EXPLORE OUR SERVICES
                </Link>
                <Link to="/projects" className="bg-transparent/50 hover:bg-white hover:text-black text-white font-bold py-7 px-8 transition duration-300 border border-white">
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-20">
          {about.map(item => (
            <div
              key={item.id}
              className="group border border-gray-300 shadow-lg bg-white
                        p-8 flex flex-col justify-center
                        hover:bg-gray-100 transition"
            >
              {item.icon && <div className="mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition duration-700">{item.icon}</div>}

              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* SECTION 3 */}
        <section className="bg-green-50 py-16 lg:px-20 px-4">
          <div className="max-w-3xl">
            {/* Tag line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-0.5 bg-green-700"></span>
              <p className="text-green-700 tracking-widest text-md font-bold">
                WHO WE ARE
              </p>
            </div>

            <h2 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-green-700">Pioneering Innovative</span> Infrastructure Solutions
            </h2>

            <p className="text-gray-700 mt-6 text-lg leading-relaxed">
              Transtropical Infrastructures Ltd is a premier Nigerian infrastructure development, engineering, and real estate services company.
            </p>

            <p className="text-gray-500 mt-6 text-lg leading-relaxed">
              We are equipped to handle projects in roads, buildings, energy, housing, and transportation systems. Our mission is to provide world-class engineering, construction, and real estate solutions through advanced technologies and superior expertise.
            </p>

            {/* Hero Buttons */}
            <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className='space-y-4'>
                <p className="flex items-center gap-4 border-b border-gray-300 pb-2">
                  <SiTicktick className="text-green-700" />
                  ISO Compliant Standards
                </p>
                <p className="flex items-center gap-4 border-b border-gray-300 pb-2">
                  <SiTicktick className="text-green-700" />
                  Multidisciplinary Expert Team
                </p>
              </div>
              <div className='space-y-4'>
                <p className="flex items-center gap-4 border-b border-gray-300 pb-2">
                  <SiTicktick className="text-green-700" />
                  Zero-Incident Safety Policy
                </p>
                <p className="flex items-center gap-4 border-b border-gray-300 pb-2">
                  <SiTicktick className="text-green-700" />
                  Sustainable Development
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <img src="../images/home-section3-image.png" alt="Infrastructure Illustration" className="w-64 h-auto animate-bounce" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home