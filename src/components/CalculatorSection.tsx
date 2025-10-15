"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Info, Home, Building, Wind, ArrowLeft, ArrowRight, Calculator, Check, Euro, ShieldCheck, PiggyBank, Gift, University, Download, Send, CheckCircle, Percentage } from 'lucide-react';
import { toast } from 'sonner';

// Mapping des départements pour affichage lisible
const departementsMapping: { [key: string]: string } = {
  "01": "Ain", "02": "Aisne", "03": "Allier", "04": "Alpes-de-Haute-Provence", "05": "Hautes-Alpes",
  "06": "Alpes-Maritimes", "07": "Ardèche", "08": "Ardennes", "09": "Ariège", "10": "Aube",
  "11": "Aude", "12": "Aveyron", "13": "Bouches-du-Rhône", "14": "Calvados", "15": "Cantal",
  "16": "Charente", "17": "Charente-Maritime", "18": "Cher", "19": "Corrèze", "21": "Côte-d'Or",
  "22": "Côtes-d'Armor", "23": "Creuse", "24": "Dordogne", "25": "Doubs", "26": "Drôme",
  "27": "Eure", "28": "Eure-et-Loir", "29": "Finistère", "2A": "Corse-du-Sud", "2B": "Haute-Corse",
  "30": "Gard", "31": "Haute-Garonne", "32": "Gers", "33": "Gironde", "34": "Hérault",
  "35": "Ille-et-Vilaine", "36": "Indre", "37": "Indre-et-Loire", "38": "Isère", "39": "Jura",
  "40": "Landes", "41": "Loir-et-Cher", "42": "Loire", "43": "Haute-Loire", "44": "Loire-Atlantique",
  "45": "Loiret", "46": "Lot", "47": "Lot-et-Garonne", "48": "Lozère", "49": "Maine-et-Loire",
  "50": "Manche", "51": "Marne", "52": "Haute-Marne", "53": "Mayenne", "54": "Meurthe-et-Moselle",
  "55": "Meuse", "56": "Morbihan", "57": "Moselle", "58": "Nièvre", "59": "Nord",
  "60": "Oise", "61": "Orne", "62": "Pas-de-Calais", "63": "Puy-de-Dôme", "64": "Pyrénées-Atlantiques",
  "65": "Hautes-Pyrénées", "66": "Pyrénées-Orientales", "67": "Bas-Rhin", "68": "Haut-Rhin",
  "69": "Rhône", "70": "Haute-Saône", "71": "Saône-et-Loire", "72": "Sarthe", "73": "Savoie",
  "74": "Haute-Savoie", "75": "Paris", "76": "Seine-Maritime", "77": "Seine-et-Marne", "78": "Yvelines",
  "79": "Deux-Sèvres", "80": "Somme", "81": "Tarn", "82": "Tarn-et-Garonne", "83": "Var",
  "84": "Vaucluse", "85": "Vendée", "86": "Vienne", "87": "Haute-Vienne", "88": "Vosges",
  "89": "Yonne", "90": "Territoire de Belfort", "91": "Essonne", "92": "Hauts-de-Seine",
  "93": "Seine-Saint-Denis", "94": "Val-de-Marne", "95": "Val-d'Oise", "971": "Guadeloupe",
  "972": "Martinique", "973": "Guyane", "974": "La Réunion", "976": "Mayotte"
};

// Tiers de revenus MaPrimeRénov' (simplifié et illustratif)
const REVENU_TIERS = {
    TRES_MODESTE: 1, // Bleu
    MODESTE: 2,      // Jaune
    INTERMEDIAIRE: 3, // Violet
    AISÉ: 4,         // Rose
    NON_ELIGIBLE: 5
};

// Plafonds de revenus 2025 pour MaPrimeRénov' (valeurs indicatives)
const INCOME_THRESHOLDS = {
    1: { veryModest: 15677, modest: 21093, intermediate: 40000 },
    2: { veryModest: 22960, modest: 30914, intermediate: 60000 },
    3: { veryModest: 27579, modest: 37121, intermediate: 80000 },
    4: { veryModest: 32206, modest: 43337, intermediate: 100000 },
    5: { veryModest: 36851, modest: 49569, intermediate: 120000 }
};

interface CalculatorSectionProps {
  scrollToSection: (id: string) => void;
}

