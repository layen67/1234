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
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PrimesSection from "@/components/PrimesSection"; // New import
import GuideSection from "@/components/GuideSection"; // New import
import AvisSection from "@/components/AvisSection"; // New import


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
      <PrimesSection /> {/* Section Primes réelle */}
      <GuideSection /> {/* Section Guide réelle */}
      <AvisSection /> {/* Section Avis réelle */}
      <FAQSection />
      <ContactSection />
      <FloatingSimulatorButton onClick={() => scrollToSection('calculateur')} />
      <CookieConsentBanner />
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;