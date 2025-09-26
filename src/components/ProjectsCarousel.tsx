// src/components/ProjectsCarousel.tsx
'use client';
import React, { useState } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Image from 'next/image';
import { projects } from '../../data/projects';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// Componentes para as setas
const NextArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow z-10 absolute top-1/2 right-4 -translate-y-1/2`}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </div>
    );
};

const PrevArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow z-10 absolute top-1/2 left-4 -translate-y-1/2`}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 4.293a1 1 0 010 1.414L5.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </div>
    );
};

const ProjectsCarousel: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [projectImages, setProjectImages] = useState<{ src: string }[]>([]);

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const featuredProjects = projects.slice(0, 6);

    const openModal = (images: string[]) => {
        setProjectImages(images.map(src => ({ src })));
        setOpen(true);
    };

    return (
        <div className="w-full relative">
            <Slider {...settings}>
                {featuredProjects.map((project) => (
                    <div key={project.id} className="p-4">
                        <div
                            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                            onClick={() => openModal(project.images)}
                        >
                            <Image
                                src={project.thumbnail}
                                alt={project.name}
                                width={600}
                                height={400}
                                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Ajustado para um escurecimento mais leve no hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 group-hover:bg-gradient-to-t from-black/50 via-black/20 to-transparent transition-all duration-500 flex flex-col items-start justify-end p-6">
                                <h3 className="text-white text-2xl font-playfair-display opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0">
                                    {project.name}
                                </h3>
                                <p className="text-white text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0 mt-2">
                                    {project.description_short}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={projectImages}
                plugins={[Thumbnails]}
            />
        </div>
    );
};

export default ProjectsCarousel;