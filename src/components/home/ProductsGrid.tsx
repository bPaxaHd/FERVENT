
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

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
    <div className="product-card group">
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
          <Heart 
            className={`w-6 h-6 ${isFavorite ? 'fill-black' : ''} text-black`}
          />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg">{title}</h3>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
};

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      title: "Комбинезон",
      price: "111.00 ₽",
      image: "/lovable-uploads/d6c13400-9d6c-48dc-94f2-1169dd76229b.jpg"
    },
    {
      id: 2,
      title: "Футболка",
      price: "111.00 ₽",
      image: "/lovable-uploads/23d6eb28-3fd7-42ad-878a-4bd7bbed82c5.jpg"
    },
    {
      id: 3,
      title: "Балетки",
      price: "111.00 ₽",
      image: "/lovable-uploads/c06374cb-9ea4-4e80-b168-0b125577ab7f.jpg"
    },
    {
      id: 4,
      title: "Сумка",
      price: "111.00 ₽",
      image: "/lovable-uploads/ddbb277e-f2a6-4ea8-9620-5c775f68c51e.jpg"
    },
    // Добавляем еще 4 товара для сетки 4x2
    {
      id: 5,
      title: "Комбинезон",
      price: "111.00 ₽",
      image: "/lovable-uploads/d6c13400-9d6c-48dc-94f2-1169dd76229b.jpg"
    },
    {
      id: 6,
      title: "Футболка",
      price: "111.00 ₽",
      image: "/lovable-uploads/23d6eb28-3fd7-42ad-878a-4bd7bbed82c5.jpg"
    },
    {
      id: 7,
      title: "Балетки",
      price: "111.00 ₽",
      image: "/lovable-uploads/c06374cb-9ea4-4e80-b168-0b125577ab7f.jpg"
    },
    {
      id: 8,
      title: "Сумка",
      price: "111.00 ₽",
      image: "/lovable-uploads/ddbb277e-f2a6-4ea8-9620-5c775f68c51e.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-8 text-black">Новые поступления</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-12 py-3 border border-gray-300 text-sm font-normal rounded-none text-black bg-white hover:bg-gray-50">
            Смотреть все
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
