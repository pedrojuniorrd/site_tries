import React from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import ContactForm from '../components/ContactForm';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
const Home: React.FC = () => {
  return (
    <>
      <HeroSlideshow />

     <ProjectsSection />

      <AboutSection />

    <section id="contato" className="about-bg-sketch py-24 relative">
        <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Home;