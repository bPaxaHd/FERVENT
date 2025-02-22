import React from 'react';
const Footer = () => {
  return <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-8 pb-12">
          <div className="space-y-8">
            <img alt="Fervent" src="/lovable-uploads/3ce9a693-7e3c-4fb7-850f-dce1f0a0b97c.png" className="h-10 object-scale-down" />
            <div className="flex gap-4">
              <a href="https://vk.com/ferventmarket_ru" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <img alt="VK" className="w-8 h-8" src="/lovable-uploads/bb801ad3-478c-477d-b114-796ab14f77f6.png" />
              </a>
              <a href="https://t.me/fervent_manager" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <img alt="TG" className="w-8 h-8" src="/lovable-uploads/c0d4b91f-b099-49ed-b3bc-81d48500a89d.png" />
              </a>
              <span className="text-white cursor-default">
                <img alt="WA" className="w-8 h-8" src="/lovable-uploads/9efdd6b9-9642-49ab-9bd1-b983ea919f5a.png" />
              </span>
            </div>
            <div className="space-y-3 text-[15px] text-gray-400">
              <p className="cursor-pointer hover:text-white transition-colors">Политика конфиденциальности</p>
              <p className="cursor-pointer hover:text-white transition-colors">Пользовательское соглашение</p>
              <p className="cursor-pointer hover:text-white transition-colors">Договор оферты</p>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold mb-4">НАШИ КОНТАКТЫ</h3>
            <div className="space-y-2 text-[15px] text-gray-400">
              <p>E-mail@gmail.com</p>
              <p>0123-456-789</p>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold mb-4">РАЗДЕЛЫ</h3>
            <div className="space-y-2 text-[15px] text-gray-400">
              <p className="cursor-pointer hover:text-white transition-colors">Одежда</p>
              <p className="cursor-pointer hover:text-white transition-colors">Обувь</p>
              <p className="cursor-pointer hover:text-white transition-colors">Бренды</p>
              <p className="cursor-pointer hover:text-white transition-colors">Новинки</p>
              <p className="cursor-pointer hover:text-white transition-colors">Аксессуары</p>
              <p className="cursor-pointer hover:text-white transition-colors">Скидки</p>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold mb-4">ИНФОРМАЦИЯ</h3>
            <div className="space-y-2 text-[15px] text-gray-400">
              <p className="cursor-pointer hover:text-white transition-colors">О нас</p>
              <p className="cursor-pointer hover:text-white transition-colors">Гарантия</p>
              <p className="cursor-pointer hover:text-white transition-colors">FAQ</p>
              <p className="cursor-pointer hover:text-white transition-colors">Возврат</p>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  ИП ДМИТРЕНКО НИКИТА ФИЛИППОВИЧ<br />
                  ИНН - 771014067<br />
                  ОГРНИП - 32550810001974
                </p>
              </div>
              <div className="flex gap-2">
                <img alt="Payment methods" src="/lovable-uploads/3a18cb98-36dd-4260-8074-2bae6378a45f.png" className="h-6" />
              </div>
              <div className="space-y-2">
                <p className="text-[13px] text-white">Подпишитесь на рассылку, чтобы узнавать о новинках первыми</p>
                <div className="flex">
                  <input type="email" placeholder="Введите свой email" className="bg-transparent border border-[#333] px-4 py-2 text-sm rounded-l-md w-[280px] focus:outline-none focus:border-white transition-colors" />
                  <button className="bg-transparent border border-l-0 border-[#333] px-4 rounded-r-md hover:border-white transition-colors group">
                    <img alt="Submit" className="w-5 h-5 object-contain" src="/lovable-uploads/b37d1c72-c055-4eef-84e0-f5596b95638e.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#333]">
          <p className="text-xs text-gray-500 leading-relaxed max-w-[800px] mx-auto text-center py-[53px]">
            2025 ©FERVENT — ПЛАТФОРМА, ОБЕСПЕЧИВАЮЩАЯ НАДЕЖНОСТЬ ПРИ ПРОДАЖЕ И ПОКУПКЕ ОРИГИНАЛЬНЫХ БРЕНДОВЫХ ТОВАРОВ
            ЗА СЧЕТ ЭКСПЕРТНОЙ ПРОВЕРКИ НА ПОДЛИННОСТЬ И БЕЗОПАСНЫХ СДЕЛОК.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;