import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Lightbulb, Rocket, Shield } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: "Design Intuitif",
    description: "Une interface utilisateur claire et facile à naviguer pour une expérience optimale.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-purple-600" />,
    title: "Performances Rapides",
    description: "Optimisé pour la vitesse, votre application répondra instantanément à vos besoins.",
  },
  {
    icon: <Shield className="h-8 w-8 text-green-600" />,
    title: "Sécurité Robuste",
    description: "Vos données sont protégées avec les dernières technologies de sécurité.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Des fonctionnalités conçues pour vous
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Découvrez ce qui rend notre application unique et puissante.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
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

export default FeaturesSection;