
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/home/HeroSlider';
import BrandsSection from '@/components/home/BrandsSection';
import ProductsGrid from '@/components/home/ProductsGrid';
import RecommendedProducts from '@/components/home/RecommendedProducts';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import CustomOrderSection from '@/components/home/CustomOrderSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black max-w-[1920px] mx-auto">
      <Header />
      <div className="w-full">
        <HeroSlider />
        <ProductsGrid />
        <RecommendedProducts />
        <AdvantagesSection />
        <BrandsSection />
        <CustomOrderSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
