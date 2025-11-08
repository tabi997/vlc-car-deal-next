import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface LeadFormProps {
  carTitle: string;
  carSlug: string;
}

const LeadForm = ({ carTitle, carSlug }: LeadFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: `Sunt interesat de ${carTitle}. Aș dori mai multe informații.`,
    gdprConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "Eroare",
        description: "Trebuie să fii de acord cu prelucrarea datelor personale.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Lead submission:", {
      ...formData,
      carSlug,
      timestamp: new Date().toISOString(),
    });

    setLoading(false);
    toast({
      title: "Mulțumim pentru solicitare!",
      description: "Vă vom contacta în cel mai scurt timp.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: `Sunt interesat de ${carTitle}. Aș dori mai multe informații.`,
      gdprConsent: false,
    });
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Solicită informații</CardTitle>
        <CardDescription>Completează formularul și te contactăm imediat</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nume complet *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Ion Popescu"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Ex: 0735 000 000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Ex: ion@email.ro"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mesaj</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Detalii suplimentare..."
              rows={4}
            />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="gdpr"
              checked={formData.gdprConsent}
              onCheckedChange={(checked) => setFormData({ ...formData, gdprConsent: checked as boolean })}
            />
            <Label htmlFor="gdpr" className="text-sm leading-tight cursor-pointer">
              Sunt de acord cu prelucrarea datelor personale conform{" "}
              <a href="/gdpr" className="text-primary hover:underline">
                politicii de confidențialitate
              </a>
              . *
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:opacity-90"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Se trimite...
              </>
            ) : (
              "Trimite solicitarea"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
