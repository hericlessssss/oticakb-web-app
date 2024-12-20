import React from 'react';
import { Instagram, ExternalLink, Heart } from 'lucide-react';
import { instagramPosts } from '../data/instagram-posts';

const InstagramFeed = () => {
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
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-gray-200 rounded-lg"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
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