'use client';

import dynamic from 'next/dynamic';

const ContactClient = dynamic(() => import('@/components/features/ContactClient'), {
  ssr: false,
});

export default function ContactPage() {
  return <ContactClient />;
}