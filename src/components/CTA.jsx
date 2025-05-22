import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-95"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Celebrate womanhood with <span className="text-orange-100">Orange Lilies</span>
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 max-w-3xl mx-auto text-orange-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empowering every phase of your cycle with comfort, confidence, and care. Orange Lilies Disposable Panties are your perfect partner in redefining period wellness.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="#pricing" 
            className="px-8 py-3 bg-white text-orange-500 rounded-full hover:bg-orange-50 transition duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.a>
          <motion.a 
            href="#features" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition duration-300 flex items-center justify-center font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="mt-12 p-4 bg-white/10 backdrop-blur-sm rounded-lg inline-block border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white font-medium">
            Use Code: <span className="font-bold text-orange-100">FIRST15</span> for 15% off your first purchase
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 