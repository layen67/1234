"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send, Clock, Info, Checkbox as CheckboxIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (id: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.department || !formData.consent) {
      toast.error('Veuillez remplir tous les champs obligatoires et donner votre consentement.');
      return;
    }

    setLoading(true);
    const loadingToastId = toast.loading('Envoi de votre message...');
    
    try {
      const title = `Nouveau message de contact de ${formData.name}`;
      const message = `👤 COORDONNÉES CLIENT
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone}
• Département: ${departementsMapping[formData.department] || formData.department}
• Message: ${formData.message || 'Aucun message'}`;

      const response = await fetch('/proxy.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          message: message,
          priority: 5, // High priority for contact messages
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Votre message a été envoyé avec succès ! Un expert vous recontactera sous 24h.', { id: loadingToastId });
        setFormData({ name: '', email: '', phone: '', department: '', message: '', consent: false }); // Clear form
      } else {
        console.error('Error from proxy.php:', result);
        toast.error(`Une erreur est survenue lors de l'envoi de votre message: ${result.error || 'Erreur inconnue'}`, { id: loadingToastId });
      }
    } catch (error) {
      console.error('Network or fetch error:', error);
      toast.error('Une erreur réseau est survenue. Veuillez réessayer.', { id: loadingToastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 bg-blue-900 text-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contactez nos experts</h2>
          <p className="text-xl text-blue-200">Une question ? Un projet ? Nos conseillers vous répondent sous 24h</p>
        </div>
        
        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-2 lg:gap-10">
          
          {/* Informations de contact */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contactez nos experts</h2>
            <p className="text-xl mb-8 text-blue-200">Nos conseillers vous accompagnent dans votre projet et optimisent vos aides financières</p>
            
            <div className="space-y-6">
                <div className="flex items-center">
                    <Phone className="text-2xl text-yellow-400 mr-4 h-6 w-6" />
                    <div>
                        <h3 className="font-bold">Téléphone</h3>
                        <p className="text-blue-200">01 23 45 67 89</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Mail className="text-2xl text-yellow-400 mr-4 h-6 w-6" />
                    <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-blue-200">contact@climatiseur.pro</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <MapPin className="text-2xl text-yellow-400 mr-4 h-6 w-6" />
                    <div>
                        <h3 className="font-bold">Zone d'intervention</h3>
                        <p className="text-blue-200">France entière</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Clock className="text-2xl text-yellow-400 mr-4 h-6 w-6" />
                    <div>
                        <h3 className="font-bold">Horaires</h3>
                        <p className="text-blue-200">Lun-Ven: 8h-19h • Sam: 9h-17h</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="p-8 shadow-lg text-gray-800 rounded-2xl">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold">Demande d'information</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet <span className="text-red-500">*</span></Label>
                    <Input id="name" placeholder="Votre nom" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone <span className="text-red-500">*</span></Label>
                    <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" placeholder="Votre email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="department">Département <span className="text-red-500">*</span></Label>
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
                <div>
                  <Label htmlFor="message">Votre message</Label>
                  <Textarea id="message" placeholder="Décrivez votre projet ou votre question..." rows={4} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} />
                </div>
                
                <div className="flex items-start pt-2">
                    <Checkbox 
                        id="consent" 
                        checked={formData.consent} 
                        onCheckedChange={(checked) => handleChange('consent', checked as boolean)} 
                        className="mr-3 mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                        J'accepte d'être contacté pour recevoir mon devis personnalisé <span className="text-red-500">*</span>
                    </Label>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                    {loading ? (
                        <>
                            <span className="loading-spinner mr-2"></span>Envoi en cours...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-5 w-5" />Envoyer ma demande
                        </>
                    )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;