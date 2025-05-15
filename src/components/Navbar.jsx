import React, { useState, useEffect } from 'react';
import logoImage from '../image/logo.png';

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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Orange Lilies Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#features" className="nav-link text-sm lg:text-base">Features</a>
            <a href="#how-to-use" className="nav-link text-sm lg:text-base">How to Use</a>
            <a href="#pricing" className="nav-link text-sm lg:text-base">Pricing</a>
            <a href="#about" className="nav-link text-sm lg:text-base">About Us</a>
            <a 
              href="#buy-now" 
              className="px-4 lg:px-5 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300 text-sm lg:text-base"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-orange-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 mt-2 space-y-3 flex flex-col bg-white shadow-lg rounded-lg">
            <a href="#features" className="block py-2 px-4 hover:bg-orange-50 rounded text-sm">Features</a>
            <a href="#how-to-use" className="block py-2 px-4 hover:bg-orange-50 rounded text-sm">How to Use</a>
            <a href="#pricing" className="block py-2 px-4 hover:bg-orange-50 rounded text-sm">Pricing</a>
            <a href="#about" className="block py-2 px-4 hover:bg-orange-50 rounded text-sm">About Us</a>
            <a 
              href="#buy-now" 
              className="block mx-4 px-5 py-2 bg-orange-500 text-white text-center rounded-full hover:bg-orange-600 transition duration-300 text-sm"
            >
              Buy Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 