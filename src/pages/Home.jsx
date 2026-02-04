import React from 'react'

function Home() {
  return (
    <>
      <div className="home-container">
        {/* SECTION 1 */}
        <section className="header relative z-0 h-screen flex items-center" id="home-area">
          <img src="../images/background-image.jpg" className="absolute w-full h-full object-cover z-3" />
          <div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0 z-4"></div>
          <div className="header-text px-8 sm:px-30 z-10 flex flex-col gap-6 mt-40">
            <h2 className="header-text text-white text-2xl md:text-5xl font-bold">
              Driving Innovation Through Creative Business Solutions
            </h2>
            <q className="md:text-2xl text-base text-white">
              We craft tailored strategies that align with your vision, turning challenges into opportunities and ideas into global impact.
            </q>
            <div className="wow fadeup" data-wow-delay="0.7s">
              <Link to="/contact">
                <button className="px-6 py-4 rounded-full font-medium transition-all duration-150 shadow-md hover:-translate-y-1 active:translate-y-1 cursor-pointer text-white text-2xl bg-red-500 hover:bg-red-600">
                  Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section2 my-10 sm:py-15" id="about-area">
          <div className="sec2-container sm:w-[80%] w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 justify-between items-center">
              {/* Text Block */}
              <motion.div
                // ref={cardcarousel}
                // variants={isLargeScreen ? cardcarouselVariants : {}}
                // initial={isLargeScreen ? "hidden" : ""}
                // whileInView={isLargeScreen ? "final" : ""}
                className="w-full md:w-[90%]"
              >
                <div className="flex flex-col gap-6 text-center sm:text-left">
                  <h2 className="title text-2xl sm:text-3xl font-bold">
                    Agile, Tailored & Impact-Driven Business Solutions
                  </h2>
                  <div className="text-base sm:text-xl text-justify">
                    <p>
                      At <b className="font-bold text-red-500">Discovery Circle Practitioners (DCP)</b>, we are a global network of seasoned consultants, thought leaders, and industry experts dedicated to delivering world-class, knowledge-driven services. With cross-sector expertise and a deep understanding of diverse industries, we offer agile, multi-disciplinary solutions designed to solve complex challenges and drive sustainable growth. In a strategic move to expand our capabilities and deepen our impact, <b className="font-bold">Discovery Circle Practitioners (DCP)</b> has acquired <b className="font-bold">Discovery Cycle Professionals Limited (DCP)</b>, further strengthening our legacy and consolidating our position as a leader in transformative consulting.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Carousel Block */}
              <div className="w-full flex justify-center lg:justify-end">
                <CardCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 - Mission/Vision */}
        <motion.section
        //   ref={ourMission}
        //   variants={ourMissionVariants}
          initial="hidden"
          whileInView="final"
          className="section-padding sm:px-30 px-6 my-10"
        >
          <div className="sec3-container mx-auto bg-gray-100/50 shadow-2xl sm:py-8 sm:p-12 p-6 backdrop-blur-md sm:rounded-3xl rounded-t-2xl sm:overflow-auto overflow-hidden">
            <div className="flex flex-col items-center sm:flex-row gap-10">
              <div className="w-full sm:w-1/2 flex justify-center">
                <div className="video-box w-full max-w-sm sm:max-w-full">
                  <img src="images/DCP skyscrapers.jpg" alt="DCP Skyscrapers" className="w-full h-auto rounded-md" />
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-5/12">
                <div className="relative mb-8 sm:mb-12 pl-4 sm:pl-6">
                  <div className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-full"></div>
                  <h4 className="text-lg font-bold text-red-500 mt-2">Our Mission</h4>
                  <h3 className="text-base sm:text-l text-justify font-semibold">
                    "Creating, innovating and investing in exceptional solutions for clients and providing great value-addition for all stakeholders".
                  </h3>
                </div>
                <div className="relative mt-8 sm:mt-12 pr-4 sm:pr-6 text-right">
                  <div className="absolute right-0 top-0 h-full w-1 bg-red-500 rounded-full"></div>
                  <h4 className="text-lg font-bold text-red-500 mt-2">Our Vision</h4>
                  <h3 className="text-base sm:text-l text-justify font-semibold">
                    "To be the biggest consulting company in Africa anchored on value creation, integrity and service excellence".
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 4 - CSR */}
        <section className="section-padding px-8 my-12 sm:px-30" id="csr">
          <div className="sec4-container mx-auto">
            <div className="w-full sm:w-2/3 md:w-1/2 mx-auto p-8">
              <div className="page-title text-center">
                <h2 className="sm:text-3xl text-2xl mb-3 sm:mb-8 font-bold text-red-500">Corporate Social Responsibility (CSR)</h2>
                <p className="sm:text-lg text-base">DCP has a strong commitment to CSR projects. Our current schemes are:</p>
              </div>
            </div>

            <div className="w-full text-center justify-items-center grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 relative">
              {/* Cards */}
              <div className={` animate__animated animate__fadeInUp`} data-wow-delay="0.4s">
                <div className="text-2xl"><i className="icofont-users-alt-1"></i></div>
                <h3 className="">DCP Leadership, Entrepreneurship & Advancement Program (DCP LEAP)</h3>
                <p className={` text-justify`}>DCP’s LEAP Program builds human capital by offering practical training in entrepreneurship, digital skills, and workplace readiness for students, graduates, corps members, and emerging leaders. Participants gain real-world experience to boost their careers and support national development.</p>
              </div>

              <div className={` animate__animated animate__fadeInUp`} data-wow-delay="0.6s">
                <div className="text-4xl"><i className="icofont-brainstorming"></i></div>
                <h3 className="">Pro-Bono Technical Asset Advisory Initiatives</h3>
                <p className={` text-justify`}>DCP’s pro bono Technical Asset Advisory Initiative enhances institutional efficiency by diagnosing operational risks, assessing infrastructure, and optimizing asset performance. It strengthens public service delivery, improves resource use, and supports sustainable development across sectors.</p>
              </div>

              <div className="sm:col-span-2 flex w-full sm:w-[50%] mx-auto">
                <div className={` animate__animated animate__fadeInUp`} data-wow-delay="0.8s">
                  <div className="text-4xl"><i className="icofont-settings-alt"></i></div>
                  <h3 className="">DCP Thinking & Learning Lab</h3>
                  <p className={` text-justify`}>The DCP Thinking & Learning Lab, our flagship CSR platform, connects emerging leaders to co-create solutions through structured volunteering that fosters creativity, problem-solving, and innovation. It drives public sector improvements, supports digital transformation, and nurtures leadership and professional growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - Clients */}
        <section className="mt-5 mb-7 w-full">
          <div className="w-full sm:w-2/3 mx-auto text-center">
            <h1 className="sm:text-3xl text-xl mb-3 sm:mb-8 font-bold text-red-500">Notable Clients/Partners</h1>
          </div>
          <ImageMarquee />
        </section>

        {/* SECTION 6 - Management */}
        <section className="management mt-20 mb-7 flex flex-col items-center">
          <h2 className="sm:text-3xl text-2xl font-bold mb-5">Management Team</h2>
          <div className="management-container py-5 flex sm:justify-around sm:flex-row flex-col items-center md:gap-16 gap-4 w-[90%] sm:w-[80%]">
            <div className="bg-gradient-to-tr from-red-500 via-pink-500 to-yellow-500 p-1 rounded-full">
              <div className="bg-white p-1 rounded-full">
                <div className="gp-container bg-white w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg">
                  <img src="../../images/management/gceo.jpg" className="object-cover w-full h-full block" alt="CEO's image" />
                </div>
              </div>
            </div>
            <div className="gp-description-group flex flex-col items-center sm:items-start gap-4 sm:w-[50%] w-full justify-center text-center sm:text-left">
              <div>
                <h3 className="text-2xl font-semibold">Dr. I.B Gashinbaki</h3>
                <p className="text-lg text-gray-600">Founder & Group Chief Executive Officer</p>
              </div>
              <div className="mt-4 w-full flex justify-center sm:justify-start">
                <Button text="View Management Team" link="/management" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 - Gallery */}
        <section className="mt-15 mb-15 w-full">
          <div className="w-full sm:w-2/3 mx-auto text-center">
            <h1 className="sm:text-3xl text-xl mb-3 sm:mb-8 font-bold">Gallery</h1>
          </div>
          <GalleryMarquee />
        </section>
      </div>
    </>
  )
}

export default Home