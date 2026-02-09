import React, {useState} from 'react';
import { FiAward, FiGlobe } from "react-icons/fi";
import { FaArrowRight, FaRegChartBar } from "react-icons/fa";
import { CiRuler } from "react-icons/ci";
import { IoFlashOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FaHelmetSafety, FaLocationDot } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
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

  const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
      <div className="border-b border-gray-300">
        <button
          onClick={onClick}
          className="w-full text-left py-5 flex justify-between items-center focus:outline-none"
        >
          <span className="font-medium text-green-700 text-lg">{title}</span>
          <span className='text-green-700'>{isOpen ? "−" : "+"}</span>
        </button>
        {isOpen && (
          <div className="py-2 text-gray-500 bg-gray-50 transition-all">
            {content}
          </div>
        )}
      </div>
    );
  };

  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    { title: "Property Development", content: "Developing sustainable commercial, residential, and industrial estates that meet modern standards. We focus on eco-friendly designs and smart infrastructure integration." },
    { title: "Brokage & Advisory", content: "Expert real estate representation and investment advisory to maximize returns for our clients. Our market analysis ensures you make data-driven decisions." },
    { title: "Materials Trading", content: "Supply and distribution of high-quality building materials and equipment for construction projects. We source from global partners to ensure durability." },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <div className="relative z-10 w-full mx-auto lg:px-14 px-4 flex items-center">

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
        <section className="lg:px-14 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-20">
          {about.map(item => (
            <div
              key={item.id}
              className="group border border-gray-100 shadow-lg bg-white
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
        <section className="bg-green-50 py-16 lg:px-14 px-4 flex flex-col lg:flex-row items-center gap-12">
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
          <div className="relative flex justify-center items-end pb-8" style={{backgroundImage:"url('../images/section-3.png')", backgroundSize:"cover", backgroundPosition:"center", height:"550px", width:"100%"}}>
            <div className="backdrop-blur-lg bg-black/70 w-[90%] h-35 border-l-5 border-green-700 flex flex-col justify-center p-6">
              <p className="text-white font-semibold text-2xl">Our Vision</p>
              <p className="text-white mt-4 font-light">Becoming Africa's leading infrastructure and engineering development powerhouse.</p>
            </div>
          </div>
        </section>
        
        {/* SECTION 4 */}
        <section className="relative py-28 lg:px-14 px-4" style={{backgroundImage:"url('../images/section4-bg.png')", backgroundSize:"cover", backgroundPosition:"center",  width:"100%" }}>
          <div className="absolute inset-0 bg-green-800/90 z-0"></div>
          <div className="relative w-full z-10">
            <div className="flex justify-between items-center mb-16">
              <div className='space-y-4'>
                <p className="text-green-600 text-md font-semibold">
                  WHAT WE DO
                </p>

                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Full-Spectrum Delivery
                </h2>
              </div>
              <div className='w-md'>
                <p className="text-white mt-6">
                  We provide strategic and technical capabilities from concept to completion across four core pillars.
                </p>
              </div>     
            </div>  

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2">
              <div className="group relative border border-gray-400 p-12 shadow-md backdrop-blur-lg hover:backdrop-blur-none hover:shadow-lg hover:bg-transparent transition duration-300">
                <div className="w-16 h-16 bg-green-600 flex items-center justify-center mb-4">
                  <CiRuler className="text-white text-5xl" />
                </div>

                <div
                  className="absolute top-5 right-10 flex items-center justify-center opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-900 ease-out"
                >
                  <CiRuler className="text-white/20" style={{width: 200, height: 200}} />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">Infrastructure Development</h3>
                <p className=" text-gray-300">From project conceptualization and feasibility to detailed engineering design and advisory. We handle roads, buildings, energy, and transportation systems.</p>
                <ul className="list-disc list-inside mt-4 text-gray-300 marker:text-green-600 text-sm space-y-2">
                  <li>SURVEYS & ASSESSMENTS</li>
                  <li>CONSTRUCTION & INSTALLATION</li>
                  <li>ADVISORY & TRAINING</li>
                </ul>
                <Link to="/services" className="mt-4 flex items-center text-green-600 font-bold hover:transform hover:translate-x-1 transition duration-300">
                  LEARN MORE
                  <FaArrowRight className="inline-block ml-2" size={15} />
                </Link>
              </div>
              <div className="group relative border border-gray-400 p-12 shadow-md backdrop-blur-lg hover:backdrop-blur-none hover:shadow-lg hover:bg-transparent transition duration-300">
                <div className="w-16 h-16 bg-green-600 flex items-center justify-center mb-4">
                  <FaHelmetSafety className="text-white text-5xl" />
                </div>
                <div
                  className="absolute top-5 right-10 flex items-center justify-center opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-900 ease-out"
                >
                  <FaHelmetSafety className="text-white/20" style={{width: 200, height: 200}} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Engineering Systems</h3>
                <p className="text-gray-300">Extensive array of engineering services covering mechanical, civil, electrical, and industrial systems. Fabrication facilities guarantee precision.</p>
                 <ul className="list-disc list-inside mt-4 text-gray-300 marker:text-green-600 text-sm space-y-2">
                  <li>SYSTEM DESIGN</li>
                  <li>MAINTENANCE & OVERHAUL</li>
                  <li>FABRICATION & MANUFACTURING</li>
                </ul>
                <Link to="/services" className="mt-4 flex items-center text-green-600 font-bold hover:transform hover:translate-x-1 transition duration-300">
                  LEARN MORE
                  <FaArrowRight className="inline-block ml-2" size={15} />
                </Link>
              </div>
              <div className="group relative border border-gray-400 p-12 shadow-md backdrop-blur-lg hover:backdrop-blur-none hover:shadow-lg hover:bg-transparent transition duration-300">
                <div className="w-16 h-16 bg-green-600 flex items-center justify-center mb-4">
                  <HiOutlineBuildingOffice2 className="text-white text-5xl" />
                </div>
                <div
                  className="absolute top-5 right-10 flex items-center justify-center opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-900 ease-out"
                >
                  <HiOutlineBuildingOffice2 className="text-white/20" style={{width: 200, height: 200}} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Real Estate</h3>
                <p className="text-gray-300">Comprehensive engagement in real estate including acquisition, sales, brokerage, and property development (commercial, residential, industrial).</p>
                 <ul className="list-disc list-inside mt-4 text-gray-300 marker:text-green-600 text-sm space-y-2">
                  <li>ACQUISITION & SALES</li>
                  <li>BROKERAGE & ADVISORY</li>
                  <li>PROPERTY DEVELOPMENT</li>
                </ul>
                <Link to="/services" className="mt-4 flex items-center text-green-600 font-bold hover:transform hover:translate-x-1 transition duration-300">
                  LEARN MORE
                  <FaArrowRight className="inline-block ml-2" size={15} />
                </Link>
              </div>
              <div className="group relative border border-gray-400 p-12 shadow-md backdrop-blur-lg hover:backdrop-blur-none hover:shadow-lg hover:bg-transparent transition duration-300">
                <div className="w-16 h-16 bg-green-600 flex items-center justify-center mb-4">
                  <FaRegChartBar className="text-white text-5xl" />
                </div>
                <div
                  className="absolute top-5 right-10 flex items-center justify-center opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-900 ease-out"
                >
                  <FaRegChartBar className="text-white/20" style={{width: 200, height: 200}} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">IMS Solutions</h3>
                <p className="text-gray-300">Infrastructure Management Systems for long-term maintenance. Asset monitoring, performance evaluation, and predictive maintenance dashboards.</p>
                 <ul className="list-disc list-inside mt-4 text-gray-300 marker:text-green-600 text-sm space-y-2">
                  <li>ASSET MONITORING</li>
                  <li>PERFORMANCE EVALUATION</li>
                  <li>DIGITAL TOOLS</li>
                </ul>
                <Link to="/services" className="mt-4 flex items-center text-green-600 font-bold hover:transform hover:translate-x-1 transition duration-300">
                  LEARN MORE
                  <FaArrowRight className="inline-block ml-2" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className=" text-white py-28 lg:px-14 px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className='relative group'>
            <img src="../images/section-5.jpg" alt="Section 5 Image" className="w-full h-auto object-cover shadow-lg grayscale transition-all duration-500 group-hover:grayscale-0" />
            <div className="absolute -right-6 -bottom-6 bg-green-700 p-8 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">25+</p>
            </div>
          </div>
          <div>
            <div className="max-w-3xl">
              {/* Tag line */}
              <p className="text-green-700 tracking-widest text-md font-bold mb-5">
                PROPERTY DEVELOPMENT
              </p>

              <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-green-700">Creating Value Through</span> <br/> <span className='text-gray-500'>Strategic Real Estate</span>
              </h2>

              <p className="text-gray-500 mt-10 text-lg">
                We don't just build; we develop communities. Our real estate division handles everything from land acquisition to the development of commercial, residential, and industrial estates.
              </p>

              {/* Accordion Buttons */}
              <div className="mx-auto mt-10">
                <div className="mx-auto mt-10">
                  {data.map((item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                      isOpen={openIndex === index}
                      onClick={() => handleClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="bg-green-50 py-16 px-4 lg:px-14">
          <div className="mx-auto flex flex-col items-center">

            {/* Section Title */}
            <div className="flex flex-col items-center gap-3 mb-20">
              <p className="text-green-700 text-md md:text-2xl lg:text-3xl font-bold">
                Why Choose Transtropical
              </p>
              <span className="w-24 h-1 bg-green-700"></span>
            </div>

            {/* Feature Grid */}
            <div className="flex flex-row justify-between items-center gap-8 flex-wrap w-full">

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white rounded-full p-5 border border-gray-200 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-130">
                  <AiOutlineTeam className="text-green-700 text-2xl md:text-3xl" />
                </div>
                <p className="text-green-700 font-medium text-center">
                  Multidisciplinary Team
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white rounded-full p-5 border border-gray-200 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-130">
                  <IoFlashOutline className="text-green-700 text-2xl md:text-3xl" />
                </div>
                <p className="text-green-700 font-medium text-center">
                  Cutting-Edge Technology
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white rounded-full p-5 border border-gray-200 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-130">
                  <FiGlobe className="text-green-700 text-2xl md:text-3xl" />
                </div>
                <p className="text-green-700 font-medium text-center">
                  Global Partnerships
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white rounded-full p-5 border border-gray-200 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-130">
                  <FaLocationDot className="text-green-700 text-2xl md:text-3xl" />
                </div>
                <p className="text-green-700 font-medium text-center">
                  Local Expertise
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="py-28 lg:px-14 px-4 flex items-center justify-center gap-12">
          <div className='relative'>
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold mb-10 w-2xl text-center">
              Ready to build the <span className="text-green-700">future</span> with us?
            </p>
            <p className="text-lg text-gray-500 mb-10 text-center">
              Contact our team to discuss your infrastructure, engineering, or real estate needs.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white font-bold py-5 px-8 transition duration-300"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home