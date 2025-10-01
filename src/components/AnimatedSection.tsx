// src/components/AnimatedSection.tsx
'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    animationType?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
    className?: string;
}

const animationVariants: Record<string, Variants> = {
    'fade-in': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    'slide-up': {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },
    'slide-left': { // Anima da esquerda (-50px) para o centro (0)
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    'slide-right': { // Anima da direita (50px) para o centro (0)
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    delay = 0,
    animationType = 'fade-in',
    className = ''
}) => {
    const selectedVariants = animationVariants[animationType] || animationVariants['fade-in'];

    return (
        <motion.div
            className={className}
            variants={selectedVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;