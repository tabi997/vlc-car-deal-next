import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const SearchPanel = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    priceMax: "",
    yearMin: "",
    yearMax: "",
    fuel: "",
    transmission: "",
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    navigate(`/masini?${params.toString()}`);
  };

  return (
    <div className="bg-card rounded-xl shadow-card p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="make">Marca</Label>
          <Select value={filters.make} onValueChange={(value) => setFilters({ ...filters, make: value })}>
            <SelectTrigger id="make">
              <SelectValue placeholder="Selectează marca" />
            </SelectTrigger>
            <SelectContent>
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
          <Label htmlFor="priceMax">Preț maxim (EUR)</Label>
          <Input
            id="priceMax"
            type="number"
            placeholder="Ex: 30000"
            value={filters.priceMax}
            onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="yearMin">An de la</Label>
          <Input
            id="yearMin"
            type="number"
            placeholder="Ex: 2019"
            value={filters.yearMin}
            onChange={(e) => setFilters({ ...filters, yearMin: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="yearMax">An până la</Label>
          <Input
            id="yearMax"
            type="number"
            placeholder="Ex: 2023"
            value={filters.yearMax}
            onChange={(e) => setFilters({ ...filters, yearMax: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fuel">Combustibil</Label>
          <Select value={filters.fuel} onValueChange={(value) => setFilters({ ...filters, fuel: value })}>
            <SelectTrigger id="fuel">
              <SelectValue placeholder="Selectează" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Benzină">Benzină</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="Hibrid">Hibrid</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="transmission">Transmisie</Label>
          <Select value={filters.transmission} onValueChange={(value) => setFilters({ ...filters, transmission: value })}>
            <SelectTrigger id="transmission">
              <SelectValue placeholder="Selectează" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Manuală">Manuală</SelectItem>
              <SelectItem value="Automată">Automată</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        className="w-full mt-6 gap-2 bg-gradient-primary hover:opacity-90"
        size="lg"
        onClick={handleSearch}
      >
        <Search className="h-5 w-5" />
        Caută mașină
      </Button>
    </div>
  );
};

export default SearchPanel;
