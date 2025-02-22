
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  return (
    <section className="relative w-full bg-[#F5F5F5]">
      <div className="relative w-full h-[600px]">
        <img 
          alt="Sale 50%" 
          className="w-full h-full object-cover" 
          src="/lovable-uploads/7e83c5cc-1e59-4c39-b409-567176b19483.jpg" 
        />
        
        <button className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
