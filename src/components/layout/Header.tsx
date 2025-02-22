import React, { useState, useEffect } from 'react';
import { Heart, Search, User, Menu, Home, ShoppingBag, PlusCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartSheet from '../cart/CartSheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SearchInput from '../search/SearchInput';
const Header = () => {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const isMobile = useIsMobile();
  useEffect(() => {
    const updateFavoritesCount = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavoritesCount(favorites.length);
    };
    updateFavoritesCount();
    window.addEventListener('storage', updateFavoritesCount);
    window.addEventListener('favoritesUpdated', updateFavoritesCount);
    return () => {
      window.removeEventListener('storage', updateFavoritesCount);
      window.removeEventListener('favoritesUpdated', updateFavoritesCount);
    };
  }, []);
  const displayFavoritesCount = () => {
    if (favoritesCount === 0) return null;
    if (favoritesCount > 99) return '99+';
    return favoritesCount;
  };
  const MobileNavigation = () => <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 h-16 z-50">
      <div className="flex justify-around items-center h-full">
        <Link to="/" className="text-white">
          <Home className="w-6 h-6" />
        </Link>
        <Link to="/favorites" className="text-white relative">
          <Heart className="w-6 h-6" />
          {displayFavoritesCount() && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {displayFavoritesCount()}
            </span>}
        </Link>
        <Link to="/sell" className="text-white">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center -mt-6">
            <PlusCircle className="w-6 h-6 text-black" />
          </div>
        </Link>
        <Link to="/cart" className="text-white">
          <ShoppingBag className="w-6 h-6" />
        </Link>
        <Link to="/profile" className="text-white">
          <User className="w-6 h-6" />
        </Link>
      </div>
    </nav>;
  const MobileHeader = () => <div className="w-full bg-black">
      <div className="flex items-center justify-between p-4 rounded-none py-[17px] my-0">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white">
              <Menu className="w-8 h-8" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-black p-0">
            <div className="flex flex-col h-full">
              <nav className="flex-1 p-4">
                <div className="flex justify-between items-center mb-8">
                  <Link to="/" className="pl-4">
                    <img alt="Fervent" className="h-8" src="/lovable-uploads/5cf0b45e-e129-41da-aa70-473d93df9890.png" />
                  </Link>
                  <Link to="/search" className="text-white">
                    
                  </Link>
                </div>
                <ul className="space-y-4">
                  <li><Link to="/shoes" className="text-white text-lg">Обувь</Link></li>
                  <li><Link to="/clothing" className="text-white text-lg">Одежда</Link></li>
                  <li><Link to="/accessories" className="text-white text-lg">Аксессуары</Link></li>
                  <li><Link to="/brands" className="text-white text-lg">Бренды</Link></li>
                  <li><Link to="/new" className="text-white text-lg">Новинки</Link></li>
                  <li><Link to="/sale" className="text-white text-lg">Скидки</Link></li>
                  <li><Link to="/about" className="text-white text-lg">О компании</Link></li>
                  <li><Link to="/faq" className="text-white text-lg">Вопрос - ответ</Link></li>
                  <li><Link to="/contacts" className="text-white text-lg">Контакты</Link></li>
                  <li><Link to="/authenticity" className="text-white text-lg">Гарантия аутентичности</Link></li>
                </ul>
                <div className="mt-8 space-y-4">
                  <a href="mailto:support@ferventmarket.ru" className="text-white flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    support@ferventmarket.ru
                  </a>
                  <a href="tel:88001111111" className="text-white flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    8 (800) 111-11-11
                  </a>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <Link to="/" className="flex-1 flex justify-center">
          <img alt="Fervent" className="h-8 object-contain" src="/lovable-uploads/2eb1fb82-0857-4e45-88fa-57d823e4e740.png" />
        </Link>

        <button className="text-white">
          <Search className="w-8 h-8" />
        </button>
      </div>

      <div className="px-4 pb-4">
        <SearchInput isMobile={true} className="w-full px-4 py-2 rounded-[5px] bg-white" />
      </div>
    </div>;
  return isMobile ? <>
      <MobileHeader />
      <MobileNavigation />
    </> : <header>
      <div className="nav-container bg-black">
        <Link to="/" className="text-3xl font-bold tracking-wider text-white my-0">
          <img alt="Fervent" className="h-12 object-contain" src="/lovable-uploads/2bb009db-678e-434f-8010-4b0b4f35154e.png" />
        </Link>

        <div className="flex-1 max-w-2xl mx-16">
          <SearchInput className="search-input [&::-webkit-search-cancel-button]:hidden" />
        </div>

        <div className="flex items-center gap-8">
          <button className="main-button">Продать</button>
          <div className="flex items-center gap-6">
            <div className="relative">
              <User className="header-icon" />
            </div>
            <Link to="/favorites" className="relative">
              <Heart className="header-icon" />
              {displayFavoritesCount() && <span className="cart-counter">{displayFavoritesCount()}</span>}
            </Link>
            {isMobile ? <Link to="/cart">
                <ShoppingBag className="header-icon" />
              </Link> : <CartSheet />}
          </div>
        </div>
      </div>

      <div className="bg-black border-t border-gray-800">
        <nav className="container mx-auto flex justify-center">
          <ul className="flex items-center gap-8 py-4">
            <li><Link to="/shoes" className="nav-link">Обувь</Link></li>
            <li><Link to="/clothing" className="nav-link">Одежда</Link></li>
            <li><Link to="/accessories" className="nav-link">Аксессуары</Link></li>
            <li><Link to="/brands" className="nav-link">Бренды</Link></li>
            <li><Link to="/new" className="nav-link">Новинки</Link></li>
            <li><Link to="/sale" className="nav-link">Скидки</Link></li>
            <li><Link to="/contacts" className="nav-link">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>;
};
export default Header;