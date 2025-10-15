"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sophie L. (75 - Paris)",
    rating: 5,
    text: "Installation d'un monosplit réversible en 48h comme promis. Le simulateur a été très précis sur le montant des aides. Équipe RGE professionnelle et très propre. Je recommande Climatiseur.pro !",
    date: "Juillet 2025",
  },
  {
    name: "Marc D. (33 - Bordeaux)",
    rating: 5,
    text: "J'ai pu comparer plusieurs devis et calculer mes aides CEE et MaPrimeRénov' en 5 minutes. Le coût final était exactement celui estimé. Service client réactif et installation parfaite d'un multisplit.",
    date: "Juin 2025",
  },
  {
    name: "Fatima K. (69 - Lyon)",
    rating: 4,
    text: "Le guide d'achat m'a beaucoup aidé à choisir entre un gainable et un multisplit. L'installation du gainable a pris 3 jours, mais le résultat est impeccable et très discret. Très satisfaite.",
    date: "Mai 2025",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center mb-3">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const AvisSection = () => {
  return (
    <section id="avis" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
            Nos Clients Témoignent
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
            4.8/5 basé sur 1 247 avis vérifiés. La satisfaction est notre priorité.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 shadow-xl border-t-4 border-blue-500 relative overflow-hidden">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100 dark:text-blue-900/50" />
              <CardContent className="p-0">
                <StarRating rating={review.rating} />
                <p className="text-gray-700 dark:text-gray-300 italic mb-4 relative z-10">
                  "{review.text}"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="font-semibold text-gray-800 dark:text-white">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Lire tous les avis (1247)
            </Button>
        </div>
      </div>
    </section>
  );
};

export default AvisSection;