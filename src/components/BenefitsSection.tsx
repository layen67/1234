"use client";

import React from 'react';
import { Euro, Bolt, ShieldCheck } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Euro className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Économies garanties</h3>
            <p className="text-gray-600">Jusqu'à 70% d'économies grâce aux aides de l'État</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bolt className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Installation rapide</h3>
            <p className="text-gray-600">Intervention sous 48h partout en France</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Garantie 5 ans</h3>
            <p className="text-gray-600">Maintenance et SAV inclus pendant 5 ans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;