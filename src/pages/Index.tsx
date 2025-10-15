"use client";

import React, { useState } from 'react';
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
import PrimesSection from '@/components/PrimesSection';
import GuideSection from '@/components/GuideSection';
import AvisSection from '@/components/AvisSection';
import QuickContactModal from '@/components/QuickContactModal';

interface CalculationResult {
  equipmentCost: number;
  installationCost: number;
  optionsCost: number;
  totalCost: number; // HT
  vatCost: number;
  totalTTC: number;
  maprime: number;
  cee: number;
  tvaReduced: number;
  ecoPTZ: number;
  totalAides: number;
  finalCost: number;
  savings: number;
  eligibleEcoPTZ: boolean;
}

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ department: string; calculation: CalculationResult | null }>({
    department: '',
    calculation: null,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openQuickContactModal = (calculation: CalculationResult | null, type: string) => {
    // Assuming we need to get the department from the calculator state if available
    const departmentInput = document.getElementById('department') as HTMLSelectElement;
    const currentDepartment = departmentInput?.value || '';

    setModalData({
      department: currentDepartment,
      calculation: calculation,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PromoBanner />
      <HeroSection scrollToSection={scrollToSection} />
      <BenefitsSection />
      {/* FeaturesSection corresponds à la section "Pourquoi nous choisir" */}
      <FeaturesSection /> 
      <CalculatorSection scrollToSection={scrollToSection} openQuickContactModal={openQuickContactModal} />
      <PrimesSection />
      <GuideSection />
      <AvisSection />
      <FAQSection />
      <ContactSection />
      <FloatingSimulatorButton onClick={() => scrollToSection('calculateur')} />
      <CookieConsentBanner />
      <Footer />
      <MadeWithDyad />
      
      <QuickContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialData={modalData}
      />
    </div>
  );
};

export default Index;