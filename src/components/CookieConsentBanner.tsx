"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined'); // Or 'customized'
    setShowBanner(false);
    // Here you might want to open a modal for customization
    alert('Vous avez choisi de personnaliser vos préférences de cookies. Cette fonctionnalité sera bientôt disponible.');
  };

  const showCookiesPolicy = () => {
    alert('Politique Cookies - Nous utilisons des cookies essentiels au fonctionnement du site et des statistiques anonymes.');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 transition-transform duration-300 ease-out transform translate-y-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <p className="text-sm">
              🍪 Nous utilisons des cookies pour améliorer votre expérience et réaliser des statistiques de visites. 
              <a href="#" onClick={showCookiesPolicy} className="text-blue-300 hover:text-blue-200 underline">En savoir plus</a>
            </p>
          </div>
          <div className="flex space-x-4">
            <Button onClick={acceptCookies} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-300">
              Accepter
            </Button>
            <Button onClick={declineCookies} className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition duration-300">
              Personnaliser
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;