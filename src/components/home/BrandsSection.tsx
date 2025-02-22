import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
const BrandsSection = () => {
  const isMobile = useIsMobile();
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-black mb-12">Бренды</h2>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-8' : ''} w-full`}>
          {isMobile ? <>
              <img alt="adidas" className="w-full h-auto object-contain" src="/lovable-uploads/5d78810a-1d82-41b1-8ac9-717db0bbe747.png" />
              <img alt="the north face" className="w-full h-auto object-contain" src="/lovable-uploads/40a3cfa5-5a8d-481d-bc8d-dc02b880a86e.png" />
              <img alt="cp company" className="w-full h-auto object-contain" src="/lovable-uploads/ee574f5d-5932-4b42-a722-255471f20f7a.png" />
              <img alt="new balance" className="w-full h-auto object-contain" src="/lovable-uploads/bc9847d3-0cca-4884-9a39-c19f1309b1df.png" />
              <img alt="moncler" className="w-full h-auto object-contain" src="/lovable-uploads/5497c7be-4344-4a51-8e79-99352be8298b.png" />
              <img alt="asics" className="w-full h-auto object-contain" src="/lovable-uploads/5ebf7e5a-ccc2-41d7-accb-a3de99578c1a.png" />
              <img alt="stone island" className="w-full h-auto object-contain" src="/lovable-uploads/0de5403f-b387-4e84-9f57-b6eef32668f7.png" />
              <img alt="nike" className="w-full h-auto object-contain" src="/lovable-uploads/5482a0ce-013a-4272-8740-54aba9a8469a.png" />
            </> : <img alt="Логотипы брендов" className="w-full h-auto object-contain" src="/lovable-uploads/20dfbcfa-ae8b-40fc-82c1-92e5b52b492e.png" />}
        </div>
      </div>
    </section>;
};
export default BrandsSection;