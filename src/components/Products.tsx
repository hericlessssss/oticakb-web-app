import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Products = () => {
  const products = [
    {
      name: 'Ray-Ban Aviator Classic',
      type: 'Óculos de Sol',
      brand: 'Ray-Ban',
      price: 'R$ 789,00',
      images: [
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80',
      ],
    },
    {
      name: 'Oakley Holbrook',
      type: 'Óculos de Sol',
      brand: 'Oakley',
      price: 'R$ 659,00',
      images: [
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80',
      ],
    },
    {
      name: 'Vogue VO5239',
      type: 'Óculos de Grau',
      brand: 'Vogue',
      price: 'R$ 459,00',
      images: [
        'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80',
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
                    href="https://wa.me/5561994070676"
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