// src/components/ui/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-900 py-8 border-t border-slate-100">
      <div className="text-center text-lg text-slate-500">
        &copy; {new Date().getFullYear()} Bogus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
