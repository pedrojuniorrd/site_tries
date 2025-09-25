import React from 'react';
import SectionTransition from '../../components/SectionTransition';

const SobrePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <SectionTransition>
          <h1 className="text-5xl font-light text-center mb-8">Nossa Filosofia</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Design que transforma espaços em refúgios pessoais.
          </p>
        </SectionTransition>

        <SectionTransition>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mt-12">
            <div className="md:w-1/2">
              <img
                src="/about-image.jpg"
                alt="Foto da Sua Noiva"
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Sobre a Arquiteta</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                [Nome da Sua Noiva] é uma arquiteta com paixão por criar espaços que contam histórias. Sua abordagem é guiada pela filosofia de que a arquitetura deve ir além da estética, focando no bem-estar e na conexão entre as pessoas e o ambiente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com mais de 10 anos de experiência, ela se especializou em projetos residenciais e comerciais, buscando sempre soluções que unam funcionalidade, beleza e sustentabilidade.
              </p>
            </div>
          </div>
        </SectionTransition>
      </div>
    </div>
  );
};

export default SobrePage;