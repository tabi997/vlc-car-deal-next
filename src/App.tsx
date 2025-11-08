import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Masini from "./pages/Masini";
import MasiniDetail from "./pages/MasiniDetail";
import Despre from "./pages/Despre";
import Contact from "./pages/Contact";
import GDPR from "./pages/GDPR";
import Cookies from "./pages/Cookies";
import Termeni from "./pages/Termeni";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/masini" element={<Masini />} />
          <Route path="/masini/:slug" element={<MasiniDetail />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/termeni" element={<Termeni />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
