import React from 'react';
import { PackageOpen, User, Trash2 } from 'lucide-react';
import howImage from '../image/howto.png';

const steps = [
  {
    title: "Unpack",
    description: "Unpack the sealed disposable panty from its hygienic packaging.",
    icon: <PackageOpen className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Wear",
    description: "Slip it on like regular underwear—no pads or tampons needed.",
    icon: <User className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Dispose",
    description: "Wrap the used panty in the disposal cover provided and dispose responsibly in a sanitary waste bin.",
    icon: <Trash2 className="w-10 h-10 text-orange-500" />,
  },
];

const HowToUse = () => {
  return (
    <section id="how-to-use" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">How to Use <span className="text-orange-500">Orange Lilies</span></h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Simple, hygienic, and hassle-free!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="md:w-1/2 lg:w-5/12 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src={howImage}
                alt="Using Orange Lilies" 
                className="w-full h-auto object-contain md:object-cover md:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent flex items-end">
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-6/12">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 shadow-md flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-serif">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-neutral-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-orange-100 rounded-lg">
              <p className="text-orange-800 font-medium">
                <strong>Important:</strong> Do not flush—it may clog drainage systems.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 font-serif">No pad shifting, no frequent changes</h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Orange Lilies Disposable Panties stay securely in place with a panty-like fit and high absorbency, eliminating the hassle of adjusting or changing pads often.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                <span className="text-orange-500 font-bold text-xl">8-10</span>
              </div>
              <p className="font-medium">Hours of Protection</p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                <span className="text-orange-500 font-bold text-xl">4</span>
              </div>
              <p className="font-medium">Available Sizes</p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                <span className="text-orange-500 font-bold text-xl">5</span>
              </div>
              <p className="font-medium">Panties per Pack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse; 