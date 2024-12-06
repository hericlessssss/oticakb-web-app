import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Início', to: 'home' },
    { title: 'Produtos', to: 'products' },
    { title: 'Vantagens', to: 'benefits' },
    { title: 'Depoimentos', to: 'testimonials' },
    { title: 'Contato', to: 'contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/c3uof0X.jpeg" 
              alt="Ótica KB Logo" 
              className="h-12 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105" 
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-link text-gray-800 hover:text-black cursor-pointer font-medium transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
            <a
              href="https://wa.me/5561994070676?text=Olá!%20Eu%20estou%20interessado(a)%20em%20agendar%20um%20exame%20de%20vista%20ou%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar%3F"
              className="bg-black text-white px-6 py-2.5 rounded-full flex items-center hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-black transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="py-3 text-gray-800 hover:text-black cursor-pointer transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <a
                href="https://wa.me/5561994070676?text=Olá!%20Eu%20estou%20interessado(a)%20em%20agendar%20um%20exame%20de%20vista%20ou%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar%3F"
                className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-center mt-4 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
