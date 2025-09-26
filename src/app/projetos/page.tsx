'use client';

import { projects } from '../../../data/projects';
import Image from 'next/image';
import AnimatedSection from '../../components/AnimatedSection';
import { notFound } from 'next/navigation';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    notFound();
  }

  const images = project.images.map(src => ({ src }));

  return (
    <div className="pt-20">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-5xl font-playfair-display text-center mb-4">{project.name}</h1>
          <p className="text-center text-lg text-gray-600 mb-12">{project.category}</p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mb-16">
          {project.images.map((imgSrc, index) => (
            <div 
              key={index} 
              onClick={() => { setPhotoIndex(index); setOpen(true); }}
              className="relative w-full aspect-video cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={imgSrc}
                alt={`${project.name} - Imagem ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
      
      {/* <AnimatedSection delay={0.4}>
        <div className="max-w-4xl mx-auto px-4 text-center text-lg text-gray-700 leading-relaxed mb-12">
          <p>{project.description}</p>
        </div>
      </AnimatedSection> */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={photoIndex}
        plugins={[Slideshow, Thumbnails, Zoom]}
        // A propriedade 'slideshow' foi removida para desativar o autoplay
        zoom={{ maxZoomPixelRatio: 2 }}
        animation={{ fade: 400 }}
      />
    </div>
  );
};

export default ProjectPage;