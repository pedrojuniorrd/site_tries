// src/components/AboutSection.tsx
import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { config } from '../data/config'; // 1. Importando a configuração

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="about-bg-sketch py-24">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <AnimatedSection animationType="slide-left">
          {/* 2. Usando o título do arquivo de configuração */}
          <h2 className="text-5xl font-playfair-display font-light mb-8 text-zinc-800">{config.about.title}</h2>
          {/* 3. Usando a descrição do arquivo de configuração */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-montserrat font-light">
            {config.about.description}
          </p>
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-800">
          
          {/* 4. Mapeando os membros da equipe do arquivo de configuração */}
          {config.about.team.map((member, index) => (
            <AnimatedSection key={index} delay={0.4 + index * 0.2} animationType="slide-left">
              <div className="text-center">
                <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-normal">{member.name}</h3>
                <p className="text-gray-500 font-montserrat font-light">{member.role}</p>
              </div>
            </AnimatedSection>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;