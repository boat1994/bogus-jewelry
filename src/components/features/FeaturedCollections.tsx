// src/components/features/FeaturedCollections.tsx
import React from 'react';
import FeaturedCard from '../ui/FeaturedCard'; // Import the FeaturedCard component

const FeaturedCollections: React.FC = () => {
  return (
    <section className="py-16 bg-charcoal-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-off-white">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeaturedCard
            imageSrc="https://via.placeholder.com/400x500.png?text=Silver+Collection" // Placeholder image
            title="Silver Collection"
            linkHref="/collections/silver"
          />
          <FeaturedCard
            imageSrc="https://via.placeholder.com/400x500.png?text=9k+Gold+Collection" // Placeholder image
            title="9k Gold Collection"
            linkHref="/collections/9k-gold"
          />
          <FeaturedCard
            imageSrc="https://via.placeholder.com/400x500.png?text=18k+Gold+Collection" // Placeholder image
            title="18k Gold Collection"
            linkHref="/collections/18k-gold"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
