"use client";

import React from 'react';
import { Snowflake, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          
          {/* Colonne 1: Logo et description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Snowflake className="text-blue-400 text-3xl mr-2" />
              <span className="text-2xl font-bold text-white">Climatiseur.pro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Votre expert en installation de climatisation réversible et calcul des aides financières 2025. Devis gratuit et sans engagement.
            </p>
          </div>

          {/* Colonne 2: Navigation rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculateur" onClick={(e) => { e.preventDefault(); scrollToSection('calculateur'); }} className="text-gray-400 hover:text-white transition duration-300">Simulateur de prix</a></li>
              <li><a href="#primes" onClick={(e) => { e.preventDefault(); scrollToSection('primes'); }} className="text-gray-400 hover:text-white transition duration-300">Aides & Primes 2025</a></li>
              <li><a href="#guide" onClick={(e) => { e.preventDefault(); scrollToSection('guide'); }} className="text-gray-400 hover:text-white transition duration-300">Guide d'achat</a></li>
              <li><a href="#avis" onClick={(e) => { e.preventDefault(); scrollToSection('avis'); }} className="text-gray-400 hover:text-white transition duration-300">Avis Clients</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contactez-nous</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">01 23 45 67 89</p>
                  <p className="text-gray-400 text-xs">Lun-Ven: 8h-19h</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-400 hover:text-white transition duration-300">contact@climatiseur.pro</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-400">123 Rue de la Climatisation, 75001 Paris</p>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Informations légales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Mentions Légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Politique de Confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Conditions Générales de Vente</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Gestion des Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pt-4">
          &copy; {currentYear} Climatiseur.pro. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;