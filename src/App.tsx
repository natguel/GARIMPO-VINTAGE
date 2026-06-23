/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f7f2]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        
        {/* Seção Sobre */}
        <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="/assets/images/hero_restoration_workshop_1782236210337.jpg" 
                    alt="Processo de restauro na Garimpo Vintage" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-64 md:h-64 border-4 md:border-8 border-[#c5a059] z-[-1]"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-serif text-[#3d2b1f] mb-6 md:mb-8 leading-tight">Mãos que <span className="italic text-[#c5a059]">respeitam</span> o tempo e a matéria.</h2>
                <div className="space-y-4 md:space-y-6 text-[#3d2b1f]/70 leading-relaxed text-base md:text-lg">
                  <p>
                    Com formação técnica em restauro e uma paixão vitalícia pela madeira, meu trabalho é um diálogo constante entre o que foi e o que pode ser.
                  </p>
                  <p>
                    No restauro, busco a invisibilidade da intervenção, respeitando cada marca da história. Nas esculturas, liberto as formas que habitam a madeira bruta, transformando a rigidez da tora em fluidez artística.
                  </p>
                </div>
                <div className="mt-8 md:mt-12 flex items-center gap-6">
                  <div className="h-px w-12 bg-[#c5a059]"></div>
                  <span className="font-serif italic text-xl md:text-2xl text-[#3d2b1f]">O Artista</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

