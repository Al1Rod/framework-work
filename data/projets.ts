export type Projet = {
  slug: string
  titre: string
  annee: number
  image: string
  resume: string
  tags: string[]
}

export const PROJETS: Projet[] = [
  {
    slug: "site-carte",
    titre: "Site de cartes à collectionner",
    annee: 2026,
    image: "/projets/site-carte.png",
    resume: "Site de carte à collectionner sur les films.",
    tags: ["Site web", "HTML / CSS / JS", "PHP / MySQL", "Projet scolaire"],
  },
  {
    slug: "site-societe",
    titre: "Site jeu de société",
    annee: 2026,
    image: "/projets/site-jeu-societe.png",
    resume: "Site web pour un jeu de société.",
    tags: ["Site web", "HTML / CSS / JS", "Projet scolaire"],
  },
  {
    slug: "portfolio-cms",
    titre: "Portfolio",
    annee: 2026,
    image: "/projets/portfolio-cms.png",
    resume: "Portfolio réalisé avec un CMS.",
    tags: ["Site web", "WordPress", "Projet scolaire"],
  },
  {
    slug: "scene-medievale",
    titre: "Scène médiévale",
    annee: 2025,
    image: "/projets/3D-scene-medievale.png",
    resume: "Scène en 3D d'une pièce médiévale.",
    tags: ["3D", "Blender", "Projet scolaire"],
  },
  {
    slug: "scene-architecturale",
    titre: "Scène architecturale",
    annee: 2025,
    image: "/projets/3D-scene-archi.png",
    resume: "Scène en 3D d'une pièce de maison.",
    tags: ["3D", "Blender", "Projet scolaire"],
  },
  {
    slug: "site-transversal",
    titre: "Site pour projet transverse",
    annee: 2026,
    image: "/projets/transversal.png",
    resume: "Site web d'un projet transversal d'une marque.",
    tags: ["Site web", "HTML / CSS / JS", "Projet scolaire"],
  },
]

export function trouverProjet(slug: string): Projet | undefined {
  return PROJETS.find((projet) => projet.slug === slug)
}
