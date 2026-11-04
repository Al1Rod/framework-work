import BoutonJaime from "./bouton-jaime"

type Props ={
    titre: string
    categorie: string
    resume: string
}
export default function Carte({titre, categorie, resume}: Props){
    return (
        <article className="rounded-lg border p-5 border-neutral-200">
            <p className="text-xs ">{categorie}</p>
            <h3>{titre}</h3>
            <p>{resume}</p>
            <div>
                <BoutonJaime/>
            </div>
        </article>
    )
}