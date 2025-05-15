import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
          Celebrate womanhood with Orange Lilies
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Empowering every phase of your cycle with comfort, confidence, and care. Orange Lilies Disposable Panties are your perfect partner in redefining period wellness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pricing" 
            className="px-8 py-3 bg-white text-orange-500 rounded-full hover:bg-orange-50 transition duration-300 font-medium text-lg"
          >
            Shop Now
          </a>
          <a 
            href="#features" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-orange-600 transition duration-300 flex items-center justify-center font-medium text-lg"
          >
            Learn More
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
        
        <div className="mt-12 p-4 bg-orange-600 rounded-lg inline-block">
          <p className="text-white font-medium">
            Use Code: <span className="font-bold">FIRST15</span> for 15% off your first purchase
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA; 