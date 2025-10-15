"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Thermometer, Zap, Maximize2, Volume2, Ruler, Wifi, CheckCircle, Home, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GuideSection = () => {
  return (
    <section id="guide" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
            Guide d'Achat : Comment choisir son Climatiseur ?
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
            Nos conseils d'experts pour trouver le modèle parfait adapté à votre logement et à votre budget.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 dark:bg-gray-900">
            <div className="space-y-10">
                {/* Article Climatiseur Mobile */}
                <article className="border-b border-gray-200 pb-6 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">Climatiseur Mobile : La Solution Flexible</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Le <strong>climatiseur mobile</strong> est idéal pour les locations, les petits espaces ou en solution d'appoint. 
                        Nos experts vous conseillent sur les meilleurs modèles de <strong>climatiseur portable</strong> adaptés à vos besoins.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg dark:bg-blue-900/30">
                        <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Avantages du climatiseur mobile :</h4>
                        <ul className="list-disc list-inside text-blue-700 dark:text-blue-400 space-y-1">
                            <li>Installation facile sans travaux</li>
                            <li>Idéal pour les locations et appartements</li>
                            <li>Solution économique pour une pièce</li>
                            <li>Déplacement facile entre les pièces</li>
                        </ul>
                    </div>
                </article>

                {/* Article Climatiseur Réversible */}
                <article className="border-b border-gray-200 pb-6 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-green-600 mb-3">Climatiseur Réversible : Chauffage et Rafraîchissement</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Le <strong>climatiseur réversible</strong> offre le confort toute l'année. 
                        Notre simulateur calcule les aides disponibles pour l'installation d'un système réversible.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-green-50 p-4 rounded-lg dark:bg-green-900/30">
                            <h4 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center">
                                <CheckCircle className="h-5 w-5 mr-2" /> Avantages
                            </h4>
                            <ul className="list-disc list-inside text-green-700 dark:text-green-400 text-sm space-y-1">
                                <li>Solution 2-en-1 chauffage/climatisation</li>
                                <li>Économies d'énergie importantes</li>
                                <li>Éligible aux aides MaPrimeRénov'</li>
                                <li>Confort optimal toute l'année</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg dark:bg-orange-900/30">
                            <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                                <Home className="h-5 w-5 mr-2" /> Idéal pour
                            </h4>
                            <ul className="list-disc list-inside text-orange-700 dark:text-orange-400 text-sm space-y-1">
                                <li>Maisons individuelles</li>
                                <li>Appartements avec terrasse</li>
                                <li>Rénovation énergétique</li>
                                <li>Remplacement chauffage ancien</li>
                            </ul>
                        </div>
                    </div>
                </article>

                {/* Article Climatiseur Split */}
                <article className="border-b border-gray-200 pb-6 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-purple-600 mb-3">Climatiseur Split : Performance et Discrétion</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Les systèmes <strong>climatiseur split</strong> (monosplit et multisplit) offrent les meilleures performances 
                        pour le rafraîchissement de votre habitation. Notre calculateur vous aide à choisir entre monosplit et multisplit.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="text-center p-4 bg-purple-50 rounded-lg dark:bg-purple-900/30">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-purple-800">
                                <Home className="text-purple-600 text-xl" />
                            </div>
                            <h4 className="font-bold text-purple-800 dark:text-purple-300">Monosplit</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">1 unité intérieure + 1 unité extérieure<br/>Parfait pour une pièce</p>
                        </div>
                        <div className="text-center p-4 bg-indigo-50 rounded-lg dark:bg-indigo-900/30">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-indigo-800">
                                <Building className="text-indigo-600 text-xl" />
                            </div>
                            <h4 className="font-bold text-indigo-800 dark:text-indigo-300">Multisplit</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Plusieurs unités intérieures<br/>Idéal pour 2 à 5 pièces</p>
                        </div>
                    </div>
                </article>

                {/* Guide d'achat rapide */}
                <article>
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Conseils pour bien choisir</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-red-100 p-2 rounded-lg mr-3 dark:bg-red-900/30">
                                    <Ruler className="h-5 w-5 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-white">Surface à rafraîchir</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">10-25m² : 9000 BTU | 25-35m² : 12000 BTU | 35-50m² : 18000 BTU</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-2 rounded-lg mr-3 dark:bg-blue-900/30">
                                    <Volume2 className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-white">Niveau sonore</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Privilégiez les modèles <strong>climatiseur silencieux</strong> en dessous de 25 dB</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-green-100 p-2 rounded-lg mr-3 dark:bg-green-900/30">
                                    <Zap className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-white">Technologie Inverter</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Les <strong>climatiseurs inverter</strong> permettent jusqu'à 40% d'économie d'énergie</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-purple-100 p-2 rounded-lg mr-3 dark:bg-purple-900/30">
                                    <Wifi className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-white">Connexion intelligente</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Les <strong>climatiseurs connectés</strong> offrent un contrôle à distance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        
        <div className="text-center mt-12">
            <Button onClick={() => document.getElementById('calculateur')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Commencer la simulation pour un devis précis
            </Button>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;