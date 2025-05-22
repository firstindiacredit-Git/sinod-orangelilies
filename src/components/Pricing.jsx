import React from 'react';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import boxImage from '../image/logo1.png';

const benefits = [
  "360° Leak Protection",
  "8-10 Hours of Protection",
  "No Rashes, Cottony Soft Feel",
  "Fits Like Regular Underwear",
  "Snug, Comfortable Fit",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title">Pricing & <span className="text-orange-500">Packages</span></h2>
        <p className="section-subtitle">
          Premium comfort, leak protection, and convenience—all at an affordable price.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl mx-auto">
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-xl opacity-50"></div>
              <img 
                src={boxImage}
                alt="Orange Lilies product package" 
                className="relative z-10 rounded-xl shadow-lg w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover object-center"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white border-2 border-orange-100 rounded-2xl p-4 shadow-lg">
              <div className="bg-orange-100 text-orange-800 inline-block px-4 py-1 rounded-full font-medium text-sm mb-4">
                Most Popular
              </div>
              
              <h3 className="text-2xl font-bold mb-2 font-serif">5 Disposable Panties per Pack</h3>
              <p className="text-neutral-600 mb-4">
                Each Orange Lilies pack contains 5 ultra-comfy, leak-proof panties, giving you reliable period protection for multiple days.
              </p>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-orange-500">₹299</span>
                  <span className="text-neutral-500 ml-2">MRP</span>
                </div>
                <p className="text-sm text-neutral-500">Free delivery on orders above ₹499</p>
              </div>
              
              <div className="mb-6">
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-md mr-3">
                      <span className="font-bold text-orange-800">FIRST15</span>
                    </div>
                    <p className="text-sm text-neutral-700">
                      Use code <span className="font-bold">FIRST15</span> to get 15% off on your first purchase
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={20} className="text-orange-500 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#buy-now" 
                className="flex items-center justify-center w-full btn-primary"
              >
                <ShoppingBag size={20} className="mr-2" />
                Buy Now
              </a>
              
              <p className="text-center text-sm mt-4 text-neutral-500">
                Coming soon to select stores and online!
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-serif">
            Say goodbye to leaks and hello to peace of mind
          </h3>
          <p className="text-neutral-600 mb-6">
            Experience the next level of period care with our disposable panties.
          </p>
          <p className="text-xl font-serif text-orange-500 italic">
            "Orange Lilies™ – Confidence of Freshness"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 