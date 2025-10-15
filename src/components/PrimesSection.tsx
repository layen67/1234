"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Euro, ShieldCheck, Home, Zap, CheckCircle } from 'lucide-react';

const PrimesSection = () => {
  const aides = [
    {
      title: "MaPrimeRénov' (MPR)",
      icon: <Home className="h-8 w-8 text-blue-600" />,
      description: "Aide de l'État pour les travaux de rénovation énergétique. Éligible pour l'installation d'une pompe à chaleur air/air (climatisation réversible) en remplacement d'un ancien chauffage. Montant variable selon les revenus (jusqu'à 2 500€).",
      conditions: ["Logement de plus de 15 ans", "Résidence principale", "Travaux réalisés par un artisan RGE", "Plafonds de ressources respectés"],
      link: "#",
    },
    {
      title: "Primes CEE (Certificats d'Économie d'Énergie)",
      icon: <Zap className="h-8 w-8 text-green-600" />,
      description: "Financées par les fournisseurs d'énergie, ces primes sont cumulables avec MaPrimeRénov'. Elles récompensent les économies d'énergie réalisées grâce à l'installation d d'un système performant (climatisation réversible). Montant jusqu'à 800€.",
      conditions: ["Installation d'un équipement performant (PAC air/air)", "Travaux réalisés par un artisan RGE", "Demande faite avant la signature du devis"],
      link: "#",
    },
    {
      title: "TVA Réduite à 10%",
      icon: <Euro className="h-8 w-8 text-purple-600" />,
      description: "Au lieu du taux normal de 20%, vous bénéficiez d'une TVA réduite à 10% sur l'équipement et la main d'œuvre pour l'installation d'une climatisation réversible.",
      conditions: ["Logement achevé depuis plus de 2 ans", "Résidence principale ou secondaire", "Travaux réalisés par un professionnel"],
      link: "#",
    },
  ];

  return (
    <section id="primes" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
            Aides et Primes 2025 pour votre Climatisation Réversible
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
            Profitez des dispositifs de l'État pour réduire considérablement le coût de votre installation.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {aides.map((aide, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-600">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50">
                  {aide.icon}
                </div>
                <CardTitle className="text-xl font-bold">{aide.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{aide.description}</p>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Conditions principales :</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  {aide.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      {condition}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                <ShieldCheck className="inline-block h-5 w-5 text-blue-600 mr-2" />
                Notre simulateur intègre ces critères pour vous donner une estimation personnalisée.
            </p>
        </div>
      </div>
    </section>
  );
};

export default PrimesSection;