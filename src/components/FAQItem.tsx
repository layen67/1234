"use client";

import React from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, value }) => {
  return (
    <AccordionItem value={value} className="border-b border-gray-200 dark:border-gray-700">
      <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4 transition-colors duration-200">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 dark:text-gray-400 pb-4 pr-4">
        <p>{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;