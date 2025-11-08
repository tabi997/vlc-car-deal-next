import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import carsData from "@/data/cars.json";
import { filterCars, sortCars, type Car, type CarFilters, type SortOption } from "@/lib/carUtils";
import { SlidersHorizontal } from "lucide-react";

const Masini = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState<Car[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState<CarFilters>({
    make: searchParams.get("make") || undefined,
    priceMax: searchParams.get("priceMax") ? Number(searchParams.get("priceMax")) : undefined,
    yearMin: searchParams.get("yearMin") ? Number(searchParams.get("yearMin")) : undefined,
    yearMax: searchParams.get("yearMax") ? Number(searchParams.get("yearMax")) : undefined,
    fuelType: searchParams.get("fuel") || undefined,
    transmission: searchParams.get("transmission") || undefined,
  });

  useEffect(() => {
    let filtered = filterCars(carsData as Car[], filters);
    filtered = sortCars(filtered, sortBy);
    setCars(filtered);
  }, [filters, sortBy]);

  const handleFilterChange = (key: keyof CarFilters, value: any) => {
    const newFilters = { ...filters, [key]: value || undefined };
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({});
    setSearchParams({});
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 mb-16 md:mb-0">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Stocul nostru</h1>
            <p className="text-muted-foreground">
              {cars.length} {cars.length === 1 ? "mașină disponibilă" : "mașini disponibile"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <aside className={`lg:block ${showFilters ? "block" : "hidden"}`}>
              <Card>
                <CardHeader>
                  <CardTitle>Filtre</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="filter-make">Marca</Label>
                    <Select 
                      value={filters.make || ""} 
                      onValueChange={(value) => handleFilterChange("make", value)}
                    >
                      <SelectTrigger id="filter-make">
                        <SelectValue placeholder="Toate mărcile" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Toate mărcile</SelectItem>
                        <SelectItem value="BMW">BMW</SelectItem>
                        <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                        <SelectItem value="Audi">Audi</SelectItem>
                        <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                        <SelectItem value="Skoda">Skoda</SelectItem>
                        <SelectItem value="Toyota">Toyota</SelectItem>
                        <SelectItem value="Hyundai">Hyundai</SelectItem>
                        <SelectItem value="Mazda">Mazda</SelectItem>
                        <SelectItem value="Ford">Ford</SelectItem>
                        <SelectItem value="Peugeot">Peugeot</SelectItem>
                        <SelectItem value="Renault">Renault</SelectItem>
                        <SelectItem value="SEAT">SEAT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="filter-price">Preț maxim (EUR)</Label>
                    <Input
                      id="filter-price"
                      type="number"
                      placeholder="Ex: 30000"
                      value={filters.priceMax || ""}
                      onChange={(e) => handleFilterChange("priceMax", e.target.value ? Number(e.target.value) : undefined)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="filter-year-min">An de la</Label>
                    <Input
                      id="filter-year-min"
                      type="number"
                      placeholder="Ex: 2019"
                      value={filters.yearMin || ""}
                      onChange={(e) => handleFilterChange("yearMin", e.target.value ? Number(e.target.value) : undefined)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="filter-year-max">An până la</Label>
                    <Input
                      id="filter-year-max"
                      type="number"
                      placeholder="Ex: 2023"
                      value={filters.yearMax || ""}
                      onChange={(e) => handleFilterChange("yearMax", e.target.value ? Number(e.target.value) : undefined)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="filter-fuel">Combustibil</Label>
                    <Select 
                      value={filters.fuelType || ""} 
                      onValueChange={(value) => handleFilterChange("fuelType", value)}
                    >
                      <SelectTrigger id="filter-fuel">
                        <SelectValue placeholder="Toate" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Toate</SelectItem>
                        <SelectItem value="Benzină">Benzină</SelectItem>
                        <SelectItem value="Diesel">Diesel</SelectItem>
                        <SelectItem value="Hibrid">Hibrid</SelectItem>
                        <SelectItem value="Electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="filter-transmission">Transmisie</Label>
                    <Select 
                      value={filters.transmission || ""} 
                      onValueChange={(value) => handleFilterChange("transmission", value)}
                    >
                      <SelectTrigger id="filter-transmission">
                        <SelectValue placeholder="Toate" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Toate</SelectItem>
                        <SelectItem value="Manuală">Manuală</SelectItem>
                        <SelectItem value="Automată">Automată</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={resetFilters}
                  >
                    Resetează filtrele
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Cars Grid */}
            <div className="lg:col-span-3 space-y-6">
              {/* Sort and Filter Toggle */}
              <div className="flex items-center justify-between gap-4">
                <Button
                  variant="outline"
                  className="lg:hidden gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtre
                </Button>

                <div className="flex items-center gap-2 ml-auto">
                  <Label htmlFor="sort" className="whitespace-nowrap">Sortează:</Label>
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                    <SelectTrigger id="sort" className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Cele mai noi</SelectItem>
                      <SelectItem value="price-asc">Preț crescător</SelectItem>
                      <SelectItem value="price-desc">Preț descrescător</SelectItem>
                      <SelectItem value="year-desc">An descrescător</SelectItem>
                      <SelectItem value="mileage-asc">Km crescător</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Cars */}
              {cars.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      Nu am găsit nicio mașină cu aceste criterii. Încearcă să modifici filtrele.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Masini;
