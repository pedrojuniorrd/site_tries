// src/components/AnimatedSection.tsx
'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    animationType?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0, animationType = 'fade-in' }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (inView) {
            let baseClass = '';
            switch (animationType) {
                case 'slide-up':
                    baseClass = 'animate-slide-up';
                    break;
                case 'slide-left':
                    baseClass = 'animate-slide-left';
                    break;
                case 'slide-right':
                    baseClass = 'animate-slide-right';
                    break;
                case 'fade-in':
                default:
                    baseClass = 'animate-fade-in';
            }
            setAnimationClass(baseClass);
        }
    }, [inView, animationType]);

    const delayStyle = {
        animationDelay: `${delay}s`,
    };

    return (
        <div ref={ref} className={`opacity-0 ${inView ? animationClass : ''}`} style={delayStyle}>
            {children}
        </div>
    );
};

export default AnimatedSection;