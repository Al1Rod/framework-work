import BoutonJaime from "./bouton-jaime"

type Props ={
    titre: string
    categorie: string
    resume: string
}
export default function Carte({titre, categorie, resume}: Props){
    return (
        <article className="rounded-lg border p-5 border-foreground/15">
            <p className="text-xs uppercase tracking-wide text-neutral-500">{categorie}</p>
            <h3 className="mt-2 text-lg font-semibold">{titre}</h3>
            <p className="mt-1 text-sm text-foreground/60">{resume}</p>
            <div className="mt-4">
                <BoutonJaime/>
            </div>
        </article>
    )
}