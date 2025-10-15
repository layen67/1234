"use client";

import React from 'react';
import { Snowflake, Phone, Mail, MapPin, Clock, ChevronRight, Gavel, FileText, Shield, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 80; 
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  
  // Placeholder pour les fonctions légales (qui affichaient des alertes dans le code statique)
  const showLegalMentions = () => alert('Mentions légales - Climatiseur.pro SAS - RCS Paris 123 456 789 - Capital 50 000€ - Siège social : 123 Avenue de la République, 75011 Paris');
  const showPrivacyPolicy = () => alert('Politique de confidentialité - Vos données sont protégées conformément au RGPD - Droit d\'accès, rectification, opposition');
  const showCGV = () => alert('Conditions Générales de Vente - Disponibles sur demande à contact@climatiseur.pro');
  const showCookiesPolicy = () => alert('Politique Cookies - Nous utilisons des cookies essentiels au fonctionnement du site et des statistiques anonymes');


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
            <p className="text-gray-400 text-sm mb-4">
              Votre expert en installation de climatisation réversible et calcul des aides financières 2025. Devis gratuit et sans engagement.
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
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Button variant="link" onClick={() => scrollToSection('calculateur')} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><ChevronRight className="h-3 w-3 text-blue-400 mr-2" />Simulateur de prix</Button></li>
              <li><Button variant="link" onClick={() => scrollToSection('primes')} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><ChevronRight className="h-3 w-3 text-blue-400 mr-2" />Aides & Primes 2025</Button></li>
              <li><Button variant="link" onClick={() => scrollToSection('guide')} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><ChevronRight className="h-3 w-3 text-blue-400 mr-2" />Guide d'achat</Button></li>
              <li><Button variant="link" onClick={() => scrollToSection('avis')} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><ChevronRight className="h-3 w-3 text-blue-400 mr-2" />Avis Clients</Button></li>
              <li><Button variant="link" onClick={() => scrollToSection('faq')} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><ChevronRight className="h-3 w-3 text-blue-400 mr-2" />FAQ</Button></li>
            </ul>
          </div>

          {/* Colonne 3: Informations légales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><Button variant="link" onClick={showLegalMentions} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><Gavel className="h-4 w-4 text-blue-400 mr-2" />Mentions Légales</Button></li>
              <li><Button variant="link" onClick={showPrivacyPolicy} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><Shield className="h-4 w-4 text-blue-400 mr-2" />Politique de Confidentialité</Button></li>
              <li><Button variant="link" onClick={showCGV} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><FileText className="h-4 w-4 text-blue-400 mr-2" />Conditions Générales de Vente</Button></li>
              <li><Button variant="link" onClick={showCookiesPolicy} className="p-0 h-auto text-gray-400 hover:text-white transition duration-300 flex items-center justify-start"><Cookie className="h-4 w-4 text-blue-400 mr-2" />Gestion des Cookies</Button></li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
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
                <p className="text-gray-400">Intervention France entière</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pt-4">
          &copy; {currentYear} Climatiseur.pro. Tous droits réservés | SIRET: 123 456 789 00000 | RCS Paris
        </div>
      </div>
    </footer>
  );
};

export default Footer;