import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';

const testimonials = [
  {
    name: "Priya S.",
    location: "Mumbai",
    quote: "Orange Lilies changed my period experience completely. No more leaks and so comfortable I forget I'm wearing them!",
    rating: 5,
    title: "College Student",
    gradient: "from-orange-100 to-pink-50",
    color: "orange",
  },
  {
    name: "Anita R.",
    location: "Bangalore",
    quote: "As a frequent traveler, these disposable panties have been a game-changer. No more worrying about changing pads in unfamiliar bathrooms.",
    rating: 5,
    title: "Business Professional",
    gradient: "from-blue-100 to-orange-50",
    color: "blue",
  },
  {
    name: "Meera K.",
    location: "Delhi",
    quote: "I can finally focus on my training without period worries. The fit is perfect and protection is reliable even during intense workouts.",
    rating: 4,
    title: "Athlete",
    gradient: "from-green-100 to-orange-50",
    color: "green",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        delay: i * 0.1
      }
    })
  };

  const quoteVariants = {
    hover: {
      scale: 1.1,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const colorMap = {
    orange: "from-orange-200/50 to-orange-300/50",
    blue: "from-blue-200/50 to-orange-300/50",
    green: "from-green-200/50 to-orange-300/50",
  };

  return (
    <Card
      index={index}
      className={`bg-gradient-to-br ${testimonial.gradient} group`}
      hoverScale={1.02}
      hoverRotate={0}
    >
      <div className="flex flex-col h-full relative">
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <div className="flex space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={starVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Star 
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-neutral-300"} 
                  />
                </motion.div>
              ))}
            </div>
            <motion.h3 
              className="font-bold text-lg"
              whileHover={{ 
                color: "#f97316",
                x: 5,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              {testimonial.name}
            </motion.h3>
            <motion.div 
              className="flex items-center text-sm text-neutral-500"
              whileHover={{ x: 5 }}
            >
              <MapPin size={14} className="mr-1" />
              <span>{testimonial.title}, {testimonial.location}</span>
            </motion.div>
          </div>
          <motion.div
            variants={quoteVariants}
            whileHover="hover"
            className="bg-white/80 p-2 rounded-full backdrop-blur-sm relative z-10"
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${colorMap[testimonial.color]} rounded-full blur-sm`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Quote size={40} className="text-orange-200 relative z-10" />
          </motion.div>
        </div>
        
        <motion.p 
          className="text-neutral-700 italic flex-grow relative z-10"
          whileHover={{ 
            scale: 1.02,
            x: 5,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          {testimonial.quote}
        </motion.p>

        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colorMap[testimonial.color]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </Card>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our <motion.span 
            className="text-orange-500 inline-block"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >Customers Say</motion.span></h2>
          <p className="section-subtitle">
            Hear from women who have transformed their period experience with Orange Lilies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a 
            href="#pricing" 
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience the Difference
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 