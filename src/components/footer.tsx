import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-green-900 text-white py-8">
            <div className="w-full mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">About</h3>
                        <p className="text-gray-400 text-sm">Delivering global standard solutions across multiple sectors with technical excellence and sustainable development.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Our Services</a></li>
                            <li><a href="#" className="hover:text-white">Projects</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white">GitHub</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Services</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><a href="#" className="hover:text-white">Infrastructure Development</a></li>
                            <li><a href="#" className="hover:text-white">Engineering Systems</a></li>
                            <li><a href="#" className="hover:text-white">Real Estate</a></li>
                            <li><a href="#" className="hover:text-white">Asset Management</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {currentYear} Transtropical Infrastructures. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;