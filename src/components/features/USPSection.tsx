// src/components/features/USPSection.tsx
import React from 'react';

interface USPBlockProps {
  icon: string; // Placeholder for icon (e.g., SVG path or class name)
  title: string;
  description: string;
}

const USPBlock: React.FC<USPBlockProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-charcoal-black rounded-lg shadow-md">
      <div className="text-4xl text-bronze mb-4">{icon}</div> {/* Placeholder for icon */}
      <h3 className="text-xl font-semibold mb-2 text-off-white">{title}</h3>
      <p className="text-off-white">{description}</p>
    </div>
  );
};

const USPSection: React.FC = () => {
  return (
    <section className="py-16 bg-charcoal-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-off-white">The BOGUS Standard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <USPBlock
            icon="💎" // Placeholder icon
            title="Ethically Sourced"
            description="We are committed to responsible sourcing practices, ensuring every gem is conflict-free."
          />
          <USPBlock
            icon="✨" // Placeholder icon
            title="Handcrafted Perfection"
            description="Each piece is meticulously handcrafted by skilled artisans with unparalleled attention to detail."
          />
          <USPBlock
            icon="🔒" // Placeholder icon
            title="Lifetime Guarantee"
            description="Our jewelry is built to last, backed by a comprehensive lifetime guarantee for your peace of mind."
          />
        </div>
      </div>
    </section>
  );
};

export default USPSection;
