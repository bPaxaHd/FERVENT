
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="w-full bg-[#1F1F1F] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <nav>
            <ul className="flex gap-6 text-sm">
              <li><a href="/about" className="hover:text-white/80 transition-colors">О компании</a></li>
              <li><a href="/faq" className="hover:text-white/80 transition-colors">Вопрос - ответ</a></li>
              <li><a href="/contacts" className="hover:text-white/80 transition-colors">Контакты</a></li>
              <li><a href="/authenticity" className="hover:text-white/80 transition-colors">Гарантия аутентичности</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center gap-8">
            <a href="mailto:support@ferventmarket.ru" className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors">
              <Mail className="w-4 h-4" />
              support@ferventmarket.ru
            </a>
            <a href="tel:88001111111" className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors">
              <Phone className="w-4 h-4" />
              8 (800) 111-11-11
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
