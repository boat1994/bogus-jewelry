'use client';

import { NextPage } from "next";
import Image from "next/image";

export const dynamic = 'force-static';

const ConstructionPage: NextPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="animate-pulse">
        <Image src="/logos/bogus_logo.png" alt="Bogus Logo" width={200} height={200} unoptimized />
      </div>
      <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
      <p className="text-lg text-center px-4">We are currently working on something amazing. Please check back later.</p>
    </div>
  );
};

export default ConstructionPage;
