"use client";

import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import FloatingSimulatorButton from "@/components/FloatingSimulatorButton";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CalculatorSection from "@/components/CalculatorSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection"; // New import
import Footer from "@/components/Footer"; // New import

// Placeholder components for navigation links
const PrimesSection = () => <section id="primes" className="py-24 bg-gray-50 text-center min-h-[50vh] flex items-center justify-center"><h2 className="text-3xl font-bold text-gray-800">Primes 2025 - Bientôt disponible !</h2></section>;
const GuideSection = () => <section id="guide" className="py-24 bg-white text-center min-h-[50vh] flex items-center justify-center"><h2 className="text-3xl font-bold text-gray-800">Guide d'achat - Bientôt disponible !</h2></section>;
const AvisSection = () => <section id="avis" className="py-24 bg-gray-50 text-center min-h-[50vh] flex items-center justify-center"><h2 className="text-3xl font-bold text-gray-800">Avis Clients - Bientôt disponible !</h2></section>;


const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PromoBanner />
      <HeroSection scrollToSection={scrollToSection} />
      <BenefitsSection />
      <FeaturesSection />
      <CalculatorSection scrollToSection={scrollToSection} />
      <PrimesSection /> {/* Placeholder for Primes */}
      <GuideSection /> {/* Placeholder for Guide */}
      <AvisSection /> {/* Placeholder for Avis */}
      <FAQSection /> {/* Integrated FAQ Section */}
      <ContactSection />
      <FloatingSimulatorButton onClick={() => scrollToSection('calculateur')} />
      <CookieConsentBanner />
      <Footer /> {/* Integrated Footer */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;