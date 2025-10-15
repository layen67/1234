"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Thermometer, Zap, Maximize2, Volume2 } from 'lucide-react';

const GuideSection = () => {
  const guides = [
    {
      title: "Calculer la puissance (BTU/kW)",
      icon: <Maximize2 className="h-8 w-8 text-red-600" />,
      description: "La puissance est cruciale. Une règle simple : 100W par m² pour une hauteur sous plafond standard (2.5m). Multipliez par 3.41 pour obtenir les BTU. Ex: 35m² = 3500W ≈ 12000 BTU. Ne sous-estimez jamais la puissance nécessaire.",
    },
    {
      title: "Choisir la technologie Inverter",
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      description: "L'Inverter permet au compresseur de moduler sa vitesse au lieu de s'arrêter et de redémarrer. Résultat : jusqu'à 30% d'économies d'énergie, une température plus stable et une durée de vie prolongée de l'appareil.",
    },
    {
      title: "Mono-split vs. Multi-split",
      icon: <Thermometer className="h-8 w-8 text-blue-600" />,
      description: "Mono-split : idéal pour climatiser une seule pièce. Multi-split : une seule unité extérieure pour plusieurs unités intérieures (jusqu'à 5). Parfait pour climatiser toute la maison discrètement.",
    },
    {
      title: "L'importance du niveau sonore",
      icon: <Volume2 className="h-8 w-8 text-green-600" />,
      description: "Pour une chambre, visez un niveau sonore inférieur à 25 dB(A) (mode nuit). Les modèles modernes Inverter sont beaucoup plus silencieux que les anciens. Vérifiez le niveau sonore de l'unité intérieure et extérieure.",
    },
  ];

  return (
    <section id="guide" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
            Guide d'Achat : Comment choisir son Climatiseur ?
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
            Nos conseils d'experts pour trouver le modèle parfait adapté à votre logement et à votre budget.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, index) => (
            <Card key={index} className="p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mb-3">{guide.icon}</div>
                <CardTitle className="text-lg font-bold">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-sm">
                  {guide.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
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