/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-[#3d2b1f]/10 text-[#3d2b1f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <img 
              src="https://i.imgur.com/ERWA0qW.jpeg" 
              alt="Garimpo Vintage Logo" 
              className="h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/garimpovintage_rj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#3d2b1f] hover:text-[#c5a059] transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Garimpo Vintage. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
