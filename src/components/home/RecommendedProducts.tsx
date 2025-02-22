
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const RecommendedProducts = () => {
  const recommendedProducts = [
    {
      id: 9,
      title: "Комбинезон",
      price: "111.00 ₽",
      image: "/lovable-uploads/d5c3c671-b110-4311-ad19-9f016b0da07d.jpg"
    },
    {
      id: 10,
      title: "Футболка",
      price: "111.00 ₽",
      image: "/lovable-uploads/89f06e5e-f60a-4892-bc4c-409101590701.jpg"
    },
    {
      id: 11,
      title: "Балетки",
      price: "111.00 ₽",
      image: "/lovable-uploads/28b55df1-bced-44f4-9e1d-dfb9f3c96a1c.jpg"
    },
    {
      id: 12,
      title: "Сумка",
      price: "111.00 ₽",
      image: "/lovable-uploads/0b7328e5-e9cb-4caa-8b76-886944a34ac0.jpg"
    },
    // Добавляем еще 4 товара для сетки 4x2
    {
      id: 13,
      title: "Комбинезон",
      price: "111.00 ₽",
      image: "/lovable-uploads/d5c3c671-b110-4311-ad19-9f016b0da07d.jpg"
    },
    {
      id: 14,
      title: "Футболка",
      price: "111.00 ₽",
      image: "/lovable-uploads/89f06e5e-f60a-4892-bc4c-409101590701.jpg"
    },
    {
      id: 15,
      title: "Балетки",
      price: "111.00 ₽",
      image: "/lovable-uploads/28b55df1-bced-44f4-9e1d-dfb9f3c96a1c.jpg"
    },
    {
      id: 16,
      title: "Сумка",
      price: "111.00 ₽",
      image: "/lovable-uploads/0b7328e5-e9cb-4caa-8b76-886944a34ac0.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-8 font-light text-gray-950">Рекомендованные</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-12 py-3 border border-gray-300 text-sm font-normal rounded-none text-black bg-white hover:bg-gray-50">
            Смотреть все
          </button>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ title, price, image, id }: { title: string; price: string; image: string; id: number }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((item: any) => item.id === id));
  }, [id]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (!isFavorite) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, { id, title, price, image }]));
    } else {
      localStorage.setItem('favorites', JSON.stringify(favorites.filter((item: any) => item.id !== id)));
    }
    
    setIsFavorite(!isFavorite);
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  return (
    <div className="bg-white group">
      <div className="relative overflow-hidden">
        <img 
          alt={title} 
          className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-300" 
          src={image}
          loading="lazy"
        />
        <button 
          className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleFavoriteClick}
        >
          <Heart className={`w-6 h-6 ${isFavorite ? 'fill-black' : ''} text-black`} />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-sm text-gray-500">{price}</p>
      </div>
    </div>
  );
};

export default RecommendedProducts;
