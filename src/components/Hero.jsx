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
      className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-4 text-orange-700"
            >
              Period Care <motion.span 
                className="text-orange-500 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >Redefined</motion.span>
            </motion.h1>
            <motion.p 
              variants={textVariants}
              className="text-lg md:text-xl mb-6 text-neutral-700 max-w-xl"
            >
              Orange Lilies Disposable Panties – the ultimate blend of comfort, hygiene, and freedom. Say goodbye to leaks, discomfort, and bulky products.
            </motion.p>
            <motion.p 
              variants={textVariants}
              className="text-neutral-600 mb-8 max-w-xl"
            >
              Designed for young girls, working women, travelers, and athletes – Orange Lilies make period days worry-free, anywhere, anytime.
            </motion.p>
            <motion.div 
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="#pricing" 
                className="btn-primary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.a>
              <motion.a 
                href="#features" 
                className="flex items-center justify-center px-6 py-3 bg-white text-orange-500 rounded-full border border-orange-500 hover:bg-orange-50 transition duration-300"
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
            className="md:w-1/2 w-full"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-orange-200 rounded-full opacity-50"
                animate={floatingAnimation}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-300 rounded-full opacity-40"
                animate={floatingAnimation}
                transition={{ delay: 0.5 }}
              />
              <motion.img 
                src={heroImage}
                alt="Woman feeling comfortable and confident" 
                className="rounded-2xl shadow-xl relative z-10 w-full h-[200px] sm:h-[400px] md:h-[500px] object-cover object-center"
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