"use client";

import React from 'react';
import { Calculator, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingSimulatorButtonProps {
  onClick: () => void;
}

const FloatingSimulatorButton: React.FC<FloatingSimulatorButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="floating-simulator-btn fixed bottom-8 left-8 z-40 bg-blue-600 text-white rounded-full px-6 py-4 shadow-lg hover:bg-blue-700 transition duration-300 flex items-center"
    >
      <Calculator className="text-xl" />
      <span className="ml-2 font-semibold hidden md:inline">Simuler mon projet</span>
      <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs animate-pulse">
        <Zap className="h-3 w-3" />
      </div>
    </Button>
  );
};

export default FloatingSimulatorButton;