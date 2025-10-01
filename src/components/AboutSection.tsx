// src/components/AboutSection.tsx
import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="about-bg-sketch py-24">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <AnimatedSection animationType="slide-left">
          <h2 className="text-5xl font-playfair-display font-light mb-8 text-zinc-800">Sobre a Triés Arquitetura</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-montserrat font-light">
            Somos uma equipe composta por três arquitetas, que uniram suas experiências e visões para criar projetos que aliam estética, funcionalidade e propósito. Atuamos no desenvolvimento de projetos residenciais, comerciais e corporativos, sempre com foco em entender as necessidades de cada cliente e transformar espaços em ambientes únicos.
            Acreditamos no poder do design para valorizar marcas, otimizar experiências e criar espaços que transmitem bem-estar e conexão. Nossa abordagem é guiada pela filosofia de que a arquitetura deve ir além da estética, valorizando a experiência humana e a interação significativa com o espaço.
          </p>
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-800">
          
          <AnimatedSection delay={0.4} animationType="slide-left">
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/arquitetas/maria_eduarda.jpg"
                  alt="Foto de Maria Eduarda"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-montserrat font-normal">Maria Eduarda</h3>
              <p className="text-gray-500 font-montserrat font-light">Especialista em Projeto Executivo de Arquitetura e Design de Interiores</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6} animationType="slide-left">
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/arquitetas/kianny_dutra.jpg"
                  alt="Foto de Kianny Dutra"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-montserrat font-normal">Kianny Dutra</h3>
              <p className="text-gray-500 font-montserrat font-light">Especialista em Design de Interiores, Iluminação e Produção Criativa</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8} animationType="slide-left">
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/arquitetas/sabrina_moura.jpg"
                  alt="Foto de Sabrina"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-montserrat font-normal">Sabrina Britto</h3>
              <p className="text-gray-500 font-montserrat font-light">Especialista em Projetos Arquitetônicos e Luminotécnico</p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;