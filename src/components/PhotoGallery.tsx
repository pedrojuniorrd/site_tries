'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PhotoGalleryProps {
  images: string[];
  projectName: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images, projectName }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="relative w-full aspect-video">
              <Image
                src={image}
                alt={`${projectName} - Imagem ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery;