"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Phone, Mail, MapPin, Send, X } from 'lucide-react';
import { toast } from 'sonner';

// Mapping des départements (réutilisé du calculateur)
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

interface CalculationResult {
  equipmentCost: number;
  installationCost: number;
  optionsCost: number;
  totalCost: number; // HT
  vatCost: number;
  totalTTC: number;
  maprime: number;
  cee: number;
  tvaReduced: number;
  ecoPTZ: number;
  totalAides: number;
  finalCost: number;
  savings: number;
  eligibleEcoPTZ: boolean;
}

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    department: string;
    calculation: CalculationResult | null;
  };
}

const QuickContactModal: React.FC<QuickContactModalProps> = ({ isOpen, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: initialData.department,
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, department: initialData.department }));
  }, [initialData.department]);

  const handleChange = (id: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const formatCurrency = (amount: number) => `${amount.toLocaleString('fr-FR')}€`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Veuillez accepter d'être contacté.");
      return;
    }

    setLoading(true);
    const loadingToastId = toast.loading('Envoi de vos coordonnées...');

    try {
      let title = 'Nouvelle demande rapide - Climatiseur.pro';
      let message = `👤 COORDONNÉES CLIENT
• Nom: ${formData.name}
• Téléphone: ${formData.phone}
• Email: ${formData.email}
• Département: ${departementsMapping[formData.department] || formData.department}`;

      if (initialData.calculation) {
        const calc = initialData.calculation;
        message += `\n\n📋 PROJET ASSOCIÉ
• Coût final estimé: ${formatCurrency(calc.finalCost)}
• Économies estimées: ${formatCurrency(calc.savings)}
• Aides directes: ${formatCurrency(calc.totalAides)}
• Total TTC: ${formatCurrency(calc.totalTTC)}`;
      } else {
        message += '\n\n📋 Aucune simulation associée - Demande de devis personnalisé';
      }

      message += `\n\n📅 Demande reçue le: ${new Date().toLocaleString('fr-FR')}`;

      const response = await fetch('/proxy.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, message, priority: 5 }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Merci ! Nos experts vous contacteront sous 24h.', { id: loadingToastId });
        setFormData({ name: '', phone: '', email: '', department: initialData.department, consent: false });
        onClose();
      } else {
        console.error('Error from proxy.php:', result);
        toast.error(`Une erreur est survenue lors de l'envoi.`, { id: loadingToastId });
      }
    } catch (error) {
      console.error('Network or fetch error:', error);
      toast.error('Une erreur réseau est survenue. Veuillez réessayer.', { id: loadingToastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-8 rounded-2xl">
        <DialogHeader className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="text-blue-600 text-2xl h-8 w-8" />
          </div>
          <DialogTitle className="text-2xl font-bold text-blue-600">Vos coordonnées</DialogTitle>
          <DialogDescription className="text-gray-600">
            Pour que nos experts puissent vous contacter et vous envoyer votre devis personnalisé.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="quickName">Nom complet <span className="text-red-500">*</span></Label>
            <Input id="quickName" placeholder="Votre nom et prénom" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="quickPhone">Téléphone <span className="text-red-500">*</span></Label>
            <Input id="quickPhone" type="tel" placeholder="01 23 45 67 89" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="quickEmail">Email <span className="text-red-500">*</span></Label>
            <Input id="quickEmail" type="email" placeholder="votre@email.com" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="quickDepartment">Département <span className="text-red-500">*</span></Label>
            <Select value={formData.department} onValueChange={(value) => handleChange('department', value)} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez votre département" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(departementsMapping).map(([code, name]) => (
                  <SelectItem key={code} value={code}>{code} - {name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-start pt-2">
            <Checkbox 
              id="quickConsent" 
              checked={formData.consent} 
              onCheckedChange={(checked) => handleChange('consent', checked as boolean)} 
              className="mr-3 mt-1"
            />
            <Label htmlFor="quickConsent" className="text-sm text-gray-600 cursor-pointer">
              J'accepte d'être contacté pour mon projet et j'ai pris connaissance de la <a href="#contact" onClick={onClose} className="text-blue-600 hover:underline">politique de confidentialité</a> <span className="text-red-500">*</span>
            </Label>
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
            {loading ? (
              <>
                <span className="loading-spinner mr-2"></span>Envoi en cours...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />Envoyer mes coordonnées
              </>
            )}
          </Button>
          
          <p className="text-xs text-gray-500 mt-4 text-center flex items-center justify-center">
            <X className="mr-1 h-3 w-3" /> Vos informations sont sécurisées et ne seront pas partagées
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuickContactModal;