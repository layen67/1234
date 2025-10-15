# Climatiseur.pro - Calculateur Installation & Primes 2025

## Aperçu du Projet
Ceci est l'application front-end pour Climatiseur.pro, un simulateur intelligent permettant de calculer le coût d'installation d'un système de climatisation (mobile, réversible, split) et d'estimer les aides financières disponibles (MaPrimeRénov', CEE, éco-PTZ) pour l'année 2025.

L'application est une Single Page Application (SPA) rapide et optimisée pour le SEO.

## Stack Technique
*   **Framework:** React
*   **Langage:** TypeScript
*   **Routing:** React Router DOM
*   **Styling:** Tailwind CSS
*   **Composants UI:** shadcn/ui (basé sur Radix UI)
*   **Gestion d'état/API:** React Query
*   **Notifications:** Sonner (pour les toasts)

## Installation

1.  **Cloner le dépôt:**
    ```bash
    git clone [URL_DU_DEPOT]
    cd climatiseur.pro
    ```
2.  **Installer les dépendances:**
    ```bash
    npm install
    ```

## Scripts Disponibles

Dans le répertoire racine du projet, vous pouvez exécuter :

| Script | Description |
| :--- | :--- |
| `npm run dev` | Démarre l'application en mode développement. Ouvre `http://localhost:8080`. |
| `npm run build` | Construit l'application pour la production dans le dossier `dist`. |
| `npm run lint` | Exécute l'outil de linting. |

## Structure du Projet

Le code source principal se trouve dans le dossier `src/`.

| Dossier | Description |
| :--- | :--- |
| `src/components/` | Composants React réutilisables (Header, Footer, HeroSection, etc.). |
| `src/components/ui/` | Composants UI de base (shadcn/ui). |
| `src/pages/` | Pages principales de l'application (`Index.tsx` est la page d'accueil). |
| `src/hooks/` | Hooks React personnalisés (ex: `use-mobile`). |
| `src/lib/` | Utilitaires généraux (ex: `utils.ts` pour les classes Tailwind). |
| `src/utils/` | Fonctions utilitaires spécifiques à l'application (ex: `toast.ts`). |
| `public/` | Fichiers statiques (favicon, `proxy.php`). |

## Composants Clés

*   **`src/pages/Index.tsx`**: La page d'accueil qui assemble toutes les sections.
*   **`src/components/CalculatorSection.tsx`**: Contient la logique du simulateur de prix et d'aides.
*   **`src/components/ContactSection.tsx`**: Gère le formulaire de contact.
*   **`public/proxy.php`**: Script PHP utilisé pour relayer les soumissions de formulaire (via `ContactSection`) vers un service de notification (Gotify). **Attention:** Le token Gotify est codé en dur dans ce fichier.

## Déploiement

Ce projet est configuré pour être déployé comme une application statique (SPA) nécessitant un environnement PHP pour le script de proxy.

*   **Vercel:** Le fichier `vercel.json` est configuré pour rediriger toutes les requêtes vers `index.html`.
*   **Déploiement CloudPanel/PHP:** Le fichier `dploy.yaml` définit le pipeline de construction (`npm install`, `npm run build`) et de déploiement, assurant que les fichiers de build (`dist/`) et le script `proxy.php` sont copiés vers le répertoire public cible.