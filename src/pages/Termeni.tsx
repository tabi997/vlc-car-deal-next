import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Termeni = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1>Termeni și condiții</h1>
            
            <p className="lead">
              Vă rugăm să citiți cu atenție acești termeni și condiții înainte de a utiliza serviciile 
              VLC CAR DEAL SRL.
            </p>

            <h2>1. Informații generale</h2>
            <p>
              Prezentii termeni și condiții reglementează utilizarea site-ului web și serviciilor oferite 
              de VLC CAR DEAL SRL, cu sediul în București, România, CUI RO12345678, Nr. Reg. Com. J40/1234/2024.
            </p>

            <h2>2. Descrierea serviciilor</h2>
            <p>
              VLC CAR DEAL oferă servicii de vânzare de autovehicule second-hand, cu verificare completă 
              a istoricului și stării tehnice a fiecărui vehicul comercializat.
            </p>

            <h3>Serviciile includ:</h3>
            <ul>
              <li>Vânzare autovehicule verificate</li>
              <li>Asistență în obținerea finanțării</li>
              <li>Servicii de evaluare vehicule</li>
              <li>Servicii buy-back</li>
              <li>Garanție pentru vehiculele comercializate</li>
            </ul>

            <h2>3. Prețuri și modalități de plată</h2>
            <p>
              Toate prețurile afișate pe site sunt exprimate în EUR și includ TVA, cu excepția cazurilor 
              în care se menționează explicit contrariul. Prețurile pot fi negociabile pentru anumite vehicule.
            </p>

            <h3>Modalități de plată acceptate:</h3>
            <ul>
              <li>Transfer bancar</li>
              <li>Numerar</li>
              <li>Leasing / Credit auto</li>
            </ul>

            <h2>4. Garanție</h2>
            <p>
              Toate vehiculele comercializate beneficiază de garanție conform legislației în vigoare. 
              Detaliile specifice privind garanția pentru fiecare vehicul sunt menționate în contract.
            </p>

            <h2>5. Test drive</h2>
            <p>
              Oferim posibilitatea efectuării unui test drive pentru vehiculele din stoc, programat în 
              prealabil. Pentru efectuarea test drive-ului este necesară prezentarea unui act de identitate 
              valid și a permisului de conducere.
            </p>

            <h2>6. Politica de returnare</h2>
            <p>
              Conform legislației aplicabile, clienții au dreptul de returnare în anumite condiții 
              specificate în contractul de vânzare-cumpărare.
            </p>

            <h2>7. Limitarea răspunderii</h2>
            <p>
              VLC CAR DEAL SRL nu își asumă răspunderea pentru:
            </p>
            <ul>
              <li>Informații inexacte furnizate de client</li>
              <li>Utilizarea necorespunzătoare a vehiculului după vânzare</li>
              <li>Daune indirecte sau consecințiale</li>
            </ul>

            <h2>8. Protecția datelor personale</h2>
            <p>
              Prelucrarea datelor personale se face în conformitate cu GDPR și cu{" "}
              <a href="/gdpr">Politica noastră de confidențialitate</a>.
            </p>

            <h2>9. Modificarea termenilor și condițiilor</h2>
            <p>
              VLC CAR DEAL își rezervă dreptul de a modifica acești termeni și condiții în orice moment, 
              fără notificare prealabilă. Versiunea actualizată va fi publicată pe site.
            </p>

            <h2>10. Legea aplicabilă și jurisdicția</h2>
            <p>
              Prezentii termeni și condiții sunt guvernați de legea română. Orice dispută va fi soluționată 
              de către instanțele competente din București, România.
            </p>

            <h2>11. Contact</h2>
            <p>
              Pentru orice întrebări privind acești termeni și condiții, ne puteți contacta la:
            </p>
            <ul>
              <li>Email: contact@vlccardeal.ro</li>
              <li>Telefon: +40 735 000 000</li>
              <li>Adresă: București, România</li>
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

export default Termeni;
