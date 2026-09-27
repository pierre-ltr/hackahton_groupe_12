export type Profil = "jeune" | "reconversion" | "autodidacte";

export type Certification = {
  slug: string;
  domain: string;
  title: string;
  letter: string;
  description: string;
  level: string;
  duration: string;
  organization: string;
  officialUrl: string;
  tags: string[];
  skills: string[];
  outcomes: string[];
  profils: Profil[];
};

export const certifications: Certification[] = [
  {
    slug: "cap-macon",
    domain: "BTP",
    title: "CAP Maçon",
    letter: "B",
    description:
      "Certification reconnue pour apprendre les bases de la maçonnerie, du gros œuvre et des chantiers.",
    level: "Niveau 3",
    duration: "12 à 24 mois",
    organization: "Éducation nationale",
    officialUrl: "https://www.francecompetences.fr",
    tags: ["Niveau 3", "12 mois", "CPF"],
    skills: [
      "Lire un plan et implanter un ouvrage",
      "Réaliser des maçonneries en blocs et en briques",
      "Couler des éléments en béton armé",
      "Respecter les règles de sécurité sur chantier",
    ],
    outcomes: ["Maçon", "Ouvrier du gros œuvre", "Chef d’équipe (avec expérience)"],
    profils: ["jeune", "reconversion"],
  },
  {
    slug: "capa-jardinier-paysagiste",
    domain: "Paysage",
    title: "CAPA Jardinier Paysagiste",
    letter: "P",
    description:
      "Parcours adapté aux métiers de l’entretien et de l’aménagement des espaces verts.",
    level: "Niveau 3",
    duration: "12 à 24 mois",
    organization: "Ministère de l’Agriculture",
    officialUrl: "https://www.francecompetences.fr",
    tags: ["Niveau 3", "Alternance", "Reconversion"],
    skills: [
      "Entretenir les végétaux et les espaces verts",
      "Réaliser des travaux de maçonnerie paysagère",
      "Utiliser le matériel motorisé en sécurité",
      "Identifier les principales espèces végétales",
    ],
    outcomes: ["Jardinier paysagiste", "Agent d’entretien des espaces verts"],
    profils: ["jeune", "reconversion", "autodidacte"],
  },
  {
    slug: "caces-r482-cat-a",
    domain: "Chantier",
    title: "CACES R482 Cat. A",
    letter: "C",
    description: "Certification permettant de conduire des engins de chantier compacts en sécurité.",
    level: "Certificat",
    duration: "3 à 5 jours",
    organization: "Organismes testeurs certifiés (INRS)",
    officialUrl: "https://www.inrs.fr",
    tags: ["Certificat", "3 à 5 jours", "Employabilité"],
    skills: [
      "Connaître la réglementation des engins de chantier",
      "Vérifier l’engin avant utilisation",
      "Conduire et manœuvrer en sécurité",
    ],
    outcomes: ["Conducteur d’engins", "Ouvrier polyvalent du BTP"],
    profils: ["reconversion", "autodidacte"],
  },
  {
    slug: "titre-pro-electricien",
    domain: "BTP",
    title: "Titre pro Électricien d’équipement",
    letter: "É",
    description:
      "Titre professionnel pour installer et mettre en service les équipements électriques des bâtiments.",
    level: "Niveau 3",
    duration: "6 à 8 mois",
    organization: "Ministère du Travail",
    officialUrl: "https://www.francecompetences.fr",
    tags: ["Niveau 3", "CPF", "Reconversion"],
    skills: [
      "Réaliser une installation électrique résidentielle",
      "Poser des réseaux de communication",
      "Contrôler et mettre en service une installation",
    ],
    outcomes: ["Électricien du bâtiment", "Installateur domotique"],
    profils: ["reconversion", "autodidacte"],
  },
  {
    slug: "cap-peintre-applicateur",
    domain: "BTP",
    title: "CAP Peintre applicateur de revêtements",
    letter: "R",
    description:
      "Certification pour réaliser les travaux de peinture, de revêtements muraux et de sols.",
    level: "Niveau 3",
    duration: "12 à 24 mois",
    organization: "Éducation nationale",
    officialUrl: "https://www.francecompetences.fr",
    tags: ["Niveau 3", "Alternance"],
    skills: [
      "Préparer les supports",
      "Appliquer peintures et enduits",
      "Poser des revêtements muraux et de sol",
    ],
    outcomes: ["Peintre en bâtiment", "Solier-moquettiste"],
    profils: ["jeune"],
  },
  {
    slug: "qualibat-rge",
    domain: "Énergie",
    title: "Qualification RGE Qualibat",
    letter: "Q",
    description:
      "Qualification des entreprises pour les travaux de rénovation énergétique ouvrant droit aux aides.",
    level: "Qualification",
    duration: "Selon dossier",
    organization: "Qualibat",
    officialUrl: "https://www.qualibat.com",
    tags: ["Entreprise", "Rénovation", "Aides de l’État"],
    skills: [
      "Maîtriser les techniques de rénovation énergétique",
      "Conseiller le client sur les aides",
      "Garantir la qualité des travaux réalisés",
    ],
    outcomes: ["Artisan RGE", "Entreprise de rénovation énergétique"],
    profils: ["autodidacte"],
  },
];

export const domains = Array.from(new Set(certifications.map((c) => c.domain)));

export const profils: Record<Profil, { title: string; text: string }> = {
  jeune: {
    title: "Je sors de l’école",
    text: "Des diplômes accessibles, souvent en alternance, pour démarrer sur de bonnes bases.",
  },
  reconversion: {
    title: "Je me reconvertis",
    text: "Des titres courts et finançables par le CPF pour changer de métier rapidement.",
  },
  autodidacte: {
    title: "J’ai déjà de l’expérience",
    text: "Des certifications pour faire reconnaître officiellement ce que vous savez déjà faire.",
  },
};

export const trustedOrganizations = ["CAPEB", "FFB", "Qualibat", "Constructys", "CACES", "UNEP"];

export function getCertification(slug: string) {
  return certifications.find((c) => c.slug === slug);
}

function normalize(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function searchCertifications({
  q,
  domain,
  profil,
}: {
  q?: string;
  domain?: string;
  profil?: string;
}) {
  const query = q && normalize(q.trim());
  return certifications.filter(
    (c) =>
      (!domain || c.domain === domain) &&
      (!profil || c.profils.includes(profil as Profil)) &&
      (!query ||
        normalize([c.title, c.domain, c.description, ...c.outcomes, ...c.skills].join(" ")).includes(
          query,
        )),
  );
}
