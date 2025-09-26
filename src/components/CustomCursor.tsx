// src/components/CustomCursor.tsx
'use client';

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      const deltaX = mousePos.current.x - outlinePos.current.x;
      const deltaY = mousePos.current.y - outlinePos.current.y;
      
      outlinePos.current.x += deltaX * 0.2;
      outlinePos.current.y += deltaY * 0.2;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${mousePos.current.x}px`;
        dotRef.current.style.top = `${mousePos.current.y}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlinePos.current.x}px`;
        outlineRef.current.style.top = `${outlinePos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    const animationFrameId = requestAnimationFrame(animate);

    document.querySelectorAll('a, button, [role="button"], .cursor-pointer').forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.querySelectorAll('a, button, [role="button"], .cursor-pointer').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={outlineRef}
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
      />
      <div 
        ref={dotRef}
        className="cursor-dot"
      />
    </>
  );
};

export default CustomCursor;