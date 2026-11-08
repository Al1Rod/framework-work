import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "À propos | Alain Roddhain",
}

export default function PageAPropos(){
    return (
        <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight">À propos</h1>
            <p className="mt-4 text-lg text-foreground/60">
                Étudiant en développement web, je crée des sites.
            </p>
        </div>
    )
}
