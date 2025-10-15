"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Euro, ShieldCheck, Home, Zap, CheckCircle, Leaf, Percentage, University, MapPin, Ticket, Clock } from 'lucide-react';

const PrimesSection = () => {
  const aides = [
    {
      title: "MaPrimeRénov' (MPR)",
      icon: <Home className="h-8 w-8 text-blue-600" />,
      description: "Aide de l'État pour l'installation d'une pompe à chaleur air/air (climatisation réversible). Montant variable selon les revenus.",
      details: [
        { label: "Revenus très modestes:", value: "Jusqu'à 4000€", color: "text-green-600" },
        { label: "Revenus modestes:", value: "Jusqu'à 3000€", color: "text-green-600" },
        { label: "Revenus intermédiaires:", value: "Jusqu'à 2000€", color: "text-green-600" },
      ],
      color: "blue",
    },
    {
      title: "Primes CEE (Certificats d'Économie d'Énergie)",
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      description: "Financées par les fournisseurs d'énergie, cumulables avec MaPrimeRénov'. Récompense les économies d'énergie.",
      details: [
        { label: "Montant moyen:", value: "200€ à 800€", color: "text-green-600" },
        { label: "Condition:", value: "Installation RGE", color: "text-gray-500" },
      ],
      color: "green",
    },
    {
      title: "TVA Réduite à 10%",
      icon: <Percentage className="h-8 w-8 text-purple-600" />,
      description: "Taux de TVA réduit sur l'équipement et la main d'œuvre pour les travaux de rénovation énergétique.",
      details: [
        { label: "Taux appliqué:", value: "10%", color: "text-green-600" },
        { label: "Condition:", value: "Logement de plus de 2 ans", color: "text-gray-500" },
      ],
      color: "purple",
    },
    {
      title: "Éco-PTZ (Prêt à Taux Zéro)",
      icon: <University className="h-8 w-8 text-orange-600" />,
      description: "Prêt sans intérêt pour financer le reste à charge de vos travaux de rénovation énergétique.",
      details: [
        { label: "Montant max:", value: "Jusqu'à 15 000€", color: "text-green-600" },
        { label: "Durée:", value: "Jusqu'à 15 ans", color: "text-gray-500" },
      ],
      color: "orange",
    },
    {
      title: "Aides locales",
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      description: "Subventions des collectivités territoriales (région, département, commune).",
      details: [
        { label: "Montant variable:", value: "500€ à 2000€", color: "text-green-600" },
        { label: "Conseil:", value: "Consultez votre mairie", color: "text-gray-500" },
      ],
      color: "red",
    },
    {
      title: "Chèque énergie",
      icon: <Ticket className="h-8 w-8 text-yellow-600" />,
      description: "Aide pour payer les factures d'énergie ou financer des travaux.",
      details: [
        { label: "Montant annuel:", value: "48€ à 277€", color: "text-green-600" },
        { label: "Condition:", value: "Selon revenus du foyer", color: "text-gray-500" },
      ],
      color: "yellow",
    },
  ];

  return (
    <section id="primes" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
            Toutes les Aides et Primes 2025 pour votre Climatisation
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
            Profitez des dispositifs de l'État pour réduire considérablement le coût de votre installation.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aides.map((aide, index) => (
            <Card key={index} className={`shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-${aide.color}-600 dark:bg-gray-800`}>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className={`p-3 rounded-full bg-${aide.color}-100 dark:bg-${aide.color}-900/50`}>
                  {aide.icon}
                </div>
                <CardTitle className="text-xl font-bold">{aide.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{aide.description}</p>
                <div className="space-y-2 text-sm">
                  {aide.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{detail.label}</span>
                      <span className={`font-semibold ${detail.color}`}>{detail.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Conditions éco-PTZ détaillées */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 dark:bg-gray-800 dark:border-blue-900">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6 text-center flex items-center justify-center">
                <University className="mr-2 h-6 w-6" />Conditions de l'Éco-PTZ 2025
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-3">✅ Conditions d'éligibilité</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Logement construit avant le 1er janvier 1990</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Résidence principale</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Propriétaire occupant ou bailleur</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Installation par professionnel RGE obligatoire</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-3">📋 Caractéristiques du prêt</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                            <Euro className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Montant : jusqu'à 50 000€</span>
                        </li>
                        <li className="flex items-start">
                            <Clock className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Durée : 10 à 20 ans</span>
                        </li>
                        <li className="flex items-start">
                            <Percentage className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Taux : 0% d'intérêt</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PrimesSection;