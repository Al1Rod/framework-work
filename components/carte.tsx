import Image from "next/image"
import Link from "next/link"
import BoutonJaime from "./bouton-jaime"
import ListeTags from "./liste-tags"
import type { Projet } from "@/data/projets"

type Props = {
    projet: Projet
}

export default function Carte({ projet }: Props){
    const lien = `/projets/${projet.slug}`

    return (
        <article className="overflow-hidden rounded-lg border border-foreground/15">
            <Link href={lien}>
                <Image
                    src={projet.image}
                    alt={projet.titre}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                />
            </Link>
            <div className="p-5">
                <p className="text-xs text-foreground/60">{projet.annee}</p>
                <h3 className="mt-1 text-lg font-semibold">
                    <Link href={lien}>{projet.titre}</Link>
                </h3>
                <p className="mt-1 text-sm text-foreground/60">{projet.resume}</p>
                <ListeTags tags={projet.tags} />
                <div className="mt-4">
                    <BoutonJaime />
                </div>
            </div>
        </article>
    )
}
