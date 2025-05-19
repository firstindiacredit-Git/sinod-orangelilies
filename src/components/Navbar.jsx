import React, { useState, useEffect } from 'react';
import logoImage from '../image/logo (2).png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 sm:top-6 w-full left-0 sm:left-1/2 transform sm:-translate-x-1/2 z-50 sm:w-[90%] max-w-7xl px-4 sm:px-0">
                <div className="bg-orange-400/90 backdrop-blur-md sm:rounded-full py-3 px-4 sm:px-8 flex items-center justify-between shadow-lg sm:border border-white/10">
                    {/* Logo on the left */}
                    <a href="#hero"><div className="flex items-center transition-all duration-500 hover:scale-105">
                        <img
                            src={logoImage}
                            alt="Orange Lilies"
                            style={{ height: "3rem" }}
                            className="filter drop-shadow-md"
                        />
                    </div>
                    </a>
                    {/* Navigation on the right - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">Features</span>
                        </a>
                        {/* <a href="#products" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">Products</span>
                        </a> */}
                        <a href="#how-to-use" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1">
                            <span className="text-white">How to Use</span>
                        </a>
                        <div className="relative group">
                            <a href="#pricing" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1 flex items-center">
                                <span className="text-white">Pricing</span>
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="#about" className="text-white hover:text-orange-200 transition-colors duration-300 relative px-2 py-1 flex items-center">
                                <span className="text-white">About Us</span>
                            </a>
                        </div>
                        <a href="#footer" className="bg-[#fff] hover:bg-orange-200 px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                            <span className="text-orange-500">Shop Now</span>
                        </a>
                    </nav>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-orange-400/95 backdrop-blur-md mt-1 py-4 px-4 shadow-lg rounded-b-xl animate-fadeIn">
                        <nav className="flex flex-col space-y-4">
                            <a
                                href="#about"
                                className="text-white hover:text-orange-200 transition-colors duration-300 px-2 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-white">About</span>
                            </a>
                            {/* <a
                                href="#products"
                                className="text-white hover:text-orange-200 transition-colors duration-300 px-2 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="text-white">Products</span>

                            </a> */}
                            <a
                                href="#why-choose"
                                className="text-white hover:text-orange-200 transition-colors duration-300 px-2 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-white">Why Choose Us</span>
                            </a>
                            <a
                                href="#faq"
                                className="text-white hover:text-orange-200 transition-colors duration-300 px-2 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-white">FAQs</span>
                            </a>
                            <a
                                href="#contact"
                                className="bg-white hover:bg-orange-200 px-5 py-2 rounded-full transition-all duration-300 text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-orange-500">Shop Now</span>
                            </a>
                        </nav>
                    </div>
                )}
            </header>
  );
};

export default Navbar; 