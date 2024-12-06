import React from 'react';
import { Link } from 'react-scroll';
import { Instagram, MapPin, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Óticas KB</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                QNM 18 Conjunto E Lote 5 Loja 1, Ceilândia
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                (61) 99407-0676
              </p>
              <a
                href="https://www.instagram.com/oticaskb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-300 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @oticaskb
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['home', 'products', 'benefits', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-gray-300 cursor-pointer transition-colors capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 9h às 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center space-y-2">
          <p>&copy; {new Date().getFullYear()} Óticas KB. Todos os direitos reservados.</p>
          <p>Desenvolvido por <strong>Labora Design</strong></p>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;