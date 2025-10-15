"use client";

import React from 'react';
import { Star, StarHalf, User, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="h-5 w-5 fill-current" />)}
      {hasHalfStar && <StarHalf key="half" className="h-5 w-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />)}
    </div>
  );
};

const AvisSection = () => {
  return (
    <section id="avis" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ils nous font confiance</h2>
            
            {/* Témoignages Vidéo (simulés) */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Témoignage vidéo 1 */}
                <Card className="shadow-lg overflow-hidden">
                    <div className="aspect-video bg-gray-200 relative cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300">
                            <Play className="text-white text-4xl h-12 w-12" />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                            <Play className="mr-1 h-4 w-4" /> Voir le témoignage
                        </div>
                    </div>
                    <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <User className="text-blue-600 h-6 w-6" />
                            </div>
                            <div>
                                <div className="font-semibold">Marie et Pierre L.</div>
                                <div className="text-sm text-gray-500">Maison 85m² - Lyon</div>
                            </div>
                        </div>
                        <p className="text-gray-600">"Grâce aux aides, nous avons économisé 3200€ sur notre installation multisplit. Le simulateur était ultra-précis !"</p>
                        <StarRating rating={5} />
                    </CardContent>
                </Card>

                {/* Témoignage vidéo 2 */}
                <Card className="shadow-lg overflow-hidden">
                    <div className="aspect-video bg-gray-200 relative cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300">
                            <Play className="text-white text-4xl h-12 w-12" />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                            <Play className="mr-1 h-4 w-4" /> Voir le témoignage
                        </div>
                    </div>
                    <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <User className="text-green-600 h-6 w-6" />
                            </div>
                            <div>
                                <div className="font-semibold">Sophie M.</div>
                                <div className="text-sm text-gray-500">Appartement 45m² - Paris</div>
                            </div>
                        </div>
                        <p className="text-gray-600">"Installation effectuée en 1 journée seulement. L'équipe était professionnelle et le résultat parfait."</p>
                        <StarRating rating={4.5} />
                    </CardContent>
                </Card>
            </div>

            {/* Avis Textuels */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Avis 1 */}
                <Card className="shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <StarRating rating={5} />
                        <span className="ml-2 text-sm text-gray-600">12/01/2025</span>
                    </div>
                    <p className="text-gray-600 mb-4">"Installation rapide et professionnelle. Les aides ont été parfaitement optimisées, j'ai économisé 45% sur mon projet !"</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <User className="text-blue-600 h-5 w-5" />
                        </div>
                        <div>
                            <div className="font-semibold">Marie L.</div>
                            <div className="text-sm text-gray-500">Paris 15ème</div>
                        </div>
                    </div>
                </Card>

                {/* Avis 2 */}
                <Card className="shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <StarRating rating={5} />
                        <span className="ml-2 text-sm text-gray-600">05/01/2025</span>
                    </div>
                    <p className="text-gray-600 mb-4">"Calculateur très précis. L'installateur était ponctuel et compétent. Je recommande vivement !"</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <User className="text-green-600 h-5 w-5" />
                        </div>
                        <div>
                            <div className="font-semibold">Pierre D.</div>
                            <div className="text-sm text-gray-500">Lyon</div>
                        </div>
                    </div>
                </Card>

                {/* Avis 3 */}
                <Card className="shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <StarRating rating={4.5} />
                        <span className="ml-2 text-sm text-gray-600">28/12/2024</span>
                    </div>
                    <p className="text-gray-600 mb-4">"Service client réactif. Les démarches pour les aides ont été simplifiées. Très satisfait du résultat."</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <User className="text-purple-600 h-5 w-5" />
                            </div>
                        <div>
                            <div className="font-semibold">Sophie M.</div>
                            <div className="text-sm text-gray-500">Marseille</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </section>
  );
};

export default AvisSection;