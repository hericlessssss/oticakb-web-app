import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5561994070676?text=Olá!%20Eu%20estou%20interessado(a)%20em%20agendar%20um%20exame%20de%20vista%20ou%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-24 right-8 z-50 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;