import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GDPR = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1>Politica de confidențialitate (GDPR)</h1>
            
            <p className="lead">
              VLC CAR DEAL SRL respectă confidențialitatea datelor dumneavoastră personale și se angajează 
              să protejeze informațiile pe care ni le furnizați.
            </p>

            <h2>1. Informații generale</h2>
            <p>
              Această politică de confidențialitate descrie modul în care VLC CAR DEAL SRL colectează, 
              utilizează și protejează datele personale ale clienților săi, în conformitate cu Regulamentul 
              General privind Protecția Datelor (GDPR - Regulamentul UE 2016/679).
            </p>

            <h2>2. Date personale colectate</h2>
            <p>Colectăm următoarele categorii de date personale:</p>
            <ul>
              <li>Date de identificare: nume, prenume</li>
              <li>Date de contact: număr de telefon, adresă de e-mail</li>
              <li>Date privind interesele: mașinile pentru care ați solicitat informații</li>
            </ul>

            <h2>3. Scopul prelucrării datelor</h2>
            <p>Datele dumneavoastră personale sunt prelucrate în următoarele scopuri:</p>
            <ul>
              <li>Comunicarea cu privire la mașinile disponibile în stoc</li>
              <li>Răspunsul la solicitările dumneavoastră</li>
              <li>Îndeplinirea obligațiilor contractuale</li>
              <li>Marketing direct (doar cu consimțământul dumneavoastră)</li>
            </ul>

            <h2>4. Temeiul juridic al prelucrării</h2>
            <p>
              Prelucrăm datele dumneavoastră personale pe baza consimțământului dumneavoastră expres 
              și/sau pentru executarea unui contract încheiat cu dumneavoastră.
            </p>

            <h2>5. Drepturile dumneavoastră</h2>
            <p>În conformitate cu GDPR, aveți următoarele drepturi:</p>
            <ul>
              <li>Dreptul de acces la datele personale</li>
              <li>Dreptul la rectificarea datelor</li>
              <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
              <li>Dreptul la restricționarea prelucrării</li>
              <li>Dreptul la portabilitatea datelor</li>
              <li>Dreptul de a vă opune prelucrării</li>
              <li>Dreptul de a retrage consimțământul</li>
            </ul>

            <h2>6. Contact</h2>
            <p>
              Pentru orice întrebări privind prelucrarea datelor dumneavoastră personale, 
              ne puteți contacta la:
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

export default GDPR;
