"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const loadingToastId = toast.loading('Envoi de votre message...');
    try {
      const response = await fetch('/proxy.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Nouveau message de contact de ${formData.name}`,
          message: `De: ${formData.email}\nTél: ${formData.phone || 'Non fourni'}\nMessage: ${formData.message}`,
          priority: 5, // High priority for contact messages
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Votre message a été envoyé avec succès ! Un expert vous recontactera sous 24h.', { id: loadingToastId });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
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
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contactez nos experts
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Une question sur votre projet ? Besoin d'un conseil personnalisé ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Nos coordonnées</CardTitle>
              <CardDescription>N'hésitez pas à nous joindre par téléphone ou email.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-600">01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">contact@climatiseur.pro</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-600">123 Rue de la Climatisation, 75001 Paris</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <p className="text-sm text-gray-500">Disponible Lun-Ven: 8h-19h • Sam: 9h-17h</p>
            </CardFooter>
          </Card>

          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Envoyez-nous un message</CardTitle>
              <CardDescription>Nous vous répondrons dans les plus brefs délais.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom complet <span className="text-red-500">*</span></Label>
                  <Input id="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="message">Votre message <span className="text-red-500">*</span></Label>
                  <Textarea id="message" placeholder="Décrivez votre projet ou votre question..." rows={5} value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-5 w-5" />Envoyer le message
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