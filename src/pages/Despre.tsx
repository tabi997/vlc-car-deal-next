import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const Despre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Despre VLC CAR DEAL</h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground mb-6">
                VLC CAR DEAL este unul dintre cei mai de încredere dealeri de mașini rulate din România. 
                Cu o experiență de peste 10 ani în domeniu, oferim doar vehicule verificate și cu istoric transparent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Siguranță și încredere</h3>
                    <p className="text-sm text-muted-foreground">
                      Toate mașinile noastre sunt verificate tehnic și au istoric complet transparent.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Calitate premium</h3>
                    <p className="text-sm text-muted-foreground">
                      Selecție riguroasă a vehiculelor, doar cele mai bune oferte ajung în showroom-ul nostru.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Echipă dedicată</h3>
                    <p className="text-sm text-muted-foreground">
                      Consultanți auto cu experiență gata să te ajute să găsești mașina perfectă.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Soluții de finanțare</h3>
                    <p className="text-sm text-muted-foreground">
                      Parteneri bancari de top pentru cele mai bune rate și condiții de creditare.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Misiunea noastră</h2>
              <p className="text-muted-foreground mb-4">
                Să oferim clienților noștri cea mai bună experiență de cumpărare a unei mașini rulate, 
                prin transparență totală, prețuri corecte și servicii de calitate.
              </p>
              <p className="text-muted-foreground">
                Credem că fiecare client merită să conducă o mașină sigură, fiabilă și la un preț corect. 
                De aceea, fiecare vehicul din stocul nostru trece prin verificări riguroase și vine cu garanție inclusă.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Despre;
