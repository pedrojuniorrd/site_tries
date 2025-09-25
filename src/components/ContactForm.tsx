'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import AnimatedSection from './AnimatedSection'; // Importe o AnimatedSection

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    
    // Obtenha a referência do formulário.
    const form = event.currentTarget;

    // Trecho que faz o envio REAL para o Formspree (DESCOMENTE PARA ATIVAR).
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
            container: 'font-lato',
            title: 'font-playfair-display',
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
            container: 'font-lato',
            title: 'font-playfair-display',
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
            container: 'font-lato',
            title: 'font-playfair-display',
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6">
      <AnimatedSection delay={0.2}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            // Adicione 'resize-none' para travar o redimensionamento
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border resize-none"
          ></textarea>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:bg-gray-400"
        >
          {status === 'submitting' ? 'Enviando...' : 'Enviar'}
        </button>
      </AnimatedSection>
    </form>
  );
};

export default ContactForm;