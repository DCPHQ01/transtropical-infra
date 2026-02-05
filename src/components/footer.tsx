import React from 'react';
import { FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-green-800 text-white lg:px-14 px-4 py-10">
            <div className="w-full mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        {/* <h3 className="font-bold text-lg mb-4">About</h3> */}
                        <img src="/images/logo.png" alt="Transtropical Infrastructures Logo" className="w-32 mb-4" />
                        <p className="text-white text-sm">Delivering global standard solutions across multiple sectors with technical excellence and sustainable development.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="text-white text-sm space-y-2">
                            <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-green-400">Our Services</Link></li>
                            <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Services</h3>
                        <ul className="text-white text-sm space-y-2">
                            <li><Link to="/infrastructure-development" className="hover:text-green-400 ">Infrastructure Development</Link></li>
                            <li><Link to="/engineering-systems" className="hover:text-green-400 ">Engineering Systems</Link></li>
                            <li><Link to="/real-estate" className="hover:text-green-400 ">Real Estate</Link></li>
                            <li><Link to="/asset-management" className="hover:text-green-400 ">Asset Management</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <div className="flex items-start space-x-3">
                            <FaLocationDot className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                            <a href="https://www.google.com/maps/place/2542+Hassan+Usman+Katsina+St,+Asokoro,+Abuja+900231,+Federal+Capital+Territory/@9.0193169,7.5159406,17z/data=!3m1!4b1!4m6!3m5!1s0x104e0c06a5c67e55:0xb2738839ad81d8d2!8m2!3d9.0193169!4d7.5185155!16s%2Fg%2F11kc3087w0?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"  target="_blank" rel="noopener noreferrer">
                                <span className="text-white text-sm hover:text-green-400 transition-colors duration-200">Plot 2542 Hassan Usman Katsina Street, Asokoro, Abuja</span>
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaPhoneAlt className="h-4 w-4 text-green-500 shrink-0" />
                            <a href="tel:+2349021161150">
                                <span className="text-white text-sm hover:text-green-400 transition-colors duration-200">+234 (0) 902 116 1150</span>
                            </a>
                        </div>                        
                        <div className="flex items-center space-x-3">
                            <IoMdMail className="h-4 w-4 text-green-500 shrink-0" />
                            <a href="mailto:transtropicalltd@gmail.com">
                                <span className="text-white text-sm hover:text-green-400 transition-colors duration-200">transtropicalltd@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white pt-8 text-center text-white text-sm flex flex-col md:flex-row items-center justify-between">
                    <p>&copy; {currentYear} Transtropical Infrastructures Ltd. All rights reserved.</p>
                    <div className="flex space-x-5">
                        <div className="h-7 w-7 flex justify-center items-center">
                        <a 
                            href="https://www.facebook.com/abisgroup.africa" 
                            className="text-primary hover:text-green-400 transition-colors duration-200"
                            aria-label="Facebook"
                            target="_blank" 
                        >
                            <FaFacebookF className="h-5 w-5" />
                        </a>
                        </div>
                        <div className="h-7 w-7 flex justify-center items-center">
                        <a 
                            href="#" 
                            className="text-primary hover:text-green-400 transition-colors duration-200"
                            aria-label="Twitter"
                            target="_blank"
                        >
                            <FaXTwitter className="h-5 w-5" />
                        </a>
                        </div>
                        <div className="h-7 w-7 flex justify-center items-center">
                        <a 
                            href="#" 
                            className="text-primary hover:text-green-400 transition-colors duration-200"
                            aria-label="Instagram"
                            target="_blank"
                        >
                            <FaInstagram  className="h-5 w-5" />
                        </a>
                        </div>  
                        <div className="h-7 w-7 flex justify-center items-center">
                        <a 
                            href="https://www.linkedin.com/company/abisgroupafrica/" 
                            className="text-primary hover:text-green-400 transition-colors duration-200"
                            aria-label="LinkedIn"
                            target="_blank"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;