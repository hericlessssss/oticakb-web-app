import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  const instagramPosts = [
    {
      image: 'https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&q=80',
      likes: 45,
      caption: 'Nova coleção de óculos de sol chegando! 🕶️ #OticaKB #Moda',
    },
    {
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80',
      likes: 38,
      caption: 'Faça seu exame de vista gratuitamente! Agende já 👓 #SaudeVisual',
    },
    {
      image: 'https://images.unsplash.com/photo-1589642380614-4a8c2147b857?auto=format&fit=crop&q=80',
      likes: 52,
      caption: 'Óculos de grau com até 50% de desconto! 🎉 #Promocao',
    },
    {
      image: 'https://images.unsplash.com/photo-1544923408-75c5cef46f14?auto=format&fit=crop&q=80',
      likes: 41,
      caption: 'Atendimento personalizado para você! ✨ #Qualidade',
    },
    {
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80',
      likes: 63,
      caption: 'As últimas tendências em óculos você encontra aqui! 🌟 #Estilo',
    },
    {
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80',
      likes: 47,
      caption: 'Venha conhecer nossa nova loja! 🏪 #Ceilândia',
    },
  ];

  return (
    <section id="instagram" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Siga-nos no Instagram</h2>
          <a
            href="https://www.instagram.com/oticaskb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@oticaskb</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/oticaskb/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-gray-200 rounded-lg"
            >
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <p className="font-semibold mb-2">❤️ {post.likes}</p>
                  <p className="text-sm line-clamp-2">{post.caption}</p>
                  <ExternalLink className="w-6 h-6 mx-auto mt-2" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/oticaskb/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;