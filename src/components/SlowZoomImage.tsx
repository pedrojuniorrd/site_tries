import Image from 'next/image';
import React from 'react';

interface SlowZoomImageProps {
  src: string;
  alt: string;
}

const SlowZoomImage: React.FC<SlowZoomImageProps> = ({ src, alt }) => {
  return (
    // Container pai que esconde o zoom (o overflow-hidden é crucial)
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        // Aplica o efeito de zoom lento e a otimização
        className="animate-slow-zoom transform will-change-transform" 
        priority // Sugestão: Imagens do Hero devem ter prioridade
      />
    </div>
  );
};

export default SlowZoomImage;