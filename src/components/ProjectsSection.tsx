// src/components/ProjectsSection.tsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import ProjectsGrid from './ProjectsGrid'; // Importando o Grid

const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="projects-bg-image py-24">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection animationType="slide-up">
          <div className="text-center">
            <h2 className="text-5xl font-playfair-display font-light mb-16">
              Projetos
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} animationType="slide-up" className="w-full">
          <ProjectsGrid />
        </AnimatedSection>
        
      </div>
    </section>
  );
};

export default ProjectsSection;