import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const FAQ = () => {
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
            <div className="container mx-auto px-4 max-w-[1920px]">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <button onClick={handleBack} className="hover:text-gray-900">ГЛАВНАЯ</button>
                <span>/</span>
                <span className="text-gray-400">ВОПРОС - ОТВЕТ</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 bg-white">
          <div className={`container mx-auto px-4 ${isMobile ? 'py-6' : 'py-16'}`}>
            {isMobile ? (
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">КАТЕГОРИЯ / ВОПРОСЫ - ОТВЕТ</div>
                <h1 className="text-2xl font-medium mb-6">FAQ — Часто задаваемые вопросы</h1>
              </div>
            ) : (
              <h1 className="text-4xl font-medium mb-12 text-black">FAQ — Часто задаваемые вопросы</h1>
            )}
            
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <Separator className="bg-gray-200" />
                <AccordionItem value="item-1">
                  <AccordionTrigger className={`hover:no-underline py-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
                    Как продать свой бренд, вещи или товары на сайте?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Зарегистрируйтесь, Добавьте Товар С Фото, Описанием И Ценой. После Модерации Объявление Станет Доступным Покупателям. Они Смогут Связаться С Вами И Оформить Сделку. Оплату Получите Удобным Способом. Когда Товар Продан, Удалите Объявление В Личном Кабинете.
                  </AccordionContent>
                </AccordionItem>
                <Separator className="bg-gray-200" />

                <AccordionItem value="item-2">
                  <AccordionTrigger className={`hover:no-underline py-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
                    Как купить товар и связаться с продавцом?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Выберите товар, нажмите кнопку "Связаться с продавцом" и следуйте дальнейшим инструкциям.
                  </AccordionContent>
                </AccordionItem>
                <Separator className="bg-gray-200" />

                <AccordionItem value="item-3">
                  <AccordionTrigger className={`hover:no-underline py-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
                    Какие способы оплаты доступны?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Мы принимаем различные способы оплаты, включая банковские карты, электронные кошельки и банковские переводы.
                  </AccordionContent>
                </AccordionItem>
                <Separator className="bg-gray-200" />

                <AccordionItem value="item-4">
                  <AccordionTrigger className={`hover:no-underline py-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
                    Есть ли гарантия на покупки?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Да, все товары на нашей платформе проходят проверку подлинности, и мы гарантируем безопасность сделки.
                  </AccordionContent>
                </AccordionItem>
                <Separator className="bg-gray-200" />

                <AccordionItem value="item-5">
                  <AccordionTrigger className={`hover:no-underline py-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
                    Какая комиссия за продажу и покупку?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Комиссия зависит от категории товара и условий продажи. Подробную информацию можно найти в разделе "Комиссии".
                  </AccordionContent>
                </AccordionItem>
                <Separator className="bg-gray-200" />

                <AccordionItem value="item-6">
                  <AccordionTrigger className={`hover:no-underline py-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
                    Как добавить или удалить объявление?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    В личном кабинете есть опции для управления вашими объявлениями. Вы можете добавлять новые и удалять существующие объявления.
                  </AccordionContent>
                </AccordionItem>
                <Separator className="bg-gray-200" />

                <AccordionItem value="item-7">
                  <AccordionTrigger className={`hover:no-underline py-6 ${isMobile ? 'text-base' : 'text-lg'}`}>
                    Что делать, если у меня возникли вопросы или проблемы с заказом?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Свяжитесь с нашей службой поддержки через форму обратной связи или по указанным контактным данным.
                  </AccordionContent>
                </AccordionItem>
                <Separator className="bg-gray-200" />
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
