'use client';

import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface ImageModalProps {
  images: string[];
  isOpen: boolean;
  photoIndex: number;
  onClose: () => void;
  onMovePrev: () => void;
  onMoveNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, isOpen, photoIndex, onClose, onMovePrev, onMoveNext }) => {
  if (!isOpen) return null;

  return (
    <Lightbox
      mainSrc={images[photoIndex]}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      onCloseRequest={onClose}
      onMovePrevRequest={onMovePrev}
      onMoveNextRequest={onMoveNext}
    />
  );
};

export default ImageModal;