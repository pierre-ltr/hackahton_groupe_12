# Passerelle Certif — Hackathon Groupe 12

Passerelle Certif aide chacun à trouver la certification professionnelle qui correspond à ses objectifs, en commençant par le BTP.

Nous ne vendons pas de formations : la plateforme rend les certifications existantes plus lisibles et redirige vers les organismes officiels.

## Lancer le projet

```bash
cd passerelle-certif-next
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil : recherche, présentation, certifications populaires |
| `/certifications` | Catalogue avec recherche (`?q=`), filtre par domaine (`?domaine=`) et par profil (`?profil=`) |
| `/certifications/[slug]` | Fiche d'une certification : compétences, débouchés, niveau, durée, lien vers le site officiel |
| `/parcours` | Choix du profil (jeune, reconversion, expérience) et étapes du parcours |
| `/mission` | Mission, engagements et organismes reconnus |

## Structure

```
passerelle-certif-next/
├── app/          # Pages (routing Next.js App Router)
├── components/   # Navbar, Footer, cartes, barre de recherche
└── lib/data.ts   # Données des certifications et des profils
```

Pour ajouter une certification, il suffit d'ajouter une entrée dans `lib/data.ts` : sa fiche et sa présence dans le catalogue sont générées automatiquement.

Le contenu des fiches est une maquette pour la démonstration. Les liens « site officiel » pointent vers la page d'accueil des organismes.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4.

Le dossier `passerelle_certif_site/` contient la première version statique (HTML/CSS/JS), remplacée par l'application Next.js.
