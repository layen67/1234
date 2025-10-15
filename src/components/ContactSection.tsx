"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send, Clock, Info } from 'lucide-react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, department: value }));
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.department || !formData.consent) {
      toast.error('Veuillez remplir tous les champs obligatoires et accepter d\'être contacté.');
      return;
    }

    const loadingToastId = toast.loading('Envoi de votre message...');
    
    const departmentName = departementsMapping[formData.department] || formData.department;

    try {
      const response = await fetch('/proxy.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Nouveau message de contact de ${formData.name}`,
          message: `👤 COORDONNÉES CLIENT\n• Nom: ${formData.name}\n• Email: ${formData.email}\n• Téléphone: ${formData.phone}\n• Département: ${departmentName}\n• Message: ${formData.message || 'Aucun message'}`,
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
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Contactez nos experts
          </h2>
          <p className="max-w-[900px] mx-auto text-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Une question sur votre projet ? Besoin d'un conseil personnalisé ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-2">
          
          {/* Informations de contact */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Nos coordonnées</h3>
            
            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="font-bold">Téléphone</p>
                <p className="text-blue-200 text-lg">01 23 45 67 89</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="font-bold">Email</p>
                <p className="text-blue-200 text-lg">contact@climatiseur.pro</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="font-bold">Zone d'intervention</p>
                <p className="text-blue-200 text-lg">France entière</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="font-bold">Horaires</p>
                <p className="text-blue-200 text-lg">Lun-Ven: 8h-19h • Sam: 9h-17h</p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="p-8 shadow-2xl rounded-2xl">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-gray-800">Demande d'information</CardTitle>
              <CardDescription>Nous vous répondrons dans les plus brefs délais.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet <span className="text-red-500">*</span></Label>
                    <Input id="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone <span className="text-red-500">*</span></Label>
                    <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="department">Département <span className="text-red-500">*</span></Label>
                  <Select value={formData.department} onValueChange={handleSelectChange}>
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
                  <Label htmlFor="message">Votre message (optionnel)</Label>
                  <Textarea id="message" placeholder="Décrivez votre projet ou votre question..." rows={3} value={formData.message} onChange={handleChange} />
                </div>
                
                <div className="flex items-start space-x-2 pt-2">
                    <Checkbox 
                        id="consent" 
                        checked={formData.consent} 
                        onCheckedChange={handleConsentChange} 
                        className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                        J'accepte d'être contacté pour recevoir mon devis personnalisé <span className="text-red-500">*</span>
                    </Label>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-5 w-5" />Envoyer ma demande
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