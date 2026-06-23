/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#3d2b1f] text-[#f9f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">
              Vamos dar vida nova ao seu <span className="italic text-[#c5a059]">patrimônio</span> ou criar algo <span className="italic text-[#c5a059]">único</span>.
            </h2>
            <p className="text-[#f9f7f2]/60 mb-8 md:mb-12 text-base md:text-lg">
              Entre em contato para orçamentos de restauro ou para adquirir peças exclusivas. Atendimento sob agendamento.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/30 flex items-center justify-center">
                  <Phone size={20} className="text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#c5a059]/60 mb-1">Telefone / WhatsApp</p>
                  <p className="text-lg">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/30 flex items-center justify-center">
                  <Instagram size={20} className="text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#c5a059]/60 mb-1">Instagram</p>
                  <a 
                    href="https://www.instagram.com/garimpovintage_rj/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-[#c5a059] transition-colors"
                  >
                    @garimpovintage_rj
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/30 flex items-center justify-center">
                  <MapPin size={20} className="text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#c5a059]/60 mb-1">Localização</p>
                  <p className="text-lg">Recreio, Rio de Janeiro - RJ</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center text-center bg-white/5 p-8 md:p-12 backdrop-blur-sm border border-white/10">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Atendimento Personalizado</h3>
              <p className="text-brand-cream/60 leading-relaxed mb-8">
                Clique no botão abaixo para falar diretamente conosco pelo WhatsApp e solicitar orçamentos ou tirar dúvidas sobre peças.
              </p>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full tracking-widest uppercase text-sm transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone size={18} />
                Falar no WhatsApp
              </a>
            </div>
            <p className="text-xs text-brand-cream/40 italic">
              Respondemos em horário comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
