import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BOGUS Jewelry',
        url: 'https://www.bogus-jewelry.com',
        logo: 'https://www.bogus-jewelry.com/media/logo.png', // Placeholder
        description: 'Timeless Elegance, Unmatched Brilliance. Exquisite jewelry crafted with passion.',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+66-123-456-789', // Placeholder
            contactType: 'Customer Service',
        },
        sameAs: [
            'https://facebook.com/bogusjewelry',
            'https://instagram.com/bogusjewelry',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
