// src/components/ProjectsSection.tsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import ProjectsCarousel from './ProjectsCarousel';
const ProjectsSection: React.FC = () => {
  return (
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
  );
};

export default ProjectsSection;