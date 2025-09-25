'use client';

import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = 0.2;
    audioRef.current.muted = true; // garante que começa mutado
    audioRef.current.play().catch(error => {
      console.log("Autoplay bloqueado até interação do usuário:", error);
    });
  }
}, []);

const toggleMute = () => {
  if (audioRef.current) {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);

    if (!audioRef.current.muted) {
      audioRef.current.play().catch(error => {
        console.log("O usuário precisa interagir com a página antes:", error);
      });
    }
  }
};

  return (
    <div className="fixed bottom-4 right-4 z-50">
<audio ref={audioRef} loop muted>
  <source src="/musica/musica.mp3" type="audio/mpeg" />
  Seu navegador não suporta a tag de áudio.
</audio>

      <button
        onClick={toggleMute}
        className="bg-black/50 text-white p-3 rounded-full shadow-lg hover:bg-black transition-colors"
        aria-label={isMuted ? 'Ativar música' : 'Silenciar música'}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 10v4a1 1 0 001 1h3l5 5V5l-5 5H4a1 1 0 00-1 1zM18.5 7.5a6.5 6.5 0 010 9M17 9a4.5 4.5 0 010 6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 12a4 4 0 00-8 0v0a4 4 0 008 0zM12 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;