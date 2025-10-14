"use client";

import React from 'react';

const PromoBanner = () => {
  return (
    <div className="bg-yellow-400 text-blue-900 py-2 overflow-hidden mt-16"> {/* mt-16 to account for fixed header */}
      <div className="marquee">
        <span className="font-semibold">
          🎯 <strong>SPECIAL ÉTÉ 2025</strong> | Installation express sous 48h | 
          💰 <strong>Jusqu'à 70% d'économies</strong> avec les aides de l'État | 
          🌟 <strong>4.8/5</strong> basé sur 1 247 avis clients |
          ⚡ <strong>Financement 0%</strong> disponible |
          🏆 <strong>Certifié RGE</strong> - Installation garantie 5 ans
        </span>
      </div>
    </div>
  );
};

export default PromoBanner;