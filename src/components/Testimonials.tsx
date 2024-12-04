import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      rating: 5,
      comment: 'Atendimento excepcional! Os profissionais são muito atenciosos e os preços são justos.',
    },
    {
      name: 'Carlos Santos',
      rating: 5,
      comment: 'Ótima experiência na compra dos meus óculos. Entrega rápida e produto de qualidade.',
    },
    {
      name: 'Marina Oliveira',
      rating: 5,
      comment: 'Excelente atendimento e variedade de produtos. Recomendo a todos!',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;