import React, { useState, useRef } from 'react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';

const CustomOrder = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    toast
  } = useToast();
  const isMobile = useIsMobile();
  const [contactMethods, setContactMethods] = useState({
    phone: false,
    telegram: false,
    whatsapp: false
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleBack = () => {
    navigate('/');
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    // Проверяем размер файлов (максимум 5MB на файл)
    const oversizedFiles = files.filter(file => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Размер каждого файла не должен превышать 5MB"
      });
      return;
    }

    // Проверяем тип файлов
    const invalidFiles = files.filter(file => !file.type.startsWith('image/'));
    if (invalidFiles.length > 0) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Пожалуйста, загружайте только изображения"
      });
      return;
    }

    // Ограничиваем количество файлов (максимум 5)
    if (selectedFiles.length + files.length > 5) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Можно загрузить максимум 5 изображений"
      });
      return;
    }
    setSelectedFiles(prev => [...prev, ...files]);

    // Очищаем input для возможности повторной загрузки того же файла
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Зде��ь будет логика отправки формы
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
                <span className="text-gray-400">ИНДИВИДУАЛЬНЫЙ ЗАКАЗ</span>
              </div>
            </div>
          </div>
        )}

        <div className={`flex-1 bg-white ${isMobile ? 'py-6' : 'py-16'}`}>
          <div className="container mx-auto px-4 max-w-[700px]">
            {isMobile ? <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">КАТЕГОРИЯ / ИНДИВИДУАЛЬНЫЙ ЗАКАЗ</div>
                <h1 className="text-2xl font-medium">Индивидуальный заказ</h1>
              </div> : <h1 className="text-3xl font-medium mb-12 text-center">Индивидуальный заказ</h1>}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">ИМЯ</Label>
                  <Input required id="name" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="phone">ТЕЛЕФОН</Label>
                  <Input required id="phone" type="tel" className="mt-1" />
                </div>

                <div className="space-y-3">
                  <Label>Как с вами связаться?</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="phone-contact" checked={contactMethods.phone} onCheckedChange={checked => setContactMethods(prev => ({
                      ...prev,
                      phone: checked as boolean
                    }))} />
                      <label htmlFor="phone-contact">Телефон</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="telegram" checked={contactMethods.telegram} onCheckedChange={checked => setContactMethods(prev => ({
                      ...prev,
                      telegram: checked as boolean
                    }))} />
                      <label htmlFor="telegram">Telegram</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="whatsapp" checked={contactMethods.whatsapp} onCheckedChange={checked => setContactMethods(prev => ({
                      ...prev,
                      whatsapp: checked as boolean
                    }))} />
                      <label htmlFor="whatsapp">WhatsApp</label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="info">Информация о товаре</Label>
                  <Textarea id="info" placeholder="Напишите максимально подробную информацию нашим менеджерам для быстрого поиска позиции. Полное название, цвет, размер, артикул." className="mt-1 min-h-[150px]" />
                </div>

                <div>
                  <Label>Прикрепить фото</Label>
                  <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" multiple className="hidden" />
                  <div className="mt-2 space-y-4">
                    <Button type="button" variant="outline" className="gap-2" onClick={() => fileInputRef.current?.click()}>
                      <ImagePlus className="w-4 h-4" />
                      Добавить фото
                    </Button>
                    
                    {selectedFiles.length > 0 && <div className="space-y-2">
                        {selectedFiles.map((file, index) => <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-sm truncate">{file.name}</span>
                            <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                              Удалить
                            </Button>
                          </div>)}
                      </div>}
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900">
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomOrder;
