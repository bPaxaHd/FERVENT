import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Contacts = () => {
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
                <span className="text-gray-400">КОНТАКТЫ</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex-1 bg-white">
          {isMobile ? (
            <div className="p-4">
              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Контакты</h2>
                <p className="text-lg mb-2">+7 (999) 999-99-99</p>
                <p className="text-gray-500">Служба поддержки</p>
                <p className="text-gray-500">EMAIL@GMAIL.COM</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Онлайн чат</h2>
                <p className="text-gray-600">
                  Пожалуйста, нажмите на значок чата на главной странице, чтобы связаться с нашими специалистами в любое время суток
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Наш email</h2>
                <div className="space-y-3">
                  <p className="text-gray-600">Поддержка клиентов: <br/><a href="mailto:support@fervent-market.ru" className="text-black">support@fervent-market.ru</a></p>
                  <p className="text-gray-600">Служба аутентификации: <br/><a href="mailto:authenticate@fervent-market.ru" className="text-black">authenticate@fervent-market.ru</a></p>
                  <p className="text-gray-600">Обработка запросов на возврат товаров: <br/><a href="mailto:return@fervent-market.ru" className="text-black">return@fervent-market.ru</a></p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Остались вопросы?</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">ИМЯ</label>
                    <input id="name" type="text" className="w-full p-3 border border-gray-300 rounded-none" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2">ТЕЛЕФОН</label>
                    <input id="phone" type="tel" className="w-full p-3 border border-gray-300 rounded-none" required />
                  </div>

                  <div>
                    <h3 className="text-sm mb-3">Как с вами связаться?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Checkbox id="contact-phone" />
                        <label htmlFor="contact-phone" className="text-sm">Телефон</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="contact-telegram" />
                        <label htmlFor="contact-telegram" className="text-sm">Telegram</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="contact-whatsapp" />
                        <label htmlFor="contact-whatsapp" className="text-sm">WhatsApp</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">Задайте свой вопрос</label>
                    <textarea id="message" className="w-full p-3 border border-gray-300 rounded-none min-h-[120px]" />
                  </div>

                  <Button type="submit" className="w-full bg-black text-white hover:bg-black/90 rounded-none py-4">
                    ОТПРАВИТЬ
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="container mx-auto px-4 py-16">
              <h1 className="text-4xl text-center mb-16">Контакты</h1>
              <div className="flex justify-center items-center gap-16 max-w-4xl mx-auto">
                <div>
                  <h2 className="text-xl mb-6 text-gray-400">Наши контакты</h2>
                  <p className="text-xl">+7 (999) 999-99-99</p>
                </div>
                <div className="w-px h-16 bg-gray-200"></div>
                <div>
                  <h2 className="text-xl mb-6 text-gray-400">Служба поддержки</h2>
                  <p className="text-xl">EMAIL@GMAIL.COM</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
