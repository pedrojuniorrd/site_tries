import React from 'react';
import Image from 'next/image';
import Hero from '../components/Hero';
import { projects } from '../../data/projects';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import ProjectsCarousel from '../components/ProjectsCarousel'; // Importe o carrossel

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Seção de Projetos em Destaque */}
      <section id="projetos" className="py-24 text-center max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-5xl font-playfair-display mb-12">Projetos em Destaque</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <ProjectsCarousel /> {/* Use o carrossel aqui */}
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="mt-16">
            <Link href="/projetos" className="inline-block px-10 py-5 text-zinc-900 border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 rounded-full text-lg font-lato font-medium">
              Ver Todos os Projetos
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Seção Sobre a Triés Arquitetura */}
      <section id="sobre" className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-5xl font-playfair-display mb-8">Sobre a Triés Arquitetura</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              A Triés Arquitetura é um escritório fundado por **Maria Eduarda**, **Kianny Dutra** e **Sabrina**. Juntas, elas combinam diferentes visões para criar espaços que equilibram estética, funcionalidade e bem-estar.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <Image
                  src="/maria-eduarda.jpg"
                  alt="Foto de Maria Eduarda"
                  width={160}
                  height={160}
                  className="rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold">Maria Eduarda</h3>
                <p className="text-gray-600">Descrição sobre a Maria Eduarda</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <div className="text-center">
                <Image
                  src="/kianny-dutra.jpg"
                  alt="Foto de Kianny Dutra"
                  width={160}
                  height={160}
                  className="rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold">Kianny Dutra</h3>
                <p className="text-gray-600">Descrição sobre a Kianny Dutra</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <div className="text-center">
                <Image
                  src="/sabrina.jpg"
                  alt="Foto de Sabrina"
                  width={160}
                  height={160}
                  className="rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold">Sabrina</h3>
                <p className="text-gray-600">Descrição sobre a Sabrina</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção de Contato - FORMULÁRIO COM ANIMAÇÃO POR CAMPO */}
      <section id="contato" className="py-24 max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-light mb-8">Fale Conosco</h2>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato para agendar uma consultoria ou tirar dúvidas.
          </p>
        </AnimatedSection>
        <div className="w-full max-w-xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Home;