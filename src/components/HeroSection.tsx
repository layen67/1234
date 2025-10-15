"use client";

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, CheckCircle, Lock, Clock, UserCheck, Bolt, Snowflake, Euro, Star } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stats-counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current).toLocaleString('fr-FR');
            setTimeout(updateCounter, 20);
          } else {
            counter.textContent = target.toLocaleString('fr-FR');
          }
        };
        updateCounter();
      });
    };
    // Delay animation slightly to ensure elements are mounted
    const timer = setTimeout(animateCounters, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-gradient text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge de confiance */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <ShieldCheck className="text-yellow-300 mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Plus de 15 000 devis calculés en 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Climatiseur Mobile, Réversible, Split<br />
            <span className="text-3xl md:text-4xl text-yellow-300">Simulateur Aides 2025 + Devis Gratuit</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            🎯 <strong>Climatiseur pas cher</strong> avec aides • 🔧 Installation professionnelle • 
            🌬️ Modèles <strong>silencieux</strong> et <strong>inverter</strong> • 📱 <strong>Climatiseurs connectés</strong>
          </p>
          
          {/* Statistiques visuelles améliorées */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8 relative z-10">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300 stats-counter" data-target="15247">0</div>
              <div className="text-sm text-blue-200">Devis calculés</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">4.8<Star className="inline h-5 w-5 fill-yellow-300 text-yellow-300 mb-1 ml-1" /></div>
              <div className="text-sm text-blue-200">Note moyenne</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300 stats-counter" data-target="1247">0</div>
              <div className="text-sm text-blue-200">Clients satisfaits</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">2025</div>
              <div className="text-sm text-blue-200">Aides à jour</div>
            </div>
          </div>

          {/* Garanties */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="text-green-300 mr-2 h-4 w-4" />
              <span className="text-sm">Devis gratuit</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="text-green-300 mr-2 h-4 w-4" />
              <span className="text-sm">Sans engagement</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="text-green-300 mr-2 h-4 w-4" />
              <span className="text-sm">Expert RGE</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="text-green-300 mr-2 h-4 w-4" />
              <span className="text-sm">Garantie 5 ans</span>
            </div>
          </div>

          {/* CTA Buttons améliorés */}
          <div className="flex justify-center">
            <Button onClick={() => scrollToSection('calculateur')} className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 shadow-lg group relative overflow-hidden w-full sm:w-auto text-center">
              <div className="absolute inset-0 w-3 bg-blue-600 transform -skew-x-12 -translate-x-10 group-hover:translate-x-96 transition-transform duration-700"></div>
              <Bolt className="mr-2 relative z-10 h-5 w-5" />
              <span className="relative z-10">Simuler mon projet GRATUITEMENT</span>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-blue-200 text-sm">
            <div className="flex items-center">
              <Lock className="mr-2 h-4 w-4" />
              <span>100% sécurisé et confidentiel</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center">
              <UserCheck className="mr-2 h-4 w-4" />
              <span>Expert dédié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;