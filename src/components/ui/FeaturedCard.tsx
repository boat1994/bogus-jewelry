// src/components/ui/FeaturedCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedCardProps {
  imageSrc: string;
  title: string;
  linkHref: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ imageSrc, title, linkHref }) => {
  return (
    <Link href={linkHref} className="block group">
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-off-white group-hover:text-bronze transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
};

export default FeaturedCard;
