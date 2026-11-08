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
    tags: ["Site-web", "Html,CSS, js, php, mySQL", "Projet Scolaire"],
  },
    {
    slug: "site-societe",
    titre: "Site jeu de société",
    annee: 2026,
    image: "/projets/site-jeu-societe.png",
    resume: "Site web pour un jeu de société.",
    tags: ["Site-web", "Html,CSS, js", "Projet Scolaire"],
  },
    {
    slug: "portfolio-cms",
    titre: "Portfolio",
    annee: 2026,
    image: "/projets/portfolio-cms.png",
    resume: "IPortfolio en CMS.",
    tags: ["Site-web", "Wordpress", "Projet Scolaire"],
  },
    {
    slug: "3D-projets-scene-medievale",
    titre: "Scène médiévale",
    annee: 2025,
    image: "/projets/3D-scene-medievale.png",
    resume: "Scène en 3D d'une pièce médiévale.",
    tags: ["3D", "Blender", "Projet Scolaire"],
  },
    {
    slug: "3D-projets-scene-archi",
    titre: "Scène architecturale",
    annee: 2025,
    image: "/projets/3D-projets-scene-archi.png",
    resume: "Scène en 3D d'une pièce de maison.",
    tags: ["3D", "Blender", "Projet Scolaire"],
  },
    {
    slug: "Site-transversal",
    titre: "Site pour projet transverse",
    annee: 2026,
    image: "/projets/site-transversal.png",
    resume: "Site web d'un projet transversal d'une marque.",
    tags: ["Site-web", "Html, CSS, js", "Projet Scolaire"],
  },

]

export function trouverProjet(slug: string): Projet | undefined {
  return PROJETS.find((projet) => projet.slug === slug)
}
