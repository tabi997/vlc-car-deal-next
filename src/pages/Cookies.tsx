import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1>Politica de cookies</h1>
            
            <p className="lead">
              Acest site folosește cookie-uri pentru a îmbunătăți experiența dumneavoastră de navigare.
            </p>

            <h2>Ce sunt cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere text mici care sunt stocate pe dispozitivul dumneavoastră atunci 
              când vizitați un site web. Acestea ajută site-ul să își amintească informații despre vizita 
              dumneavoastră, cum ar fi preferințele dumneavoastră.
            </p>

            <h2>Tipuri de cookie-uri utilizate</h2>
            
            <h3>Cookie-uri strict necesare</h3>
            <p>
              Aceste cookie-uri sunt esențiale pentru funcționarea corectă a site-ului web și nu pot fi 
              dezactivate în sistemele noastre. Acestea sunt setate de obicei doar ca răspuns la acțiunile 
              efectuate de dumneavoastră.
            </p>

            <h3>Cookie-uri de performanță</h3>
            <p>
              Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic, astfel încât să putem 
              măsura și îmbunătăți performanța site-ului nostru. Ne ajută să știm care pagini sunt cele mai 
              populare și să vedem cum se deplasează vizitatorii pe site.
            </p>

            <h3>Cookie-uri funcționale</h3>
            <p>
              Aceste cookie-uri permit site-ului să ofere funcționalitate îmbunătățită și personalizare. 
              Acestea pot fi setate de noi sau de furnizori terți ale căror servicii le-am adăugat pe 
              paginile noastre.
            </p>

            <h2>Gestionarea cookie-urilor</h2>
            <p>
              Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile 
              care sunt deja pe computerul dumneavoastră și puteți seta majoritatea browserelor să le 
              împiedice plasarea.
            </p>

            <h2>Mai multe informații</h2>
            <p>
              Pentru mai multe informații despre politica noastră de confidențialitate, vă rugăm să consultați 
              pagina de <a href="/gdpr">Politica GDPR</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru, ne puteți contacta la:
            </p>
            <ul>
              <li>Email: contact@vlccardeal.ro</li>
              <li>Telefon: +40 735 000 000</li>
            </ul>

            <p className="text-sm text-muted-foreground mt-8">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
