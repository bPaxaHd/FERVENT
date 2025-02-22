
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CustomOrderSection = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/6d5b/b7fb/e0e7f851f9d52b143d6f75ff439b1f7b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZXci8kgTDE-BlXEyAF4J2CiBn94c-52s9iIEe1rG3-jW22nL71743zYdMeoxZpOySwkxDqUcr6oVNwz95RvgwsGj2IlwZkTF1OuNf4FUHCvortOsUlFrJsiRCSGLW1BL~bsM5uETI-oXHUPa0Ux4QuRkliKJKqcfBZyQk2CVjOPTMoxkqJeK2vvzJDBciZiUj8o-3AFwzThIbeBWjjyzmiK--wd~NdoOGpqfdCIdbo334wDKI~-JTwTONp1r7elgDeFnDeEDjHaTnzTiYChJCxwEaSDQHZnVaCJ8U2TB5lXwZrK8G8te9zzMT3rwmQBFfhjpD2pmgOxfd1t9nrucXA__")'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="rounded-full bg-white/90 p-4 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <h2 className="text-3xl mb-4 font-light text-[#515559]">НЕ НАШЛИ ПОДХОДЯЩИЙ ТОВАР?</h2>
          <p className="mb-8 text-[#515559]">
            Мы найдем для вас любую интересующую позицию и доставим в кратчайшие сроки
          </p>
          <Button 
            onClick={() => navigate('/custom-order')}
            className="text-white px-8 py-6 h-auto text-base bg-[#515559] hover:bg-[#626a6f]"
          >
            ОФОРМИТЬ ИНДИВИДУАЛЬНЫЙ ЗАКАЗ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderSection;
