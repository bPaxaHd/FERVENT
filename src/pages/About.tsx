import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Separator } from "@/components/ui/separator";
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleBack = () => {
    window.location.href = 'https://gavgav.vercel.app';
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <div className="w-full max-w-[1920px] mx-auto bg-white">
        {!isMobile && (
          <div className="w-full bg-gray-100 py-4">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <button onClick={handleBack} className="hover:text-gray-900">ГЛАВНАЯ</button>
                <span>/</span>
                <span className="text-gray-400">О КОМПАНИИ</span>
              </div>
            </div>
          </div>
        )}

        <section className="w-full h-[600px] relative">
          <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">РАСКРОЙ СВОЮ УНИКАЛЬНОСТЬ</h1>
              <p className="text-lg md:text-xl">
                Специализированная платформа для покупки и продажи стильной одежды любых брендов.
              </p>
            </div>
          </div>
          <img 
            alt="О компании" 
            src="/lovable-uploads/b5aea754-5295-4499-bd10-8e4f49711b03.png" 
            className="w-full h-full object-cover"
          />
        </section>
      
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-12">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-4xl font-normal text-black">Контроль подлинности</h2>
                <p className="text-lg text-gray-600">
                  Наш поставщик — надежный партнер, предлагающий продукцию высокого качества. 
                  Благодаря своему опыту и профессионализму, он обеспечивает надежность и отличные результаты, 
                  что делает его отличным выбором для бизнеса. 
                  Мы уверены в его надежности и продолжаем успешно сотрудничать.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-black mb-16 text-center">Тщательная аутентификация</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">1</span>
                </div>
                <p className="text-lg text-gray-600">Контроль подлинности</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">2</span>
                </div>
                <p className="text-lg text-gray-600">Гарантия оригинальности</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">3</span>
                </div>
                <p className="text-lg text-gray-600">Фирменная упаковка с защитой</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img alt="Коллекция костюмов" className="w-full h-[300px] object-cover rounded-lg" src="/lovable-uploads/e49d1e3e-1e12-493f-8f47-2f3ff881eaaa.png" />
              <img alt="Коллекция пиджаков" className="w-full h-[300px] object-cover rounded-lg" src="/lovable-uploads/a89d46d8-f939-4022-b824-a61b000fc8e6.png" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-black mb-16 text-center">Предоставляем большое количество товара</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Обувь", image: "/lovable-uploads/fdf12c95-73a0-430a-a498-2393e160ef25.png" },
                { title: "Аксессуары", image: "/lovable-uploads/cb0d33a3-2cfb-44e8-b249-28672002337f.png" },
                { title: "Одежда", image: "/lovable-uploads/a0128451-baa2-47bb-bfcb-cea170163a22.png" },
                { title: "Обувь", image: "/lovable-uploads/8fc8886d-090f-46fc-92c4-fcabe66147cb.png" },
                { title: "Аксессуары", image: "/lovable-uploads/ae8159cf-c72e-4d38-89b6-b21dbf124b3f.png" },
                { title: "Одежда", image: "/lovable-uploads/504c783b-67b2-4619-a446-dee208d3d54e.jpg" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img alt={item.title} className="w-64 h-64 object-contain mb-4" src={item.image} />
                  <span className="text-xl text-gray-600">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-4xl font-light text-black">Предлагаем множество мировых брендов</h2>
              <p className="text-lg text-gray-600">
                Мы сотрудничаем с ведущими мировыми брендами, чтобы предоставить вам лучший выбор качественной продукции
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
              {[
                "/lovable-uploads/4ce30955-535c-4be1-8142-0ff7bcddbf1e.png",
                "/lovable-uploads/d0889ee0-4db9-4d06-aec9-001702c35aeb.png",
                "/lovable-uploads/f17ab310-adc3-4152-92f0-ad98541ea974.png",
                "/lovable-uploads/fc346c29-00d5-4786-85ff-17e89daa33f3.png",
                "/lovable-uploads/02c129c3-7049-4dae-9d26-a84c1d49e5ce.png",
                "/lovable-uploads/1b9c389f-0658-483c-9e4d-cfc8a0635e66.png",
                "/lovable-uploads/604ae3ec-21dd-4534-8013-1ae7cf98b964.png",
                "/lovable-uploads/ab8d21d4-676e-4db3-829b-7a299f8f3110.png",
                "/lovable-uploads/9c5d4bac-4566-4632-82dd-a5fdf0734bf1.png",
                "/lovable-uploads/8c59ee9a-ce12-47c2-a805-86a65a61c1b2.png",
              ].map((src, index) => (
                <div key={index} className="flex items-center justify-center p-4">
                  <img 
                    alt={`Бренд ${index + 1}`} 
                    className="w-full h-20 object-contain" 
                    src={src} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
