/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { portfolioItems } from '../data';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#f9f7f2]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#3d2b1f] mb-4">Obras em Destaque</h2>
          <div className="w-24 h-1 bg-[#c5a059] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-[#3d2b1f] aspect-[4/5]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2b1f] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[#c5a059] text-xs uppercase tracking-[0.2em] mb-2 block font-medium">
                  {item.category === 'restauro' ? 'Restauração' : 'Escultura'}
                </span>
                <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
