import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Calculator, HandCoins, UserTie, Shield } from 'lucide-react';

const features = [
  {
    icon: <Calculator className="h-8 w-8 text-blue-600" />,
    title: "Simulateur intelligent",
    description: "Notre algorithme calcule précisément vos aides et économies.",
  },
  {
    icon: <HandCoins className="h-8 w-8 text-green-600" />,
    title: "Aides optimisées",
    description: "Nous maximisons vos aides jusqu'à 70% d'économies.",
  },
  {
    icon: <UserTie className="h-8 w-8 text-purple-600" />,
    title: "Expert dédié",
    description: "Un conseiller vous accompagne de A à Z.",
  },
  {
    icon: <Shield className="h-8 w-8 text-orange-600" />,
    title: "Garantie totale",
    description: "Installation et matériel garantis 5 ans.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pourquoi choisir Climatiseur.pro ?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Découvrez ce qui rend notre service unique et fiable.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;