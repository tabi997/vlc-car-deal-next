import { Shield, TrendingUp, CreditCard, CheckCircle } from "lucide-react";

const InfoStrip = () => {
  const features = [
    {
      icon: Shield,
      title: "Garanție inclusă",
      description: "Toate mașinile cu garanție"
    },
    {
      icon: TrendingUp,
      title: "Program Buy-back",
      description: "Cumpărăm mașina ta rulate"
    },
    {
      icon: CreditCard,
      title: "Finanțare facilă",
      description: "Rate personalizate"
    },
    {
      icon: CheckCircle,
      title: "Kilometri reali",
      description: "Istoric verificat și certificat"
    }
  ];

  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg flex-shrink-0">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoStrip;
