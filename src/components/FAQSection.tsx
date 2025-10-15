"use client";

import React from 'react';
import { Accordion } from "@/components/ui/accordion";
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "Quelle est la durée d'installation moyenne ?",
    answer: "L'installation d'un climatiseur monosplit prend généralement 1 journée. Pour un multisplit, comptez 1 à 2 jours selon le nombre d'unités. Les systèmes gainables nécessitent 2 à 3 jours de travail.",
    value: "item-1",
  },
  {
    question: "Les aides sont-elles cumulables ?",
    answer: "Oui, la plupart des aides sont cumulables : MaPrimeRénov' + Prime CEE + TVA réduite. L'Éco-PTZ peut également être combiné avec les autres aides pour financer le reste à charge.",
    value: "item-2",
  },
  {
    question: "Faut-il une autorisation pour installer un climatiseur ?",
    answer: "En maison individuelle, aucune autorisation n'est nécessaire. En copropriété, il faut vérifier le règlement et parfois obtenir l'accord du syndic. Nous vous accompagnons dans ces démarches.",
    value: "item-3",
  },
  {
    question: "Quelles sont les conditions exactes pour l'éco-PTZ ?",
    answer: "L'éco-PTZ est accessible pour les logements construits avant 1990, en résidence principale, pour les propriétaires occupants ou bailleurs. Il faut réaliser un bouquet de travaux (au moins 2 actions) et faire appel à un professionnel RGE.",
    value: "item-4",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-16 bg-white dark:bg-gray-900">
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