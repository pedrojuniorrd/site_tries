'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import AnimatedSection from './AnimatedSection';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkgqgzze', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        Swal.fire({ 
          icon: 'success',
          title: 'Mensagem Enviada!',
          text: 'Obrigado por entrar em contato. Responderemos em breve!',
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            container: 'font-inter', // Usando a nova fonte Inter
            title: 'font-dm-serif-display', // Usando a nova fonte DM Serif Display
          }
        });
      } else {
        setStatus('error');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            container: 'font-inter',
            title: 'font-dm-serif-display',
          }
        });
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            container: 'font-inter',
            title: 'font-dm-serif-display',
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-8 p-8 md:p-12 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-4xl font-dm-serif-display text-center text-gray-800">Entre em Contato</h2>
      <AnimatedSection delay={0.2}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-inter">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border font-inter"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-inter">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border font-inter"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-inter">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border resize-none font-inter"
          ></textarea>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full px-6 py-3 border border-transparent rounded-full shadow-lg text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:bg-gray-400 transition-colors duration-300"
        >
          {status === 'submitting' ? 'Enviando...' : 'Enviar'}
        </button>
      </AnimatedSection>
    </form>
  );
};

export default ContactForm;
