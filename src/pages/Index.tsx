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
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PrimesSection from "@/components/PrimesSection";
import GuideSection from "@/components/GuideSection";
import AvisSection from "@/components/AvisSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection"; // New import


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
      <CalculatorSection scrollToSection={scrollToSection} />
      <WhyChooseUsSection /> {/* Nouvelle section */}
      <GuideSection />
      <AvisSection />
      <PrimesSection />
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