const CalculatorSection: React.FC<CalculatorSectionProps> = ({ scrollToSection }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedInstallationType, setSelectedInstallationType] = useState<string>('');
  const [surface, setSurface] = useState<number | ''>('');
  const [rooms, setRooms] = useState<string>('1');
  const [housingType, setHousingType] = useState<string>('appartement');
  const [constructionYear, setConstructionYear] = useState<string>('recent');
  const [insulation, setInsulation] = useState<string>('excellente');
  const [department, setDepartment] = useState<string>('');
  const [reversible, setReversible] = useState<boolean>(true);
  const [wifi, setWifi] = useState<boolean>(false);
  const [inverter, setInverter] = useState<boolean>(true);
  const [installation, setInstallation] = useState<boolean>(true); // RGE installation
  const [income, setIncome] = useState<number | ''>('');
  const [householdSize, setHouseholdSize] = useState<string>('1');
  const [houseAge, setHouseAge] = useState<string>('plus15');
  const [currentHeating, setCurrentHeating] = useState<string>('electrique');
  const [propertyStatus, setPropertyStatus] = useState<string>('residence_principale');
  const [ownerType, setOwnerType] = useState<string>('occupant');

  const [surfaceError, setSurfaceError] = useState<string>('');
  const [departmentError, setDepartmentError] = useState<string>('');
  const [incomeError, setIncomeError] = useState<string>('');

  const [calculationData, setCalculationData] = useState<any>(null);

  useEffect(() => {
    // Scroll to the calculator section when the step changes
    const element = document.getElementById('calculateur');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentStep]);

  const validateStep = (step: number): boolean => {
    let isValid = true;
    setSurfaceError('');
    setDepartmentError('');
    setIncomeError('');

    switch (step) {
      case 1:
        if (!selectedInstallationType) {
          toast.error('Veuillez sélectionner un type d\'installation.');
          isValid = false;
        }
        const parsedSurface = typeof surface === 'number' ? surface : parseInt(surface as string);
        if (!parsedSurface || parsedSurface < 10 || parsedSurface > 500) {
          setSurfaceError('Veuillez saisir une surface valide entre 10 et 500 m².');
          toast.error('Veuillez saisir une surface valide entre 10 et 500 m².');
          isValid = false;
        }
        break;
      case 2:
        if (!department) {
          setDepartmentError('Veuillez sélectionner votre département.');
          toast.error('Veuillez sélectionner votre département.');
          isValid = false;
        }
        break;
      case 3:
        const parsedIncome = typeof income === 'number' ? income : parseInt(income as string);
        if (!parsedIncome || parsedIncome <= 0) {
          setIncomeError('Veuillez saisir un revenu fiscal de référence valide.');
          toast.error('Veuillez saisir un revenu fiscal de référence valide.');
          isValid = false;
        }
        break;
    }
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(prev => prev + 1);
      } else {
        calculateEstimate();
      }
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setCalculationData(null); // Clear results when going back
    }
  };

  const updateProgress = () => {
    const progressPercentage = ((currentStep - 1) / 2) * 100;
    return progressPercentage;
  };

  const getRevenuTier = (income: number, size: number): number => {
    const thresholds = INCOME_THRESHOLDS[size] || INCOME_THRESHOLDS[5];
    
    if (income <= thresholds.veryModest) return REVENU_TIERS.TRES_MODESTE;
    if (income <= thresholds.modest) return REVENU_TIERS.MODESTE;
    if (income <= thresholds.intermediate) return REVENU_TIERS.INTERMEDIAIRE;
    if (income > thresholds.intermediate) return REVENU_TIERS.AISÉ;
    
    return REVENU_TIERS.NON_ELIGIBLE;
  };

  const calculateEstimate = () => {
    const parsedSurface = typeof surface === 'number' ? surface : parseInt(surface as string);
    const parsedIncome = typeof income === 'number' ? income : parseInt(income as string);
    const parsedHouseholdSize = parseInt(householdSize);

    let basePrice = 0;
    let equipmentCost = 0;
    let installationCost = 0;
    let optionsCost = 0;
    let baseTVA = 0.20; // Default 20% TVA

    // 1. Base costs based on installation type and surface (using logic from static code)
    const roomsCount = parseInt(rooms);
    
    switch(selectedInstallationType) {
        case 'monosplit':
            basePrice = 1290;
            equipmentCost = 800;
            installationCost = 490;
            break;
        case 'multisplit':
            basePrice = 2490 + (roomsCount - 2) * 500;
            equipmentCost = 1800 + (roomsCount - 2) * 400;
            installationCost = 690;
            break;
        case 'gainable':
            basePrice = 3990 + (roomsCount - 2) * 600;
            equipmentCost = 2800 + (roomsCount - 2) * 500;
            installationCost = 1190;
            break;
        default:
            basePrice = 0;
            equipmentCost = 0;
            installationCost = 0;
    }
    
    // Ajustement selon la surface (simplifié)
    const surfaceMultiplier = 1 + Math.max(0, (parsedSurface - 50) * 0.01);
    basePrice = basePrice * surfaceMultiplier;
    equipmentCost = equipmentCost * surfaceMultiplier;
    
    // Options supplémentaires
    if (reversible) optionsCost += 400;
    if (wifi) optionsCost += 150;
    if (inverter) optionsCost += 200;
    
    // Ajustement selon l'isolation (impact sur la puissance requise)
    switch (insulation) {
      case 'excellente': basePrice *= 0.9; break;
      case 'bonne': basePrice *= 0.95; break;
      case 'moyenne': basePrice *= 1.0; break;
      case 'faible': basePrice *= 1.1; break;
    }

    const totalCostHT = basePrice + optionsCost;

    // 2. Aides calculation
    let maprimeRenov = 0;
    let primeCEE = 0;
    let eligibleEcoPTZ = false;
    let revenuTier = getRevenuTier(parsedIncome, parsedHouseholdSize);
    
    // TVA réduite 10% (si RGE et logement > 2 ans)
    if (installation && houseAge === 'plus15') {
      baseTVA = 0.10;
    }
    const vatAmount = totalCostHT * baseTVA;
    const totalTTC = totalCostHT + vatAmount;
    
    // MaPrimeRénov' (MPR) - Seulement pour réversible et RGE
    if (houseAge === 'plus15' && installation && reversible) {
        const thresholds = INCOME_THRESHOLDS[parsedHouseholdSize] || INCOME_THRESHOLDS[5];
        
        if (parsedIncome <= thresholds.veryModest) {
            maprimeRenov = Math.min(4000, totalTTC * 0.75);
        } else if (parsedIncome <= thresholds.modest) {
            maprimeRenov = Math.min(3000, totalTTC * 0.6);
        } else if (parsedIncome <= thresholds.intermediate) {
            maprimeRenov = Math.min(2000, totalTTC * 0.4);
        } else {
            maprimeRenov = 0; // Aisé
        }
    }

    // Prime CEE - Requiert RGE et réversible
    if (installation && reversible) {
        let baseCEE = parsedSurface * 5;
        if (revenuTier <= REVENU_TIERS.MODESTE) {
            primeCEE = Math.min(baseCEE * 2, 800);
        } else {
            primeCEE = Math.min(baseCEE, 400);
        }
    }

    // Eco-PTZ eligibility (Logement > 15 ans, résidence principale, propriétaire)
    if (houseAge === 'plus15' && propertyStatus === 'residence_principale' && (ownerType === 'occupant' || ownerType === 'bailleur')) {
      eligibleEcoPTZ = true;
    }
    const ecoPTZAmount = eligibleEcoPTZ ? Math.min(15000, totalTTC * 0.7) : 0;

    const totalAides = maprimeRenov + primeCEE;
    const finalCost = Math.max(0, totalTTC - totalAides);
    const savings = totalAides;

    setCalculationData({
      equipmentCost: Math.round(equipmentCost),
      installationCost: Math.round(installationCost),
      optionsCost: Math.round(optionsCost),
      totalCost: Math.round(totalCostHT), // HT
      vatCost: Math.round(vatAmount),
      totalTTC: Math.round(totalTTC),
      maprime: Math.round(maprimeRenov),
      cee: Math.round(primeCEE),
      tvaReduced: baseTVA === 0.10 ? Math.round(vatAmount) : 0, 
      ecoPTZ: Math.round(ecoPTZAmount), 
      totalAides: Math.round(totalAides),
      finalCost: Math.round(finalCost),
      savings: Math.round(savings),
      eligibleEcoPTZ: eligibleEcoPTZ,
      revenuTier: revenuTier,
      baseTVA: baseTVA,
    });

    scrollToSection('results');
    toast.success('Estimation calculée avec succès ! Consultez les résultats ci-dessous.');
  };

  const getRevenuTierLabel = (tier: number) => {
    switch (tier) {
        case REVENU_TIERS.TRES_MODESTE: return "Très Modeste (Bleu)";
        case REVENU_TIERS.MODESTE: return "Modeste (Jaune)";
        case REVENU_TIERS.INTERMEDIAIRE: return "Intermédiaire (Violet)";
        case REVENU_TIERS.AISÉ: return "Aisé (Rose)";
        default: return "Non éligible aux aides directes";
    }
  };
  
  const handleTypeSelection = (type: string) => {
    setSelectedInstallationType(type);
  };

  return (
    <>
    <section id="calculateur" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600">
            <span className="text-red-500">*</span> Champs obligatoires pour le calcul des aides
          </p>
        </div>

        {/* Indicateur d'étapes amélioré avec progression */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNum) => (
              <React.Fragment key={stepNum}>
                <div className="flex flex-col items-center">
                  <div
                    className={`step-indicator w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white transition-all duration-300
                      ${stepNum < currentStep ? 'bg-green-500 text-white' : stepNum === currentStep ? 'bg-blue-500 text-white animate-pulse' : 'bg-gray-300 text-gray-600'}`}
                  >
                    {stepNum < currentStep ? <Check className="h-6 w-6" /> : stepNum}
                  </div>
                  <span className="text-xs mt-2 text-gray-600 font-medium">
                    {stepNum === 1 ? 'Installation' : stepNum === 2 ? 'Logement' : 'Aides'}
                  </span>
                </div>
                {stepNum < 3 && (
                  <div className="w-20 h-2 bg-gray-200 rounded-full mt-[-20px] relative">
                    <div
                      className="h-full bg-blue-500 rounded-full progress-bar transition-all duration-500"
                      style={{ width: `${currentStep > stepNum ? 100 : 0}%` }}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Indicateur de progression globale */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-full h-3 shadow-inner">
            <div
              id="global-progress"
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full progress-bar transition-all duration-500"
              style={{ width: `${updateProgress()}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>0%</span>
            <span id="progress-text">Étape {currentStep} sur 3</span>
            <span>100%</span>
          </div>
        </div>

        <Card className="rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden calculator-card">
          {/* Décoration de fond améliorée */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-50 to-transparent rounded-full -ml-12 -mb-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full opacity-30"></div>

          {/* Étape 1: Type d'installation améliorée */}
          {currentStep === 1 && (
            <div id="step1" className="step-content animate-slideIn">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Étape 1: Type d'installation</h2>
                <p className="text-gray-600">Sélectionnez le type de climatisation qui correspond à vos besoins</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Monosplit amélioré */}
                <div
                  className={`installation-type border-2 rounded-2xl p-6 cursor-pointer hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30 relative overflow-hidden group ${selectedInstallationType === 'monosplit' ? 'type-selected border-blue-500 ring-4 ring-blue-200' : 'border-gray-200'}`}
                  onClick={() => handleTypeSelection('monosplit')}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="text-center relative z-10">
                    <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300 shadow-md">
                      <Home className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Monosplit</h3>
                    <p className="text-gray-600 text-sm mb-3">Une unité intérieure + une unité extérieure</p>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">À partir de 1290€</div>
                    <div className="mt-2 text-xs text-gray-500 flex flex-col space-y-1">
                      <div>⭐ Idéal pour 1 pièce</div>
                      <div>⚡ Puissance: 2.5 à 3.5 kW</div>
                      <div>🏠 Surface: 10 à 35 m²</div>
                    </div>
                  </div>
                  {/* Badge populaire */}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Le plus choisi
                  </div>
                </div>

                {/* Multisplit amélioré */}
                <div
                  className={`installation-type border-2 rounded-2xl p-6 cursor-pointer hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50/30 relative overflow-hidden group ${selectedInstallationType === 'multisplit' ? 'type-selected border-blue-500 ring-4 ring-blue-200' : 'border-gray-200'}`}
                  onClick={() => handleTypeSelection('multisplit')}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="text-center relative z-10">
                    <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300 shadow-md">
                      <Building className="text-2xl text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Multisplit</h3>
                    <p className="text-gray-600 text-sm mb-3">Plusieurs unités intérieures + une unité extérieure</p>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">À partir de 2490€</div>
                    <div className="mt-2 text-xs text-gray-500 flex flex-col space-y-1">
                      <div>🏠 Idéal pour 2-5 pièces</div>
                      <div>⚡ Puissance: 5 à 10 kW</div>
                      <div>📏 Surface: 35 à 100 m²</div>
                    </div>
                  </div>
                </div>

                {/* Gainable amélioré */}
                <div
                  className={`installation-type border-2 rounded-2xl p-6 cursor-pointer hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50/30 relative overflow-hidden group ${selectedInstallationType === 'gainable' ? 'type-selected border-blue-500 ring-4 ring-blue-200' : 'border-gray-200'}`}
                  onClick={() => handleTypeSelection('gainable')}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-purple-100 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="text-center relative z-10">
                    <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300 shadow-md">
                      <Wind className="text-2xl text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Gainable</h3>
                    <p className="text-gray-600 text-sm mb-3">Système discret intégré dans les combles</p>
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">À partir de 3990€</div>
                    <div className="mt-2 text-xs text-gray-500 flex flex-col space-y-1">
                      <div>✨ Solution haut de gamme</div>
                      <div>⚡ Puissance: 8 à 18 kW</div>
                      <div>🏰 Surface: 80 à 200 m²</div>
                    </div>
                  </div>
                  {/* Badge premium */}
                  <div className="absolute top-4 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Premium
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="surface" className="mb-2 flex items-center">
                    Surface à climatiser (m²) <span className="text-red-500">*</span>
                    <span className="tooltip ml-1 relative group">
                      <Info className="h-4 w-4 text-blue-500 cursor-help" />
                      <span className="tooltiptext absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-md p-2 -mt-12 left-1/2 -translate-x-1/2 w-48">
                        Surface totale des pièces à climatiser. Pour une estimation précise, mesurez chaque pièce.
                      </span>
                    </span>
                  </Label>
                  <Input
                    type="number"
                    id="surface"
                    placeholder="Ex: 50"
                    min={10}
                    max={500}
                    value={surface}
                    onChange={(e) => setSurface(parseInt(e.target.value) || '')}
                    className={surfaceError ? 'border-red-500 bg-red-50' : ''}
                    required
                  />
                  {surfaceError && <p className="text-red-500 text-sm mt-1">{surfaceError}</p>}
                  <p className="text-xs text-gray-500 mt-1">
                    <span>10m² minimum</span> - <span>500m² maximum</span>
                  </p>
                </div>
                <div>
                  <Label htmlFor="rooms" className="mb-2">Nombre de pièces à climatiser</Label>
                  <Select value={rooms} onValueChange={setRooms}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez le nombre de pièces" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 pièce</SelectItem>
                      <SelectItem value="2">2 pièces</SelectItem>
                      <SelectItem value="3">3 pièces</SelectItem>
                      <SelectItem value="4">4 pièces</SelectItem>
                      <SelectItem value="5">5 pièces ou plus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Étape 2: Caractéristiques améliorée */}
          {currentStep === 2 && (
            <div id="step2" className="step-content animate-slideIn">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Étape 2: Caractéristiques du logement</h2>
                <p className="text-gray-600">Ces informations nous aident à affiner votre estimation</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="housingType" className="mb-2">Type de logement</Label>
                  <Select value={housingType} onValueChange={setHousingType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez le type de logement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appartement">Appartement</SelectItem>
                      <SelectItem value="maison">Maison individuelle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="constructionYear" className="mb-2">Année de construction</Label>
                  <Select value={constructionYear} onValueChange={setConstructionYear}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez l'année de construction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Après 2012 (RT 2012)</SelectItem>
                      <SelectItem value="moyen">2000-2012</SelectItem>
                      <SelectItem value="ancien">Avant 2000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="insulation" className="mb-2 flex items-center">
                    Isolation
                    <span className="tooltip ml-1 relative group">
                      <Info className="h-4 w-4 text-blue-500 cursor-help" />
                      <span className="tooltiptext absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-md p-2 -mt-12 left-1/2 -translate-x-1/2 w-48">
                        Qualité de l'isolation de votre logement. Influence la puissance nécessaire.
                      </span>
                    </span>
                  </Label>
                  <Select value={insulation} onValueChange={setInsulation}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez la qualité de l'isolation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellente">Excellente (BBC, RT 2012+)</SelectItem>
                      <SelectItem value="bonne">Bonne</SelectItem>
                      <SelectItem value="moyenne">Moyenne</SelectItem>
                      <SelectItem value="faible">Faible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="department" className="mb-2">Département <span className="text-red-500">*</span></Label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger className={`w-full ${departmentError ? 'border-red-500 bg-red-50' : ''}`}>
                      <SelectValue placeholder="Sélectionnez votre département" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(departementsMapping).map(([code, name]) => (
                        <SelectItem key={code} value={code}>{code} - {name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {departmentError && <p className="text-red-500 text-sm mt-1">{departmentError}</p>}
                </div>
              </div>

              <div className="mb-6">
                <Label className="block text-sm font-medium text-gray-700 mb-3">Options souhaitées</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition duration-300 cursor-pointer" onClick={() => setReversible(!reversible)}>
                    <Checkbox id="reversible" checked={reversible} onCheckedChange={(checked) => setReversible(checked as boolean)} className="mr-3" />
                    <Label htmlFor="reversible">Climatisation réversible (chaud/froid)</Label>
                  </div>
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition duration-300 cursor-pointer" onClick={() => setWifi(!wifi)}>
                    <Checkbox id="wifi" checked={wifi} onCheckedChange={(checked) => setWifi(checked as boolean)} className="mr-3" />
                    <Label htmlFor="wifi">Contrôle WiFi</Label>
                  </div>
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition duration-300 cursor-pointer" onClick={() => setInverter(!inverter)}>
                    <Checkbox id="inverter" checked={inverter} onCheckedChange={(checked) => setInverter(checked as boolean)} className="mr-3" />
                    <Label htmlFor="inverter">Technologie Inverter</Label>
                  </div>
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition duration-300 cursor-pointer" onClick={() => setInstallation(!installation)}>
                    <Checkbox id="installation" checked={installation} onCheckedChange={(checked) => setInstallation(checked as boolean)} className="mr-3" />
                    <Label htmlFor="installation">Installation par professionnel RGE</Label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Étape 3: Situation financière améliorée */}
          {currentStep === 3 && (
            <div id="step3" className="step-content animate-slideIn">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Étape 3: Éligibilité aux aides</h2>
                <p className="text-gray-600">Ces informations déterminent votre éligibilité aux aides financières</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="income" className="mb-2 flex items-center">
                    Revenu fiscal de référence (€) <span className="text-red-500">*</span>
                    <span className="tooltip ml-1 relative group">
                      <Info className="h-4 w-4 text-blue-500 cursor-help" />
                      <span className="tooltiptext absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-md p-2 -mt-12 left-1/2 -translate-x-1/2 w-48">
                        Montant indiqué sur votre avis d'imposition. Détermine le montant des aides.
                      </span>
                    </span>
                  </Label>
                  <Input
                    type="number"
                    id="income"
                    placeholder="Ex: 35000"
                    value={income}
                    onChange={(e) => setIncome(parseInt(e.target.value) || '')}
                    className={incomeError ? 'border-red-500 bg-red-50' : ''}
                    required
                  />
                  {incomeError && <p className="text-red-500 text-sm mt-1">{incomeError}</p>}
                </div>
                <div>
                  <Label htmlFor="householdSize" className="mb-2">Nombre de personnes dans le foyer</Label>
                  <Select value={householdSize} onValueChange={setHouseholdSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez le nombre de personnes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 personne</SelectItem>
                      <SelectItem value="2">2 personnes</SelectItem>
                      <SelectItem value="3">3 personnes</SelectItem>
                      <SelectItem value="4">4 personnes</SelectItem>
                      <SelectItem value="5">5+ personnes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="houseAge" className="mb-2">Âge du logement</Label>
                  <Select value={houseAge} onValueChange={setHouseAge}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez l'âge du logement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plus15">Plus de 15 ans</SelectItem>
                      <SelectItem value="moins15">Moins de 15 ans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="currentHeating" className="mb-2">Système de chauffage actuel</Label>
                  <Select value={currentHeating} onValueChange={setCurrentHeating}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez le système de chauffage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electrique">Électrique</SelectItem>
                      <SelectItem value="gaz">Gaz</SelectItem>
                      <SelectItem value="fioul">Fioul</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Informations propriétaire pour éco-PTZ */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 dark:bg-blue-900/30 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                  <Info className="mr-2 h-5 w-5" />
                  Informations pour l'éco-PTZ
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyStatus" className="mb-2">Statut du logement</Label>
                    <Select value={propertyStatus} onValueChange={setPropertyStatus}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez le statut du logement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residence_principale">Résidence principale</SelectItem>
                        <SelectItem value="residence_secondaire">Résidence secondaire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ownerType" className="mb-2">Type de propriétaire</Label>
                    <Select value={ownerType} onValueChange={setPropertyStatus}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez le type de propriétaire" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="occupant">Propriétaire occupant</SelectItem>
                        <SelectItem value="bailleur">Propriétaire bailleur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button onClick={calculateEstimate} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
                  <Calculator className="mr-2 h-5 w-5" />Calculer mon devis
                </Button>
              </div>
            </div>
          )}

          {/* Navigation entre étapes améliorée */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button
              onClick={previousStep}
              className={`bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition duration-300 flex items-center ${currentStep === 1 ? 'invisible' : ''}`}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />Précédent
            </Button>
            <div className="flex-1 text-center">
              <div className="text-sm text-gray-500">Étape {currentStep} sur 3</div>
            </div>
            <Button
              onClick={currentStep === 3 ? calculateEstimate : nextStep}
              className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ml-auto flex items-center group`}
            >
              <span>{currentStep === 3 ? 'Calculer mon devis' : 'Suivant'}</span>
              {currentStep !== 3 && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 h-5 w-5" />}
              {currentStep === 3 && <Calculator className="ml-2 h-5 w-5" />}
            </Button>
          </div>
        </Card>
      </div>
    </section>

    {/* Section résultats améliorée avec comparaison */}
    {calculationData && (
      <div id="results" className="py-16 bg-white result-animation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Votre estimation personnalisée</h2>
            <p className="text-xl text-gray-600">Basée sur vos informations et les dernières aides 2025</p>
          </div>
          
          {/* Indicateur de revenu */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 text-center">
            <p className="text-yellow-800 font-semibold">
                Votre foyer est classé dans le profil de revenu : <span className="font-bold">{getRevenuTierLabel(calculationData.revenuTier)}</span>.
            </p>
          </div>

          {/* Comparaison avant/après aides */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                <Euro className="inline-block mr-2 h-6 w-6" />Prix TTC sans aides
              </h3>
              <div className="text-4xl font-bold text-red-900 mb-2 line-through">{calculationData.totalTTC}€</div>
              <p className="text-red-700">Coût total avant déduction des primes</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                <PiggyBank className="inline-block mr-2 h-6 w-6" />Coût final estimé
              </h3>
              <div className="text-5xl font-bold text-green-900 mb-2">{calculationData.finalCost}€</div>
              <p className="text-green-700">Après déduction des aides directes</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Coût d'installation amélioré */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <Euro className="mr-2 h-6 w-6" />Détail du coût d'installation
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="flex items-center">
                        Équipement (HT)
                        <span className="tooltip ml-1 relative group">
                            <Info className="h-4 w-4 text-blue-500 cursor-help" />
                            <span className="tooltiptext absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-md p-2 -mt-12 left-1/2 -translate-x-1/2 w-48">
                                Prix des unités intérieures et extérieures, télécommande
                            </span>
                        </span>
                    </span>
                    <span className="font-semibold text-lg">{calculationData.equipmentCost}€</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="flex items-center">
                        Installation RGE (HT)
                        <span className="tooltip ml-1 relative group">
                            <Info className="h-4 w-4 text-blue-500 cursor-help" />
                            <span className="tooltiptext absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-md p-2 -mt-12 left-1/2 -translate-x-1/2 w-48">
                                Main d'œuvre professionnelle RGE, mise en service
                            </span>
                        </span>
                    </span>
                    <span className="font-semibold text-lg">{calculationData.installationCost}€</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="flex items-center">
                        Options (HT)
                    </span>
                    <span className="font-semibold text-lg">{calculationData.optionsCost}€</span>
                </div>
                <hr className="border-blue-200 my-4" />
                <div className="flex justify-between text-xl font-bold text-blue-800">
                    <span>Total HT:</span>
                    <span>{calculationData.totalCost}€</span>
                </div>
                <div className="flex justify-between text-lg text-blue-700">
                    <span>TVA appliquée ({calculationData.baseTVA * 100}%):</span>
                    <span>{calculationData.vatCost}€</span>
                </div>
                <div className="flex justify-between text-2xl font-bold text-blue-900 bg-white rounded-lg p-4 mt-4 border border-blue-200">
                    <span>Total TTC:</span>
                    <span>{calculationData.totalTTC}€</span>
                </div>
              </div>
            </div>

            {/* Aides disponibles améliorées */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <Gift className="inline-block mr-2 h-6 w-6" />Détail des aides disponibles
              </h3>
              <div id="aidesDetails" className="space-y-4">
                {calculationData.maprime > 0 && (
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <span className="flex items-center font-medium">
                      MaPrimeRénov'
                    </span>
                    <span className="font-bold text-green-600">+{calculationData.maprime}€</span>
                  </div>
                )}
                {calculationData.cee > 0 && (
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-500">
                    <span className="flex items-center font-medium">
                      Prime CEE (Certificats d'Économie d'Énergie)
                    </span>
                    <span className="font-bold text-green-600">+{calculationData.cee}€</span>
                  </div>
                )}
                {calculationData.tvaReduced > 0 && (
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <span className="flex items-center font-medium">
                      Avantage TVA réduite (10%)
                    </span>
                    <span className="font-bold text-green-600">Inclus dans le coût TTC</span>
                  </div>
                )}
                {calculationData.maprime === 0 && calculationData.cee === 0 && (
                  <p className="text-gray-600 bg-white p-3 rounded-lg border border-gray-200">
                    Selon votre profil de revenu, vous n'êtes pas éligible aux aides directes pour ce type d'équipement. Vous bénéficiez cependant de la TVA réduite à 10% si votre logement a plus de 2 ans.
                  </p>
                )}
              </div>
              <hr className="border-green-200 my-6" />
              <div className="flex justify-between text-2xl font-bold text-green-900 bg-white rounded-lg p-4 border border-green-200">
                <span>Total des aides directes:</span>
                <span>{calculationData.totalAides}€</span>
              </div>
            </div>
          </div>

          {/* Prêts disponibles */}
          {calculationData.eligibleEcoPTZ && calculationData.ecoPTZ > 0 && (
            <div id="pretsSection" className="mt-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                <University className="inline-block mr-2 h-6 w-6" />Solutions de financement
              </h3>
              <div id="pretsDetails" className="space-y-4">
                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-500">
                  <span className="flex items-center font-medium">
                    Éco-PTZ (prêt à taux 0%)
                  </span>
                  <span className="font-bold text-orange-600">Jusqu'à {calculationData.ecoPTZ}€</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                    Éligibilité confirmée : Logement de plus de 15 ans, résidence principale.
                </p>
              </div>
            </div>
          )}

          {/* Coût final amélioré */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <h3 className="text-3xl font-bold mb-6 relative z-10">Votre investissement final</h3>
            <div className="text-6xl font-bold mb-4 relative z-10">{calculationData.finalCost}€</div>
            <p className="text-xl opacity-90 mb-6 relative z-10">Soit une économie totale de <span className="font-bold text-yellow-300">{calculationData.savings}€</span> (aides directes)</p>
            
            {/* Économies visualisées */}
            <div className="max-w-md mx-auto bg-white/20 rounded-full h-4 mb-6 relative z-10">
                <div id="savings-bar" className="bg-yellow-400 h-4 rounded-full progress-bar" style={{ width: `${Math.min(100, (calculationData.savings / calculationData.totalTTC) * 100)}%` }}></div>
            </div>
            
            {/* CTA Final */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 relative z-10">
                <Button onClick={() => scrollToSection('contact')} className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 flex items-center justify-center">
                    <Send className="inline-block mr-2 h-5 w-5" />Recevoir mon devis personnalisé
                </Button>
                <Button onClick={() => toast.info('La génération de PDF est en cours de développement.')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300 flex items-center justify-center">
                    <Download className="inline-block mr-2 h-5 w-5" />Télécharger cette estimation
                </Button>
            </div>
            <p className="text-sm mt-4 opacity-75 relative z-10">
                <ShieldCheck className="inline-block mr-1 h-4 w-4" />Un expert vous contactera sous 24h - Sans engagement
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default CalculatorSection;