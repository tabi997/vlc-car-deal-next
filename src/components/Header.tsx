import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Car } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex items-center gap-2 bg-gradient-primary bg-clip-text text-transparent">
              <Car className="h-6 w-6 text-primary" />
              <span>VLC CAR DEAL</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/masini" className="text-sm font-medium transition-colors hover:text-primary">
              Mașini
            </Link>
            <Link to="/despre" className="text-sm font-medium transition-colors hover:text-primary">
              Despre
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex gap-2"
              asChild
            >
              <a href="tel:+40735000000">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+40 735 000 000</span>
              </a>
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-gradient-primary hover:opacity-90"
              asChild
            >
              <a href="https://wa.me/40735000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile sticky CTAs */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-2 p-3 bg-card border-t shadow-lg">
        <Button
          className="flex-1 gap-2"
          variant="outline"
          asChild
        >
          <a href="tel:+40735000000">
            <Phone className="h-4 w-4" />
            Sună acum
          </a>
        </Button>
        <Button
          className="flex-1 gap-2 bg-gradient-primary hover:opacity-90"
          asChild
        >
          <a href="https://wa.me/40735000000" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
