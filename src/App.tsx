
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import CustomOrder from "./pages/CustomOrder";
import NotFound from "./pages/NotFound";
import FavoritesPage from "./pages/Favorites";
import Cart from "./pages/Cart";
import TopBar from "./components/layout/TopBar";
import { useIsMobile } from "./hooks/use-mobile";

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-black">
          {!isMobile && <TopBar />}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/custom-order" element={<CustomOrder />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
