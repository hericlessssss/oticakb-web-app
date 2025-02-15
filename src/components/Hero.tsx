import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1550455491-9d15842c18f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Exames de vista com desconto',
      subtitle: 'Agende seu horário e cuide da sua saúde visual',
    },
    {
      image: 'https://images.unsplash.com/photo-1556895349-661061f64fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Óculos com estilo e conforto',
      subtitle: 'Os melhores modelos com condições especiais',
    },
    {
      image: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Atendimento personalizado',
      subtitle: 'Profissionais especializados para melhor te atender',
    },
  ];

  return (
    <section id="home" className="relative h-[100vh] md:h-screen">
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
              role="img"
              aria-label={slide.title}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:via-black/30 md:to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-lg md:max-w-xl text-white">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 opacity-90">
                      {slide.subtitle}
                    </p>
                    <a
                      href="https://wa.me/5561994070676?text=Olá!%20Eu%20estou%20interessado(a)%20em%20agendar%20um%20exame%20de%20vista%20ou%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar%3F"
                      className="inline-block bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
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