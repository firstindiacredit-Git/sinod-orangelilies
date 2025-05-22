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
    <header className={`fixed top-0 w-full left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'sm:top-4' : 'sm:top-6'
    }`}>
      <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className={`bg-gradient-to-r from-orange-500/95 to-orange-400/95 backdrop-blur-md rounded-lg sm:rounded-full py-2 sm:py-3 px-3 sm:px-6 md:px-8 flex items-center justify-between shadow-lg sm:border border-white/10 ${
          isScrolled ? 'shadow-xl' : 'shadow-lg'
        }`}>
          {/* Logo */}
          <a href="#hero" className="flex items-center transition-all duration-500 hover:scale-105">
            <img
              src={logoImage}
              alt="Orange Lilies"
              className="h-8 sm:h-10 md:h-12 filter drop-shadow-md"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#features" className="text-white hover:text-orange-100 transition-colors duration-300 relative px-2 py-1 text-sm lg:text-base group">
              <span>Features</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#how-to-use" className="text-white hover:text-orange-100 transition-colors duration-300 relative px-2 py-1 text-sm lg:text-base group">
              <span>How to Use</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="text-white hover:text-orange-100 transition-colors duration-300 relative px-2 py-1 text-sm lg:text-base group">
              <span>Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-white hover:text-orange-100 transition-colors duration-300 relative px-2 py-1 text-sm lg:text-base group">
              <span>About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#footer" className="bg-white hover:bg-orange-50 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm lg:text-base whitespace-nowrap font-medium shadow-md hover:shadow-lg">
              <span className="text-orange-500">Shop Now</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-orange-500/95 to-orange-400/95 backdrop-blur-md mt-1 py-3 px-4 shadow-lg rounded-b-xl animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-white hover:text-orange-100 transition-colors duration-300 px-2 py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-to-use"
                className="text-white hover:text-orange-100 transition-colors duration-300 px-2 py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Use
              </a>
              <a
                href="#pricing"
                className="text-white hover:text-orange-100 transition-colors duration-300 px-2 py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-white hover:text-orange-100 transition-colors duration-300 px-2 py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-orange-50 px-4 py-2 rounded-full transition-all duration-300 text-center text-sm whitespace-nowrap font-medium shadow-md hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-orange-500">Shop Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 