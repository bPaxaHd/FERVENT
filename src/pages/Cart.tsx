
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Plus, Minus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Annet white платье",
      price: 22500,
      size: "S",
      color: "Черный",
      quantity: 1,
      image: "/lovable-uploads/c6228396-b505-452d-959d-b5ae9842e284.png"
    }
  ]);

  const handleQuantityChange = (id: number, increment: boolean) => {
    setCartItems(items => items.map(item => item.id === id ? {
      ...item,
      quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1)
    } : item));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col max-w-[1920px] mx-auto">
        <Header />
        <div className="flex-1 flex flex-col">
          <div className="p-4 flex justify-between items-center border-b">
            <h1 className="text-xl font-medium">КОРЗИНА</h1>
            <Link to="/">
              <X className="w-6 h-6" />
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="w-48 h-48 mb-6">
              <img 
                src="/lovable-uploads/846ed977-8698-4365-af46-6c860efaa539.png" 
                alt="Empty Cart" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xl mb-8">ВАША КОРЗИНА ПУСТА</p>
            <Link to="/" className="w-full">
              <Button className="w-full bg-black text-white h-14">
                ПЕРЕЙТИ К ПОКУПКАМ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[1920px] mx-auto">
      <Header />
      <div className="flex-1 flex flex-col max-h-[calc(100vh-64px)]">
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-medium">КОРЗИНА</h1>
          <Link to="/">
            <X className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="space-y-6 p-4">
            {cartItems.map(item => (
              <div key={item.id} className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-[120px] h-[160px] bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between">
                      <h3 className="text-lg">{item.name}</h3>
                      <span className="text-lg">{item.price.toLocaleString()} ₽</span>
                    </div>
                    <div className="space-y-2 text-gray-500">
                      <div className="flex justify-between">
                        <span>Размеры</span>
                        <span>{item.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Цвет</span>
                        <span>{item.color}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Количество</span>
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => handleQuantityChange(item.id, false)}
                            className="p-1"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, true)}
                            className="p-1"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-500 underline"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Итого</span>
            <span className="text-lg font-medium">{getTotalPrice().toLocaleString()} ₽</span>
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-900 h-14">
            ОФОРМИТЬ ЗАКАЗ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
