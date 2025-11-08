import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/GalleryCarousel";
import LeadForm from "@/components/LeadForm";
import FinanceEstimator from "@/components/FinanceEstimator";
import CarCard from "@/components/CarCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, MessageCircle, Calendar, Gauge, Fuel, Settings, Palette, Hash, Users } from "lucide-react";
import carsData from "@/data/cars.json";
import { formatPrice, type Car } from "@/lib/carUtils";

const MasiniDetail = () => {
  const { slug } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [relatedCars, setRelatedCars] = useState<Car[]>([]);

  useEffect(() => {
    const allCars = carsData as Car[];
    const foundCar = allCars.find((c) => c.slug === slug);
    setCar(foundCar || null);

    if (foundCar) {
      const related = allCars
        .filter((c) => c.make === foundCar.make && c.id !== foundCar.id)
        .slice(0, 4);
      setRelatedCars(related);

      // Update page title
      document.title = `${foundCar.make} ${foundCar.model} ${foundCar.version} - VLC CAR DEAL`;
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug]);

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Mașină negăsită</h1>
            <p className="text-muted-foreground mb-6">
              Ne pare rău, dar nu am găsit mașina pe care o cauți.
            </p>
            <Button asChild>
              <Link to="/masini">Înapoi la stoc</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const price = formatPrice(car.price);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 mb-16 md:mb-0">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Acasă</Link>
            {" / "}
            <Link to="/masini" className="hover:text-primary">Mașini</Link>
            {" / "}
            <span className="text-foreground">{car.make} {car.model}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Price */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {car.make} {car.model}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">{car.version}</p>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-primary">{price.eur}</p>
                    <p className="text-muted-foreground">≈ {price.ron}</p>
                  </div>
                  {car.negotiable && (
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      Negociabil
                    </Badge>
                  )}
                  {car.vatDeductible && (
                    <Badge variant="outline" className="text-base px-3 py-1">
                      TVA deductibil
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button className="gap-2 bg-gradient-primary hover:opacity-90" asChild>
                    <a href="https://wa.me/40735000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="tel:+40735000000">
                      <Phone className="h-4 w-4" />
                      Sună acum
                    </a>
                  </Button>
                </div>
              </div>

              {/* Gallery */}
              <GalleryCarousel images={car.images} alt={`${car.make} ${car.model} ${car.version}`} />

              {/* Specs */}
              <Card>
                <CardHeader>
                  <CardTitle>Specificații tehnice</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">An fabricație</p>
                        <p className="font-semibold">{car.year}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Gauge className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Kilometraj</p>
                        <p className="font-semibold">{car.mileage.toLocaleString('ro-RO')} km</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Fuel className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Combustibil</p>
                        <p className="font-semibold">{car.fuel}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Transmisie</p>
                        <p className="font-semibold">{car.transmission}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Capacitate motor</p>
                        <p className="font-semibold">{car.engineSize} cm³</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Gauge className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Putere</p>
                        <p className="font-semibold">{car.power} CP</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Palette className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Culoare</p>
                        <p className="font-semibold">{car.color}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Proprietari anteriori</p>
                        <p className="font-semibold">{car.owners}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:col-span-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Hash className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">VIN</p>
                        <p className="font-semibold font-mono">{car.vin}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Dotări și echipamente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Descriere</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{car.description}</p>
                </CardContent>
              </Card>

              {/* Finance Estimator */}
              <FinanceEstimator price={car.price} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <LeadForm carTitle={`${car.make} ${car.model} ${car.version}`} carSlug={car.slug} />
            </div>
          </div>

          {/* Related Cars */}
          {relatedCars.length > 0 && (
            <div className="mt-16">
              <Separator className="mb-8" />
              <h2 className="text-3xl font-bold mb-8">Mașini similare</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedCars.map((relatedCar) => (
                  <CarCard key={relatedCar.id} car={relatedCar} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MasiniDetail;
