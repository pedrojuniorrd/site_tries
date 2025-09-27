// src/components/AnimatedSection.tsx
'use client';

import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    animationType?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
    className?: string; // Propriedade que estava faltando
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
    children, 
    delay = 0, 
    animationType = 'fade-in', 
    className = '' // Valor padrão para a nova propriedade
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const getAnimationClass = () => {
        if (!inView) return 'opacity-0';
        switch (animationType) {
            case 'slide-up': return 'animate-slide-up';
            case 'slide-left': return 'animate-slide-left';
            case 'slide-right': return 'animate-slide-right';
            default: return 'animate-fade-in';
        }
    };

    const delayStyle = {
        animationDelay: `${delay}s`,
    };

    // Une as classes passadas via props com as classes de animação
    const combinedClassName = `${className} ${getAnimationClass()}`;

    return (
        <div ref={ref} className={combinedClassName} style={delayStyle}>
            {children}
        </div>
    );
};

export default AnimatedSection;