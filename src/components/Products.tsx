import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Products = () => {
  const products = [
    {
      name: 'Keliel Berg Classic',
      type: 'Óculos de Sol',
      brand: 'Keliel Berg',
      price: 'a partir de R$ 199,00',
      images: [
        'https://i.imgur.com/LAlZ5jA.png',
        'https://i.imgur.com/jEBQUZb.png',
        'https://i.imgur.com/5dwcKCg.png',
      ],
    },
    {
      name: 'Keliel Berg Holbrook',
      type: 'Óculos de Sol',
      brand: 'Keliel Berg',
      price: 'a partir de R$ 199,00',
      images: [
        'https://i.imgur.com/lGljrwh.png',
        'https://i.imgur.com/06XQZDK.png',
        'https://i.imgur.com/eWMjHqK.png',
      ],
    },
    {
      name: 'Keliel Berg VO5239',
      type: 'Óculos de Grau',
      brand: 'Keliel Berg',
      price: 'a partir de R$ 179,00',
      images: [
        'https://i.imgur.com/Xf1RgIi.png',
        'https://i.imgur.com/4LSPHTM.png',
        'https://i.imgur.com/4fWSqFg.png',
      ],
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-64"
              >
                {product.images.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex}>
                    <img
                      src={image}
                      alt={`${product.name} - Imagem ${imageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-1">{product.brand}</p>
                <p className="text-gray-600 mb-4">{product.type}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <a
                    href="https://wa.me/5561994070676?text=Olá!%20Eu%20estou%20interessado(a)%20em%20agendar%20um%20exame%20de%20vista%20ou%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar%3F"
                    className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Ver mais detalhes
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;