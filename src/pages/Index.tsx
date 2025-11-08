import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPanel from "@/components/SearchPanel";
import CarCard from "@/components/CarCard";
import InfoStrip from "@/components/InfoStrip";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import carsData from "@/data/cars.json";
import type { Car } from "@/lib/carUtils";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [latestCars, setLatestCars] = useState<Car[]>([]);

  useEffect(() => {
    const cars = carsData as Car[];
    setLatestCars(cars.slice(0, 8));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 82, 204, 0.95), rgba(0, 195, 255, 0.95)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              VLC CAR DEAL
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              Mașini verificate. Încredere reală.
            </p>
            <p className="text-lg text-white/80">
              Descoperă cele mai bune oferte de mașini rulate din România
            </p>
          </div>

          <SearchPanel />
        </div>
      </section>

      {/* Latest Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ultimele anunțuri</h2>
              <p className="text-muted-foreground">Cele mai noi mașini adăugate în stoc</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex gap-2">
              <Link to="/masini">
                Vezi tot stocul
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild className="gap-2">
              <Link to="/masini">
                Vezi tot stocul
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <InfoStrip />

      {/* About Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Despre noi</h3>
              <p className="text-muted-foreground">
                VLC CAR DEAL este unul dintre cei mai de încredere dealeri de mașini rulate din România. 
                Cu o experiență de peste 10 ani în domeniu, oferim doar vehicule verificate și cu istoric transparent.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Avantajele noastre</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Garanție inclusă pentru toate mașinile</li>
                <li>✓ Istoric complet verificat</li>
                <li>✓ Finanțare cu dobândă avantajoasă</li>
                <li>✓ Test drive disponibil</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Parteneri</h3>
              <p className="text-muted-foreground">
                Colaborăm cu cele mai importante instituții financiare din România pentru a-ți oferi 
                cele mai bune soluții de finanțare adaptate nevoilor tale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
