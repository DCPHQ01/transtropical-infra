import React from 'react'

function Home() {
  return (
    <>
      <div className="home-container">
        {/* SECTION 1 */}
        <section
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('../images/background-image.jpg')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content wrapper */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex">

            {/* HERO TEXT */}
            <div className="mt-24 max-w-3xl">
              {/* Tag line */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2 px] bg-green-500"></span>
                <p className="text-green-500 tracking-widest text-sm">
                  ENGINEERING EXCELLENCE
                </p>
              </div>

              {/* Main heading */}
              <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building Africa’s <br /> Future Infrastructure
              </h2>

              {/* Description */}
              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                We integrate modern engineering technologies with global best
                practices to birth resilient infrastructures that support national
                development and economic growth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home