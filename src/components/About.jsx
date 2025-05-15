import React from 'react';
import { Users } from 'lucide-react';
import men from '../image/Sanam-Lamba-PNG.png'
import women from '../image/Kanika-Tomar-PNG.png'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title">About <span className="text-orange-500">Orange Lilies</span></h2>
        <p className="section-subtitle">
          Redefining menstrual hygiene with innovative, comfortable, and convenient solutions.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 font-serif">Our Mission</h3>
            <p className="text-neutral-700 mb-6">
              At Orange Lilies, we believe period care should be simple, stress-free, and empowering. Our mission is to redefine menstrual hygiene with innovative, comfortable, and convenient solutions tailored for every woman's lifestyle.
            </p>
            <p className="text-neutral-700 mb-6">
              From young girls to working professionals, travelers to athletes — Orange Lilies Disposable Panties offer a snug, rash-free fit with 360° leak protection, so you can live every day with confidence.
            </p>
            <p className="text-xl font-serif text-orange-600 mb-8">
              Proudly made in India, designed for you.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Users size={24} className="text-orange-500 mr-3" />
                <h4 className="text-xl font-bold font-serif">Our Team</h4>
              </div>
              <p className="text-neutral-600">
                Behind Orange Lilies is a passionate team of innovators, designers, and wellness advocates dedicated to transforming period care. We are a women-led, India-based group committed to comfort, hygiene, and empowerment.
              </p>
              <p className="text-neutral-600 mt-4">
                Every member of our team brings a unique perspective, united by one goal: to create thoughtful, reliable, and accessible menstrual solutions for women everywhere.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200 rounded-full opacity-30"></div>
              
              <div className="col-span-2">
                <img 
                  src="https://images.pexels.com/photos/3205574/pexels-photo-3205574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dedicated team working on Orange Lilies" 
                  className="rounded-xl shadow-md w-full object-cover h-48"
                />
              </div>
              
              <div>
                <img 
                  src={women}
                  alt="Women entrepreneurs" 
                  className="rounded-xl shadow-md w-full object-cover h-64"
                />
              </div>
              
              <div>
                <img 
                  src={men} 
                  alt="Product development" 
                  className="rounded-xl shadow-md w-full object-cover h-64"
                />
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <h4 className="text-xl font-bold mb-4 font-serif">Our Commitment</h4>
              <p className="text-neutral-700">
                We're committed to creating period care products that are not only effective and comfortable but also produced ethically and sustainably. Orange Lilies represents our dedication to women's health and wellbeing.
              </p>
              <p className="text-neutral-700 mt-4">
                Together, we're redefining the way women experience their periods—with care, compassion, and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 