import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Exames de Vista Grátis!',
      subtitle: 'Agende seu horário e cuide da sua saúde visual',
    },
    {
      image: 'https://images.pexels.com/photos/8433432/pexels-photo-8433432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Óculos com Estilo e Conforto',
      subtitle: 'As melhores marcas com condições especiais',
    },
    {
      image: 'https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&q=80',
      title: 'Atendimento Personalizado',
      subtitle: 'Profissionais especializados para melhor te atender',
    },
  ];

  return (
    <section id="home" className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 hero-slide-content flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                      {slide.subtitle}
                    </p>
                    <a
                      href="https://wa.me/5561994070676"
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Agende seu exame agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;