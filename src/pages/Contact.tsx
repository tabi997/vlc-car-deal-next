import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 text-center">Contact</h1>
            <p className="text-muted-foreground text-center mb-12">
              Suntem aici să răspundem la toate întrebările tale
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informații de contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Telefon</p>
                        <a href="tel:+40735000000" className="text-muted-foreground hover:text-primary">
                          +40 735 000 000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">WhatsApp</p>
                        <a 
                          href="https://wa.me/40735000000" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          +40 735 000 000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:contact@vlccardeal.ro" className="text-muted-foreground hover:text-primary">
                          contact@vlccardeal.ro
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Adresă</p>
                        <p className="text-muted-foreground">București, România</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Program</p>
                        <div className="text-muted-foreground text-sm space-y-1">
                          <p>Luni - Vineri: 09:00 - 18:00</p>
                          <p>Sâmbătă: 10:00 - 16:00</p>
                          <p>Duminică: Închis</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>VLC CAR DEAL SRL</strong><br />
                      CUI: RO12345678<br />
                      Nr. Reg. Com.: J40/1234/2024<br />
                      București, România
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Trimite-ne un mesaj</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Nume *</Label>
                        <Input id="contact-name" placeholder="Numele tău" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Telefon *</Label>
                        <Input id="contact-phone" type="tel" placeholder="0735 000 000" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" placeholder="email@exemplu.ro" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subiect</Label>
                      <Input id="contact-subject" placeholder="Subiectul mesajului" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Mesaj *</Label>
                      <Textarea 
                        id="contact-message" 
                        placeholder="Scrie-ne mesajul tău aici..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                      Trimite mesajul
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
