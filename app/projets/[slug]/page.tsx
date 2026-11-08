import Image from "next/image"
import { notFound } from "next/navigation"
import Bouton from "@/components/bouton"
import ListeTags from "@/components/liste-tags"
import BoutonJaime from "@/components/bouton-jaime"
import { PROJETS, trouverProjet } from "@/data/projets"

type Props = {
    params: Promise<{ slug: string }>
}

export function generateStaticParams(){
    return PROJETS.map((projet) => ({ slug: projet.slug }))
}

export default async function PageProjet({ params }: Props){
    const { slug } = await params
    const projet = trouverProjet(slug)

    if (!projet) {
        notFound()
    }

    return (
        <article className="mx-auto max-w-3xl">
            <Bouton label="← Tous les projets" href="/projets" variante="contour" />

            <p className="mt-10 text-sm text-foreground/60">{projet.annee}</p>
            <h1 className="mt-1 text-4xl font-semibold tracking-tight">{projet.titre}</h1>
            <ListeTags tags={projet.tags} />

            <Image
                src={projet.image}
                alt={projet.titre}
                width={1200}
                height={800}
                className="mt-8 w-full rounded-lg border border-foreground/15"
                preload
            />

            <p className="mt-8 text-lg text-foreground/80">{projet.resume}</p>
            <div className="mt-6">
                <BoutonJaime />
            </div>
        </article>
    )
}
