import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlideshow from '../components/HeroSlideshow';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import ProjectsCarousel from '../components/ProjectsCarousel'; // Importe o carrossel

const Home: React.FC = () => {
  return (
    <>
      <HeroSlideshow />

      {/* Seção de Projetos em Destaque */}
      <section id="projetos" className="projects-bg-image py-24 text-center max-w-7xl mx-auto px-4">
        <AnimatedSection animationType="slide-up">
          {/* Título de Projetos usando fonte fina e delicada (Playfair Display) */}
          <h2 className="text-5xl font-playfair-display font-light mb-12">Projetos</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2} animationType="slide-up">
          <ProjectsCarousel />
        </AnimatedSection>
        {/* <AnimatedSection delay={0.4} animationType="slide-up">
          <div className="mt-16">
            <Link 
              href="#" 
              className="inline-block px-10 py-5 text-zinc-900 border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 rounded-none text-lg font-montserrat font-light uppercase tracking-widest"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </AnimatedSection> */}
      </section>

      {/* Seção Sobre a Triés Arquitetura com Imagens Corrigidas */}
      <section id="sobre" className="about-bg-sketch py-24">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection animationType="slide-left">
            <h2 className="text-5xl font-playfair-display font-light mb-8 text-zinc-800">Sobre a Triés Arquitetatura</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-montserrat font-light">
              O Triés Arquitetura é composto por uma equipe de arquitetas, que uniram suas experiências e visões para criar projetos que unem estética, funcionalidade e propósito. Atuamos no desenvolvimento de projetos residenciais, comerciais e corporativos, sempre com foco em entender as necessidades de cada cliente e transformar espaços em ambientes únicos.
 Acreditamos no poder do design para valorizar marcas, otimizar experiências e criar ambientes que transmitem bem-estar e conexão. Nossa abordagem é guiada pela filosofia de que a arquitetura deve ir além da estética, focando no bem-estar e na conexão entre as pessoas e o ambiente.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-800">
            
            <AnimatedSection delay={0.4} animationType="slide-up">
              <div className="text-center">
                <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/arquitetas/maria_eduarda.jpg" // CAMINHO ATUALIZADO
                    alt="Foto de Maria Eduarda"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-normal">Maria Eduarda</h3>
                <p className="text-gray-500 font-montserrat font-light">Especialista em Projeto Executivo de Arquitetura e Design de Interiores</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6} animationType="slide-up">
              <div className="text-center">
                <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/arquitetas/kianny_dutra.jpg" // CAMINHO ATUALIZADO
                    alt="Foto de Kianny Dutra"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-normal">Kianny Dutra</h3>
                <p className="text-gray-500 font-montserrat font-light">Especialista em Design de Interiores, Iluminação e Produção Criativa</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8} animationType="slide-up">
              <div className="text-center">
                <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/arquitetas/sabrina_moura.jpg" // CAMINHO ATUALIZADO
                    alt="Foto de Sabrina"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-normal">Sabrina</h3>
                <p className="text-gray-500 font-montserrat font-light">Especialista em Projetos Arquitetônicos e Luminotécnico</p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
      {/* Seção de Contato - AGORA APENAS CHAMA O FORMULÁRIO */}
    <section id="contato" className="about-bg-sketch py-24 relative">
        <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Home;