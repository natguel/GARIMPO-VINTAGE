/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_restoration_workshop_1782236210337.jpg"
          alt="Workshop"
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d2b1f]/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Preservando o <span className="italic text-[#c5a059]">Passado</span>, Esculpindo o <span className="italic text-[#c5a059]">Futuro</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-[#f9f7f2]/80 font-light leading-relaxed">
            Restauro especializado de móveis antigos e criação de esculturas contemporâneas. Onde a técnica tradicional encontra a visão artística.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="bg-[#c5a059] hover:bg-[#c5a059]/90 text-[#3d2b1f] px-8 py-4 rounded-sm font-medium transition-all transform hover:-translate-y-1 tracking-widest uppercase text-sm">
              Ver Portfolio
            </a>
            <a href="#contato" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-sm font-medium transition-all backdrop-blur-sm tracking-widest uppercase text-sm">
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
