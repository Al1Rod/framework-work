import type { Metadata } from "next"
import GrilleProjets from "@/components/grille-projets"
import { PROJETS } from "@/data/projets"

export const metadata: Metadata = {
    title: "Projets | Atelier Brume",
}

export default function PageProjets(){
    return (
        <>
            <h1 className="text-4xl font-semibold tracking-tight">Projets</h1>
            <p className="mt-2 mb-10 text-foreground/60">
                {PROJETS.length} projets : sites web, scènes 3D et projets scolaires.
            </p>
            <GrilleProjets projets={PROJETS} />
        </>
    )
}
