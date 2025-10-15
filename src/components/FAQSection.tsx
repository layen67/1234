"use client";

import React from 'react';
import { Accordion } from "@/components/ui/accordion";
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "Quel est le prix moyen d'une installation de climatisation réversible ?",
    answer: "Le prix varie fortement selon le type (mono/multi-split, gainable) et la puissance. En moyenne, comptez entre 1 500€ et 3 000€ pour un monosplit installé, et entre 3 000€ et 6 000€ pour un multisplit. Notre simulateur vous donne une estimation précise en fonction de votre logement et de votre éligibilité aux aides.",
    value: "item-1",
  },
  {
    question: "Suis-je éligible aux aides de l'État (MaPrimeRénov', CEE) ?",
    answer: "L'éligibilité dépend principalement de votre revenu fiscal de référence, de la nature de votre logement (résidence principale de plus de 15 ans) et du fait que l'installation soit réalisée par un professionnel RGE (Reconnu Garant de l'Environnement). Notre simulateur intègre ces critères pour vous donner une première estimation.",
    value: "item-2",
  },
  {
    question: "Combien de temps prend l'installation d'un climatiseur ?",
    answer: "Pour un monosplit standard, l'installation prend généralement une demi-journée à une journée. Pour un multisplit ou un système gainable, cela peut prendre 1 à 3 jours selon la complexité et le nombre d'unités intérieures.",
    value: "item-3",
  },
  {
    question: "Qu'est-ce qu'un climatiseur Inverter ?",
    answer: "La technologie Inverter permet au compresseur de moduler sa puissance en continu, au lieu de s'arrêter et de redémarrer constamment. Cela assure une température plus stable, réduit la consommation d'énergie (jusqu'à 30%) et prolonge la durée de vie de l'appareil.",
    value: "item-4",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
            Questions Fréquentes
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
            Trouvez rapidement les réponses à vos interrogations sur l'installation et les aides.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <FAQItem 
              key={item.value}
              question={item.question}
              answer={item.answer}
              value={item.value}
            />
          ))}
        </Accordion>
        
        <div className="text-center mt-10">
            <p className="text-gray-600 dark:text-gray-400">Vous n'avez pas trouvé votre réponse ?</p>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300">
                Contactez un expert directement.
            </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;