export const EUR_TO_RON = 5;

export const formatPrice = (priceEur: number) => {
  const priceRon = Math.round(priceEur * EUR_TO_RON);
  return {
    eur: `€${priceEur.toLocaleString('ro-RO')}`,
    ron: `${priceRon.toLocaleString('ro-RO')} RON`
  };
};

export const calculateMonthlyPayment = (
  price: number,
  downPaymentPercent: number,
  months: number,
  annualInterestRate: number
): number => {
  const downPayment = price * (downPaymentPercent / 100);
  const loanAmount = price - downPayment;
  const monthlyRate = annualInterestRate / 100 / 12;
  
  if (monthlyRate === 0) {
    return loanAmount / months;
  }
  
  const monthlyPayment = 
    loanAmount * 
    (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
    (Math.pow(1 + monthlyRate, months) - 1);
  
  return Math.round(monthlyPayment * EUR_TO_RON);
};

export interface Car {
  id: string;
  slug: string;
  make: string;
  model: string;
  version: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  engineSize: number;
  power: number;
  color: string;
  vin: string;
  owners: number;
  negotiable: boolean;
  vatDeductible: boolean;
  features: string[];
  description: string;
  images: string[];
}

export interface CarFilters {
  make?: string;
  model?: string;
  fuelType?: string;
  transmission?: string;
  yearMin?: number;
  yearMax?: number;
  priceMax?: number;
  mileageMax?: number;
}

export const filterCars = (cars: Car[], filters: CarFilters): Car[] => {
  return cars.filter(car => {
    if (filters.make && car.make !== filters.make) return false;
    if (filters.model && car.model !== filters.model) return false;
    if (filters.fuelType && car.fuel !== filters.fuelType) return false;
    if (filters.transmission && car.transmission !== filters.transmission) return false;
    if (filters.yearMin && car.year < filters.yearMin) return false;
    if (filters.yearMax && car.year > filters.yearMax) return false;
    if (filters.priceMax && car.price > filters.priceMax) return false;
    if (filters.mileageMax && car.mileage > filters.mileageMax) return false;
    return true;
  });
};

export type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'year-desc' | 'mileage-asc';

export const sortCars = (cars: Car[], sortBy: SortOption): Car[] => {
  const sorted = [...cars];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => b.year - a.year);
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'year-desc':
      return sorted.sort((a, b) => b.year - a.year);
    case 'mileage-asc':
      return sorted.sort((a, b) => a.mileage - b.mileage);
    default:
      return sorted;
  }
};
