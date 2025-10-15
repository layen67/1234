"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Home, Building, Volume2, Zap, Wifi, Ruler } from 'lucide-react';

const GuideSection = () => {
  return (
    <section id="guide" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Guide d'achat : Choisir le bon climatiseur en 2025</h2>
                
                <div className="space-y-8">
                    {/* Article Climatiseur Mobile */}
                    <article className="border-b border-gray-200 pb-6">
                        <h3 className="text-2xl font-bold text-blue-600 mb-3 flex items-center"><Lightbulb className="mr-2 h-6 w-6" />Climatiseur Mobile : La Solution Flexible</h3>
                        <p className="text-gray-700 mb-4">
                            Le <strong>climatiseur mobile</strong> est idéal pour les locations, les petits espaces ou en solution d'appoint. 
                            Nos experts vous conseillent sur les meilleurs modèles de <strong>climatiseur portable</strong> adaptés à vos besoins.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-800 mb-2">Avantages du climatiseur mobile :</h4>
                            <ul className="list-disc list-inside text-blue-700 space-y-1">
                                <li>Installation facile sans travaux</li>
                                <li>Idéal pour les locations et appartements</li>
                                <li>Solution économique pour une pièce</li>
                                <li>Déplacement facile entre les pièces</li>
                            </ul>
                        </div>
                    </article>

                    {/* Article Climatiseur Réversible */}
                    <article className="border-b border-gray-200 pb-6">
                        <h3 className="text-2xl font-bold text-green-600 mb-3 flex items-center"><Zap className="mr-2 h-6 w-6" />Climatiseur Réversible : Chauffage et Rafraîchissement</h3>
                        <p className="text-gray-700 mb-4">
                            Le <strong>climatiseur réversible</strong> offre le confort toute l'année. 
                            Notre simulateur calcule les aides disponibles pour l'installation d'un système réversible.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-bold text-green-800 mb-2">✅ Avantages</h4>
                                <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                                    <li>Solution 2-en-1 chauffage/climatisation</li>
                                    <li>Économies d'énergie importantes</li>
                                    <li>Éligible aux aides MaPrimeRénov'</li>
                                    <li>Confort optimal toute l'année</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h4 className="font-bold text-orange-800 mb-2">🏠 Idéal pour</h4>
                                <ul className="list-disc list-inside text-orange-700 text-sm space-y-1">
                                    <li>Maisons individuelles</li>
                                    <li>Appartements avec terrasse</li>
                                    <li>Rénovation énergétique</li>
                                    <li>Remplacement chauffage ancien</li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    {/* Article Climatiseur Split */}
                    <article className="border-b border-gray-200 pb-6">
                        <h3 className="text-2xl font-bold text-purple-600 mb-3 flex items-center"><Home className="mr-2 h-6 w-6" />Climatiseur Split : Performance et Discrétion</h3>
                        <p className="text-gray-700 mb-4">
                            Les systèmes <strong>climatiseur split</strong> (monosplit et multisplit) offrent les meilleures performances 
                            pour le rafraîchissement de votre habitation. Notre calculateur vous aide à choisir entre monosplit et multisplit.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="text-center">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Home className="text-purple-600 text-xl" />
                                </div>
                                <h4 className="font-bold text-purple-800">Monosplit</h4>
                                <p className="text-sm text-gray-600 mt-2">1 unité intérieure + 1 unité extérieure<br/>Parfait pour une pièce</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Building className="text-indigo-600 text-xl" />
                                </div>
                                <h4 className="font-bold text-indigo-800">Multisplit</h4>
                                <p className="text-sm text-gray-600 mt-2">Plusieurs unités intérieures<br/>Idéal pour 2 à 5 pièces</p>
                            </div>
                        </div>
                    </article>

                    {/* Guide d'achat rapide */}
                    <article>
                        <h3 className="text-2xl font-bold text-red-600 mb-4">Comment choisir son climatiseur ?</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                                        <Ruler className="text-red-600 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Surface à rafraîchir</h4>
                                        <p className="text-sm text-gray-600">10-25m² : 9000 BTU | 25-35m² : 12000 BTU | 35-50m² : 18000 BTU</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                        <Volume2 className="text-blue-600 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Niveau sonore</h4>
                                        <p className="text-sm text-gray-600">Privilégiez les modèles <strong>climatiseur silencieux</strong> en dessous de 25 dB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                                        <Zap className="text-green-600 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Technologie Inverter</h4>
                                        <p className="text-sm text-gray-600">Les <strong>climatiseurs inverter</strong> permettent jusqu'à 40% d'économie d'énergie</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                                        <Wifi className="text-purple-600 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Connexion intelligente</h4>
                                        <p className="text-sm text-gray-600">Les <strong>climatiseurs connectés</strong> offrent un contrôle à distance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  );
};

export default GuideSection;