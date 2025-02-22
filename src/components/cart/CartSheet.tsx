
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { CartItem } from '@/types/cart';
import { useIsMobile } from '@/hooks/use-mobile';

const CartSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([{
    id: 1,
    name: "Annet white платье",
    price: 22500,
    size: "S",
    color: "Черный",
    quantity: 1,
    image: "/lovable-uploads/72554c2b-8cb6-41a8-bc1b-72d600acceae.png"
  }]);
  const isMobile = useIsMobile();

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

  const EmptyCart = () => (
    <div className="flex flex-col items-center justify-between h-full bg-white">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-[200px] h-[200px] mb-4">
          <img 
            alt="Empty Cart" 
            className="w-full h-full object-contain" 
            src="/lovable-uploads/1fd40874-c0e3-4d22-91d6-81d78ef64f6a.png" 
          />
        </div>
        <p className="text-xl font-medium mb-6">ВАША КОРЗИНА ПУСТА</p>
      </div>
      <div className="w-full p-4">
        <Button 
          className="w-full bg-black text-white hover:bg-gray-900 h-14 text-base font-normal" 
          onClick={() => setIsOpen(false)}
        >
          ПЕРЕЙТИ К ПОКУПКАМ
        </Button>
      </div>
    </div>
  );

  const CartContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        <div className="space-y-6 p-4">
          {cartItems.map(item => (
            <div key={item.id} className="space-y-4">
              <div className="flex gap-4">
                <div className="w-[120px] h-[160px] rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <span className="font-medium text-lg">{item.price.toLocaleString()} ₽</span>
                  </div>
                  <div className="mt-4 space-y-3 text-gray-500">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Размеры</span>
                      <span>{item.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Цвет</span>
                      <span>{item.color}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Количество</span>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => handleQuantityChange(item.id, false)}
                          className="w-6 h-6 flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, true)}
                          className="w-6 h-6 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemoveItem(item.id)} 
                    className="mt-3 text-gray-500 underline"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-white border-t">
        <div className="flex justify-between items-center mb-4 text-lg">
          <span>Итого</span>
          <span className="font-medium">{getTotalPrice().toLocaleString()} ₽</span>
        </div>
        <Button className="w-full bg-black text-white hover:bg-gray-900 h-14 text-base font-normal">
          ОФОРМИТЬ ЗАКАЗ
        </Button>
      </div>
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button 
          className="relative cursor-pointer bg-transparent border-0" 
          type="button"
          aria-label="Open cart"
        >
          <ShoppingCart className="header-icon" />
          <span className="cart-counter">{cartItems.length}</span>
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-white p-0">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">КОРЗИНА</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        {cartItems.length === 0 ? <EmptyCart /> : <CartContent />}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
