import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Car className="h-6 w-6" />
              <span>VLC CAR DEAL</span>
            </div>
            <p className="text-sm opacity-90">
              Mașini verificate. Încredere reală.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Link-uri rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/masini" className="opacity-90 hover:opacity-100 transition-opacity">
                  Stoc mașini
                </Link>
              </li>
              <li>
                <Link to="/despre" className="opacity-90 hover:opacity-100 transition-opacity">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Informații legale</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/termeni" className="opacity-90 hover:opacity-100 transition-opacity">
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="opacity-90 hover:opacity-100 transition-opacity">
                  Politica GDPR
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="opacity-90 hover:opacity-100 transition-opacity">
                  Politica cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">București, România</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+40735000000" className="opacity-90 hover:opacity-100 transition-opacity">
                  +40 735 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@vlccardeal.ro" className="opacity-90 hover:opacity-100 transition-opacity">
                  contact@vlccardeal.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-sm opacity-90 space-y-2">
            <p>
              <strong>VLC CAR DEAL SRL</strong> | CUI: RO12345678 | Nr. Reg. Com.: J40/1234/2024
            </p>
            <p>
              © {new Date().getFullYear()} VLC CAR DEAL. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
