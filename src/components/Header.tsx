"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Snowflake } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajout d'un décalage pour le header fixe (Header + PromoBanner)
      const offset = element.offsetTop - 80; 
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close menu on navigation
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('top')}>
            <Snowflake className="text-blue-600 text-2xl mr-2" />
            <span className="text-xl font-bold text-gray-800">Climatiseur.pro</span>
            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full hidden md:inline">Certifié RGE</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Button variant="link" onClick={() => scrollToSection('calculateur')} className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">Calculateur</Button>
            <Button variant="link" onClick={() => scrollToSection('primes')} className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">Primes 2025</Button>
            <Button variant="link" onClick={() => scrollToSection('guide')} className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">Guide d'achat</Button>
            <Button variant="link" onClick={() => scrollToSection('avis')} className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">Avis Clients</Button>
            <Button variant="link" onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">FAQ</Button>
            <Button variant="link" onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">Contact</Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-sm text-gray-600">
              <Phone className="text-blue-500 mr-1 h-4 w-4" />
              <span>01 23 45 67 89</span>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-16 z-40">
          <div className="px-4 py-4 space-y-4">
            <Button variant="link" onClick={() => scrollToSection('calculateur')} className="block text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2 border-b border-gray-100 w-full justify-start">Calculateur</Button>
            <Button variant="link" onClick={() => scrollToSection('primes')} className="block text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2 border-b border-gray-100 w-full justify-start">Primes 2025</Button>
            <Button variant="link" onClick={() => scrollToSection('guide')} className="block text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2 border-b border-gray-100 w-full justify-start">Guide d'achat</Button>
            <Button variant="link" onClick={() => scrollToSection('avis')} className="block text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2 border-b border-gray-100 w-full justify-start">Avis Clients</Button>
            <Button variant="link" onClick={() => scrollToSection('faq')} className="block text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2 border-b border-gray-100 w-full justify-start">FAQ</Button>
            <Button variant="link" onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2 border-b border-gray-100 w-full justify-start">Contact</Button>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center text-gray-700">
                <Phone className="text-blue-500 mr-2 h-4 w-4" />
                <span className="font-medium">01 23 45 67 89</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Lun-Ven: 8h-19h • Sam: 9h-17h</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;