import React from 'react';
import { Eye, CreditCard, Truck, Headphones } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Exames de vista com desconto',
      description: 'Realize seu exame com profissionais qualificados sem custo adicional',
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Parcelamento Facilitado',
      description: 'Parcele suas compras em até 10x sem juros',
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Entrega Rápida',
      description: 'Receba seus óculos no prazo combinado',
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Atendimento Personalizado',
      description: 'Suporte especializado para melhor atender suas necessidades',
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Óticas KB?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-black mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;