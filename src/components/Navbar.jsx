import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === '/');
  const [isNotTop, setIsNotTop] = useState(false);

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsNotTop(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <motion.nav
        key="navbar"
        animate={{ paddingTop: isNotTop || !isHome ? "0.5rem" : "1.25rem" }}
        transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
        className={`navbar w-full ${
          isHome ? "fixed" : "sticky"
        } top-0 right-0 left-0 transition-all duration-300 z-30  ${
          isHome && isNotTop
            ? "text-black shadow-md backdrop-blur-lg bg-white/30"
            : !isHome
            ? "text-black shadow-md backdrop-blur-lg bg-white/30"
            : "text-white"
        }`}
        data-spy="affix"
        data-offset-top="197"
      >
        <div className="flex justify-between items-center gap-6 lg:px-30 px-4 py-2">
          <div className="brand">
            <NavLink className="brand-link" to="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-base lg:text-md gap-10">
            <li className="active">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-5 border-green-800"
                    : "hover:border-b-2 pb-5 hover:border-green-600"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-5 border-green-800"
                    : "hover:border-b-2 pb-5 hover:border-green-600"
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-5 border-green-800"
                    : "hover:border-b-2 pb-5 hover:border-green-600"
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-5 border-green-800"
                    : "hover:border-b-2 pb-5 hover:border-green-600"
                }
              >
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-5 border-green-800"
                    : "hover:border-b-2 pb-5 hover:border-green-600"
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 text-red-600 w-full">
            <ul className="flex flex-col text-base p-4">
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                <li className="py-2 border-b">HOME</li>
              </NavLink>
              <NavLink to="/services" onClick={() => setIsOpen(false)}>
                <li className="py-2 border-b">SERVICES</li>
              </NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>
                <li className="py-2 border-b">ABOUT</li>
              </NavLink>
              <NavLink to="/projects" onClick={() => setIsOpen(false)}>
                <li className="py-2 border-b">PROJECTS</li>
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <li className="py-2">CONTACT</li>
              </NavLink>
            </ul>
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;