'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import AnimatedSection from './AnimatedSection'; // Supondo que você tem esse componente

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
            container: 'font-montserrat', 
            title: 'font-montserrat font-semibold', 
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
            container: 'font-montserrat',
            title: 'font-montserrat font-semibold',
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
            container: 'font-montserrat',
            title: 'font-montserrat font-semibold',
          }
        });
    }
  };

  return (
    <section id="contato" className="py-20 bg-neutral-50 font-montserrat">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título e linha divisória */}
        <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-light text-gray-800 mb-2 tracking-wider uppercase">
                    Entre em Contato
                </h2>
                <div className="h-px w-16 bg-gray-800 mx-auto"></div>
            </div>
        </AnimatedSection>
        
        {/* Formulário com o estilo do seu exemplo */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-4xl mx-auto p-0">
            {/* Campos Nome e Email em duas colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.2}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-800 focus:border-gray-800"
                        />
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-800 focus:border-gray-800"
                        />
                    </div>
                </AnimatedSection>
            </div>
            
            {/* Campo Assunto (mantido do exemplo anterior) */}
            <AnimatedSection delay={0.4}>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-800 focus:border-gray-800"
                    />
                </div>
            </AnimatedSection>

            {/* Campo Mensagem */}
            <AnimatedSection delay={0.5}>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-800 focus:border-gray-800 resize-none"
                    ></textarea>
                </div>
            </AnimatedSection>

            {/* Botão de Envio com o novo estilo */}
            <AnimatedSection delay={0.6}>
                <div>
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full flex justify-center py-3 px-4 border border-gray-800 rounded-none text-sm font-light tracking-wider text-gray-800 hover:bg-gray-800 hover:text-white transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                    </button>
                </div>
            </AnimatedSection>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;