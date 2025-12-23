// src/components/features/BrandStory.tsx
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button'; // Import the Button component
import Link from 'next/link';

const BrandStory: React.FC = () => {
  return (
    <section className="py-16 bg-charcoal-black">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Column */}
        <div>
          <Image
            src="/images/brand-story.jpg" // Placeholder black & white image
            alt="Our Brand Story"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-lg grayscale" // grayscale for black & white effect
          />
        </div>

        {/* Text Column */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Brand Story</h2>
          <p className="text-off-white mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <Link href="/our-story">
            <Button variant="secondary">Discover Our Story</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
