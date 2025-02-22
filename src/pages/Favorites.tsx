
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface FavoriteItem {
  id: number;
  title: string;
  price: string;
  image: string;
}

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter(item => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  const EmptyFavorites = () => (
    <div className="flex flex-col items-center justify-center py-20">
      <Heart className="w-24 h-24 mb-6" />
      <h2 className="text-xl font-medium mb-4">В ИЗБРАННОМ ПОКА ПУСТО</h2>
      <p className="text-gray-500 text-center mb-8">
        Сохраняйте понравившиеся товары, чтобы<br />долго не искать
      </p>
      <Button 
        className="px-12 py-3 bg-black text-white hover:bg-gray-900"
        onClick={() => navigate('/')}
      >
        ПЕРЕЙТИ К ПОКУПКАМ
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <div className="w-full max-w-[1920px] mx-auto bg-white flex-1">
        {!isMobile && (
          <div className="bg-gray-100 py-4">
            <div className="container mx-auto px-4 max-w-[1920px]">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <a href="/" className="hover:text-gray-900">ГЛАВНАЯ</a>
                <span>/</span>
                <span className="text-gray-400">ИЗБРАННОЕ</span>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-8 max-w-[1920px]">
          {favorites.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl">ИЗБРАННОЕ</h1>
                <div className="text-sm text-gray-600">
                  {favorites.length} товара
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map((item) => (
                  <div key={item.id} className="group">
                    <div className="relative mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-square object-cover"
                      />
                      <button 
                        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                        onClick={() => removeFavorite(item.id)}
                      >
                        <Heart className="w-5 h-5 fill-black text-black" />
                      </button>
                    </div>
                    <h3 className="text-sm mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <EmptyFavorites />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
