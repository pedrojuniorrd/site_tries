// src/components/ProjectsGrid.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from '../../data/projects';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Plugins
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectsGrid: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [projectImages, setProjectImages] = useState<{ src: string }[]>([]);
    const [photoIndex, setPhotoIndex] = useState(0);

    const featuredProjects = projects.slice(0, 6);

    const openModal = (images: string[]) => {
        setProjectImages(images.map(src => ({ src })));
        setPhotoIndex(0);
        setOpen(true);
    };

    const gridItemClasses = [
        'md:col-span-2 md:row-span-2',
        'md:col-span-1 md:row-span-1',
        'md:col-span-1 md:row-span-1',
        'md:col-span-1 md:row-span-1',
        'md:col-span-2 md:row-span-1',
        'md:col-span-1 md:row-span-1',
    ];

    return (
        <>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.id + index}
                        className={`group cursor-pointer relative overflow-hidden rounded-xl shadow-lg ${gridItemClasses[index % gridItemClasses.length]}`}
                        onClick={() => openModal(project.images)}
                        variants={itemVariants} 
                    >
                        <Image
                            src={project.thumbnail}
                            alt={project.name}
                            fill
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div 
                          className="
                            absolute inset-0 flex flex-col items-start justify-end p-4 md:p-6 
                            bg-gradient-to-t from-black/30 to-transparent  /* <-- MUDANÇA 1: Gradiente mais suave */
                            transition-opacity duration-500 
                            md:from-black/60 md:opacity-0 md:group-hover:opacity-100
                          "
                        >
                            <h3 className="
                              text-white text-xl md:text-2xl font-playfair-display drop-shadow-md /* <-- MUDANÇA 2: Sombra mais forte */
                              transition-transform duration-500 
                              md:transform md:translate-y-4 md:group-hover:translate-y-0
                            ">
                                {project.name}
                            </h3>
                            <p className="
                              text-white/90 text-sm drop-shadow-md /* <-- MUDANÇA 2: Sombra mais forte */
                              transition-transform duration-500 delay-100 mt-1 
                              md:transform md:translate-y-4 md:group-hover:translate-y-0
                            ">
                                {project.category}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={projectImages}
                index={photoIndex}
                on={{ view: ({ index }) => setPhotoIndex(index) }}
                plugins={[Slideshow, Thumbnails, Zoom]}
                zoom={{ maxZoomPixelRatio: 2 }}
                animation={{ fade: 400 }}
            />
        </>
    );
};

export default ProjectsGrid;