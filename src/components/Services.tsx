/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Hammer, Palette, Wrench } from 'lucide-react';
import { services } from '../data';

export function Services() {
  const icons = {
    Hammer: <Hammer className="w-10 h-10 text-[#c5a059] mb-4" />,
    Palette: <Palette className="w-10 h-10 text-[#c5a059] mb-4" />,
    Wrench: <Wrench className="w-10 h-10 text-[#c5a059] mb-4" />,
  };

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#3d2b1f] mb-4">Nossas Especialidades</h2>
          <div className="w-24 h-1 bg-[#c5a059] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#3d2b1f]/60">
            Combinamos décadas de experiência em marcenaria fina com uma sensibilidade artística única para cada projeto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 border border-[#3d2b1f]/5 hover:border-[#c5a059]/30 transition-all bg-[#f9f7f2]/30 group"
            >
              {icons[service.icon as keyof typeof icons]}
              <h3 className="text-2xl font-serif mb-4 group-hover:text-[#c5a059] transition-colors">{service.title}</h3>
              <p className="text-[#3d2b1f]/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
