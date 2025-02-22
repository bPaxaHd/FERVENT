
import React from 'react';
import { ShoppingBasket, Shield, Truck, ShieldCheck } from 'lucide-react';

const AdvantagesSection = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-12 font-light text-slate-950">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="w-full h-full">
            <img alt="Модель в белом платье" className="w-full h-full" src="/lovable-uploads/08432ef8-5394-46ea-8233-b79609b19fd6.png" />
          </div>
          <div className="space-y-8 py-[60px]">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <ShoppingBasket className="w-12 h-12 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-slate-950">Одежда на заказ любой сложности</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Создадим уникальные вещи по вашим меркам и пожеланиям. Опытные швеи и дизайнеры воплотят любые фантазии в реальность.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Shield className="w-12 h-12 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-slate-950">Работаем с любыми тканями</h3>
                <p className="text-gray-400 text-sm leading-relaxed">От шелка до бархата - подберем идеальный материал для вашего изделия. Большой выбор фактур и расцветок.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Truck className="w-12 h-12 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-slate-950">Быстрая и точная доставка</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Доставляем готовые изделия в срок. Бережная упаковка и быстрая отправка в любой город.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <ShieldCheck className="w-12 h-12 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-slate-950">Безупречное качество</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Тщательный контроль на всех этапах производства. Используем только качественные материалы и фурнитуру.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AdvantagesSection;
