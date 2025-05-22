import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../image/herose.png';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-start"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent"
            >
              Period Care <motion.span 
                className="text-orange-500 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >Redefined</motion.span>
            </motion.h1>
            <motion.p 
              variants={textVariants}
              className="text-lg md:text-xl mb-6 text-neutral-700"
            >
              Orange Lilies Disposable Panties – the ultimate blend of comfort, hygiene, and freedom. Say goodbye to leaks, discomfort, and bulky products.
            </motion.p>
            <motion.p 
              variants={textVariants}
              className="text-neutral-600 mb-8"
            >
              Designed for young girls, working women, travelers, and athletes – Orange Lilies make period days worry-free, anywhere, anytime.
            </motion.p>
            <motion.div 
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.a 
                href="#pricing" 
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-orange-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.a>
              <motion.a 
                href="#features" 
                className="flex items-center justify-center px-8 py-3 bg-white text-orange-500 rounded-full border border-orange-200 hover:border-orange-300 transition duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#fff7ed" }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} className="ml-2" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-lg">
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-50"
                animate={floatingAnimation}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-40"
                animate={floatingAnimation}
                transition={{ delay: 0.5 }}
              />
              <motion.img 
                src={heroImage}
                alt="Woman feeling comfortable and confident" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-auto object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 