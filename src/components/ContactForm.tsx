// src/components/ContactForm.tsx
'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection'; 

const ContactForm: React.FC = () => {
  const IS_DISABLED = true;

  return (
    <div className="bg-white/60 backdrop-blur-md p-8 sm:p-12 md:p-16 rounded-lg shadow-xl font-montserrat">
      
      <AnimatedSection delay={0.1} animationType="slide-left">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair-display font-light text-gray-800 mb-3">
                  Entre em Contato
              </h2>
              <div className="h-px w-16 bg-gray-800 mx-auto"></div>
          </div>
      </AnimatedSection>
      
      <form className={`space-y-8 w-full max-w-2xl mx-auto ${IS_DISABLED ? 'opacity-50' : ''}`}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.2} animationType="slide-left">
                  <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          disabled={IS_DISABLED}
                          className="mt-1 block w-full bg-transparent border-0 border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:ring-0 focus:border-gray-800 transition-colors disabled:cursor-not-allowed"
                      />
                  </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3} animationType="slide-left">
                  <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          disabled={IS_DISABLED}
                          className="mt-1 block w-full bg-transparent border-0 border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:ring-0 focus:border-gray-800 transition-colors disabled:cursor-not-allowed"
                      />
                  </div>
              </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.4} animationType="slide-left">
              <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
                  <input
                      type="text"
                      id="subject"
                      name="subject"
                      disabled={IS_DISABLED}
                      className="mt-1 block w-full bg-transparent border-0 border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:ring-0 focus:border-gray-800 transition-colors disabled:cursor-not-allowed"
                  />
              </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} animationType="slide-left">
              <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={IS_DISABLED}
                      className="mt-1 block w-full bg-transparent border-0 border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:ring-0 focus:border-gray-800 resize-none transition-colors disabled:cursor-not-allowed"
                  ></textarea>
              </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6} animationType="slide-left">
              <div className="pt-4">
                  <button
                      type="submit"
                      disabled={IS_DISABLED}
                      className="w-full flex justify-center py-3 px-4 border border-gray-800 rounded-none text-sm font-light tracking-wider text-gray-800 hover:bg-gray-800 hover:text-white transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      {'Em Breve'}
                  </button>
              </div>
              {IS_DISABLED && (
                  <p className="text-center text-sm text-gray-600 mt-4">
                      *O formulário de contato está temporariamente desabilitado.
                  </p>
              )}
          </AnimatedSection>
      </form>
    </div>
  );
};

export default ContactForm;