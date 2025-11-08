import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { calculateMonthlyPayment } from "@/lib/carUtils";

interface FinanceEstimatorProps {
  price: number;
}

const FinanceEstimator = ({ price }: FinanceEstimatorProps) => {
  const [downPayment, setDownPayment] = useState(20);
  const [months, setMonths] = useState(60);
  const [interestRate, setInterestRate] = useState(6.9);

  const monthlyPayment = calculateMonthlyPayment(price, downPayment, months, interestRate);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculator rate</CardTitle>
        <CardDescription>Estimează rata lunară pentru această mașină</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Avans: {downPayment}%</Label>
            <span className="text-sm text-muted-foreground">
              {Math.round(price * downPayment / 100).toLocaleString('ro-RO')} EUR
            </span>
          </div>
          <Slider
            value={[downPayment]}
            onValueChange={(value) => setDownPayment(value[0])}
            min={0}
            max={50}
            step={5}
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Perioadă: {months} luni</Label>
            <span className="text-sm text-muted-foreground">{months / 12} ani</span>
          </div>
          <Slider
            value={[months]}
            onValueChange={(value) => setMonths(value[0])}
            min={12}
            max={84}
            step={12}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">Dobândă anuală (%)</Label>
          <Input
            id="interest"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
            step="0.1"
            min="0"
            max="20"
          />
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Rată lunară estimativă:</span>
            <span className="text-2xl font-bold text-primary">
              {monthlyPayment.toLocaleString('ro-RO')} RON
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            * Calculul este orientativ. Rata finală depinde de istoricul de credit și de instituția financiară.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinanceEstimator;
