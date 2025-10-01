// src/components/ClientWrapper.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <CustomCursor />
      <Preloader loading={loading} />
      
      {/* Container do site com transição mais suave */}
      <div className={`transition-opacity duration-[2000ms] ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}