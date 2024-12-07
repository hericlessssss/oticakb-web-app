import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Início', to: 'home' },
    { title: 'Produtos', to: 'products' },
    { title: 'Vantagens', to: 'benefits' },
    { title: 'Depoimentos', to: 'testimonials' },
    { title: 'Contato', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/c3uof0X.jpeg" 
              alt="Ótica KB Logo" 
              className="h-10 md:h-12 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105" 
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-link text-gray-800 hover:text-black cursor-pointer font-medium transition-colors duration-300 text-sm lg:text-base"
              >
                {item.title}
              </Link>
            ))}
            <a
              href="https://wa.me/5561994070676?text=Olá!%20Eu%20estou%20interessado(a)%20em%20agendar%20um%20exame%20de%20vista%20ou%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar%3F"
              className="bg-black text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-full flex items-center hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-black transition-colors duration-300 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 h-full">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-black"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-800 hover:text-black font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <a
                href="https://wa.me/5561994070676?text=Olá!%20Eu%20estou%20interessado(a)%20em%20agendar%20um%20exame%20de%20vista%20ou%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar%3F"
                className="bg-black text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;