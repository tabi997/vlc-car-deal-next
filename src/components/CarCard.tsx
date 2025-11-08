import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Fuel, Gauge, Settings } from "lucide-react";
import { formatPrice, type Car } from "@/lib/carUtils";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const price = formatPrice(car.price);

  return (
    <Card className="group overflow-hidden hover:shadow-card-hover transition-all duration-300">
      <Link to={`/masini/${car.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={car.images[0]}
            alt={`${car.make} ${car.model} ${car.version}`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {car.negotiable && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
              Negociabil
            </Badge>
          )}
        </div>
      </Link>

      <CardContent className="p-4 space-y-3">
        <div>
          <Link to={`/masini/${car.slug}`}>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {car.make} {car.model}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground">{car.version}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Gauge className="h-4 w-4" />
            <span>{car.mileage.toLocaleString('ro-RO')} km</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Fuel className="h-4 w-4" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Settings className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-primary">{price.eur}</p>
          <p className="text-sm text-muted-foreground">≈ {price.ron}</p>
        </div>
        <Button asChild className="bg-gradient-primary hover:opacity-90">
          <Link to={`/masini/${car.slug}`}>Vezi detalii</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
