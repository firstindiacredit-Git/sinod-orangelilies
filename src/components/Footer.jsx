import React from 'react';
import { Instagram, Facebook, Mail, Phone, Linkedin, Youtube, MapPin } from 'lucide-react';
import logoImage from '../image/logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-6">
              <img 
                src={logoImage} 
                alt="Orange Lilies Logo" 
                className="h-12 sm:h-14 w-auto"
              />
            </div>
            <p className="text-neutral-300 mb-6 text-sm sm:text-base">
              Period care redefined with comfort, hygiene, and freedom. Say goodbye to leaks, discomfort, and bulky products.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="https://www.instagram.com/orangelilies_/" target='blank' className="bg-neutral-800 p-2 rounded-full hover:bg-orange-500 transition duration-300">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.facebook.com/orangeliliesbrand/" target='blank' className="bg-neutral-800 p-2 rounded-full hover:bg-orange-500 transition duration-300">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://x.com/orangelilies" target='blank' className="bg-neutral-800 p-2 rounded-full hover:bg-orange-500 transition duration-300">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-[18px] h-[18px] sm:w-5 sm:h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/orangelilies" target='blank' className="bg-neutral-800 p-2 rounded-full hover:bg-orange-500 transition duration-300">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.youtube.com/@orangelilies" target='blank' className="bg-neutral-800 p-2 rounded-full hover:bg-orange-500 transition duration-300">
                <Youtube size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#features" className="text-neutral-300 hover:text-orange-400 transition duration-300 text-sm sm:text-base">Features</a></li>
              <li><a href="#how-to-use" className="text-neutral-300 hover:text-orange-400 transition duration-300 text-sm sm:text-base">How to Use</a></li>
              <li><a href="#pricing" className="text-neutral-300 hover:text-orange-400 transition duration-300 text-sm sm:text-base">Pricing</a></li>
              <li><a href="#about" className="text-neutral-300 hover:text-orange-400 transition duration-300 text-sm sm:text-base">About Us</a></li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <Mail size={18} className="text-orange-400 mr-3 mt-1 sm:w-5 sm:h-5" />
                <span className="text-neutral-300 text-sm sm:text-base">info@orangelilies.com</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Phone size={18} className="text-orange-400 mr-3 mt-1 sm:w-5 sm:h-5" />
                <span className="text-neutral-300 text-sm sm:text-base">+91 98765 43210</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin size={32} className="text-orange-400 mr-3 mt-1 sm:w-8 sm:h-8" />
                <span className="text-neutral-300 text-sm sm:text-base">E-44 Ground Floor Okhla Industrial Area Phase II New Delhi - 110020</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Newsletter</h3>
            <p className="text-neutral-300 mb-4 text-sm sm:text-base">
              Subscribe to get updates on new products and special offers.
            </p>
            <form className="space-y-3 max-w-sm mx-auto sm:mx-0">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-orange-400 text-sm sm:text-base"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Orange Lilies™. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs sm:text-sm mt-2">
            Proudly made in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 