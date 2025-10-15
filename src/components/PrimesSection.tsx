"use client";

import React from 'react';
import { Home, Leaf, Percent, University, MapPin, Ticket, Check, Euro, Gavel, Shield, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrimesSection = () => {
  return (
    <section id="primes" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Toutes les aides disponibles en 2025</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* MaPrimeRénov' */}
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border border-blue-200">
                    <CardHeader>
                        <Home className="text-blue-600 text-3xl mb-2" size={36} />
                        <CardTitle className="text-xl font-bold">MaPrimeRénov'</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">Aide de l'État pour l'installation de pompes à chaleur air-air.</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Revenus très modestes:</span>
                                <span className="font-semibold text-green-600">Jusqu'à 4000€</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Revenus modestes:</span>
                                <span className="font-semibold text-green-600">Jusqu'à 3000€</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Revenus intermédiaires:</span>
                                <span className="font-semibold text-green-600">Jusqu'à 2000€</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CEE */}
                <Card className="bg-gradient-to-br from-green-50 to-green-100 shadow-lg border border-green-200">
                    <CardHeader>
                        <Leaf className="text-green-600 text-3xl mb-2" size={36} />
                        <CardTitle className="text-xl font-bold">Prime CEE</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">Certificats d'Économies d'Énergie versés par les fournisseurs d'énergie.</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Montant moyen:</span>
                                <span className="font-semibold text-green-600">200€ à 800€</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Cumulable avec MaPrimeRénov'
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* TVA réduite */}
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg border border-purple-200">
                    <CardHeader>
                        <Percent className="text-purple-600 text-3xl mb-2" size={36} />
                        <CardTitle className="text-xl font-bold">TVA à 10%</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">Taux de TVA réduit pour les travaux d'amélioration énergétique.</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Au lieu de 20%:</span>
                                <span className="font-semibold text-green-600">TVA à 10%</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Logement de plus de 2 ans
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Éco-PTZ */}
                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg p-6 border border-orange-200">
                    <CardHeader>
                        <University className="text-orange-600 text-3xl mb-2" size={36} />
                        <CardTitle className="text-xl font-bold">Éco-PTZ</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">Prêt à taux zéro pour financer vos travaux de rénovation énergétique.</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Montant max:</span>
                                <span className="font-semibold text-green-600">Jusqu'à 15000€</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Remboursement sur 15 ans
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Aides locales */}
                <Card className="bg-gradient-to-br from-red-50 to-red-100 shadow-lg p-6 border border-red-200">
                    <CardHeader>
                        <MapPin className="text-red-600 text-3xl mb-2" size={36} />
                        <CardTitle className="text-xl font-bold">Aides locales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">Subventions des collectivités territoriales (région, département, commune).</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Variable selon région:</span>
                                <span className="font-semibold text-green-600">500€ à 2000€</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Consultez votre mairie
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Chèque énergie */}
                <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg p-6 border border-yellow-200">
                    <CardHeader>
                        <Ticket className="text-yellow-600 text-3xl mb-2" size={36} />
                        <CardTitle className="text-xl font-bold">Chèque énergie</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">Aide pour payer les factures d'énergie ou financer des travaux.</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Montant annuel:</span>
                                <span className="font-semibold text-green-600">48€ à 277€</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Selon revenus du foyer
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Conditions éco-PTZ */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center">
                    <Info className="mr-2 h-6 w-6" />Conditions de l'éco-PTZ 2025
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-blue-700 mb-3">✅ Conditions d'éligibilité</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-1 h-5 w-5" />
                                <span>Logement construit avant le 1er janvier 1990</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-1 h-5 w-5" />
                                <span>Résidence principale</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-1 h-5 w-5" />
                                <span>Propriétaire occupant ou bailleur</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-1 h-5 w-5" />
                                <span>Bouquet de travaux (2 actions minimum)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-blue-700 mb-3">📋 Caractéristiques du prêt</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <Euro className="text-blue-500 mr-2 mt-1 h-5 w-5" />
                                <span>Montant : jusqu'à 50 000€</span>
                            </li>
                            <li className="flex items-start">
                                <FileText className="text-blue-500 mr-2 mt-1 h-5 w-5" />
                                <span>Durée : 10 à 20 ans</span>
                            </li>
                            <li className="flex items-start">
                                <Percent className="text-blue-500 mr-2 mt-1 h-5 w-5" />
                                <span>Taux : 0% d'intérêt</span>
                            </li>
                            <li className="flex items-start">
                                <Shield className="text-blue-500 mr-2 mt-1 h-5 w-5" />
                                <span>Installation par professionnel RGE obligatoire</span>
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