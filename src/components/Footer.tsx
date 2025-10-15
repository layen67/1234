"use client";

import React from 'react';
import { Snowflake, Phone, Mail, MapPin, ChevronRight, Gavel, Shield, FileText, Cookie } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Placeholder functions for legal alerts
  const showLegalMentions = () => alert('Mentions légales - Climatiseur.pro SAS - RCS Paris 123 456 789 - Capital 50 000€ - Siège social : 123 Avenue de la République, 75011 Paris');
  const showPrivacyPolicy = () => alert('Politique de confidentialité - Vos données sont protégées conformément au RGPD - Droit d\'accès, rectification, opposition');
  const showCGV = () => alert('Conditions Générales de Vente - Disponibles sur demande à contact@climatiseur.pro');
  const showCookiesPolicy = () => alert('Politique Cookies - Nous utilisons des cookies essentiels au fonctionnement du site et des statistiques anonymes');


  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Colonne 1: Logo et description */}
          <div>
            <div className="flex items-center mb-4">
              <Snowflake className="text-blue-400 text-2xl mr-2" />
              <span className="text-xl font-bold text-white">Climatiseur.pro</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Votre expert en climatisation et optimisation des aides financières depuis 2020.
            </p>
            <div className="flex space-x-3">
                <div className="bg-white rounded-lg p-2">
                    <div className="text-xs font-bold text-gray-800">RGE</div>
                </div>
                <div className="bg-white rounded-lg p-2">
                    <div className="text-xs font-bold text-gray-800">QUALIBAT</div>
                </div>
            </div>
          </div>

          {/* Colonne 2: Navigation rapide */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#calculateur" onClick={(e) => { e.preventDefault(); scrollToSection('calculateur'); }} className="hover:text-white transition duration-300 flex items-center"><ChevronRight className="text-blue-400 mr-2 h-3 w-3" />Calculateur</a></li>
              <li><a href="#primes" onClick={(e) => { e.preventDefault(); scrollToSection('primes'); }} className="hover:text-white transition duration-300 flex items-center"><ChevronRight className="text-blue-400 mr-2 h-3 w-3" />Aides 2025</a></li>
              <li><a href="#guide" onClick={(e) => { e.preventDefault(); scrollToSection('guide'); }} className="hover:text-white transition duration-300 flex items-center"><ChevronRight className="text-blue-400 mr-2 h-3 w-3" />Guide d'achat</a></li>
              <li><a href="#avis" onClick={(e) => { e.preventDefault(); scrollToSection('avis'); }} className="hover:text-white transition duration-300 flex items-center"><ChevronRight className="text-blue-400 mr-2 h-3 w-3" />Avis clients</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="hover:text-white transition duration-300 flex items-center"><ChevronRight className="text-blue-400 mr-2 h-3 w-3" />FAQ</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-white transition duration-300 flex items-center"><ChevronRight className="text-blue-400 mr-2 h-3 w-3" />Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3: Légal */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Légal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" onClick={showLegalMentions} className="hover:text-white transition duration-300 flex items-center"><Gavel className="text-blue-400 mr-2 h-4 w-4" />Mentions légales</a></li>
              <li><a href="#" onClick={showPrivacyPolicy} className="hover:text-white transition duration-300 flex items-center"><Shield className="text-blue-400 mr-2 h-4 w-4" />Confidentialité</a></li>
              <li><a href="#" onClick={showCGV} className="hover:text-white transition duration-300 flex items-center"><FileText className="text-blue-400 mr-2 h-4 w-4" />CGV</a></li>
              <li><a href="#" onClick={showCookiesPolicy} className="hover:text-white transition duration-300 flex items-center"><Cookie className="text-blue-400 mr-2 h-4 w-4" />Cookies</a></li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center">
                <Phone className="text-blue-400 mr-3 h-5 w-5" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-400 mr-3 h-5 w-5" />
                <span>contact@climatiseur.pro</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-blue-400 mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Intervention France entière</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Climatiseur.pro - Tous droits réservés | SIRET: 123 456 789 00000 | RCS Paris</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;