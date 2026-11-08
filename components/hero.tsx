import Bouton from "./bouton"

type Props = {
    titre: string
    texte: string
}

export default function Hero({titre, texte}: Props){
    return(
        <div className="py-16">
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">{titre}</h1>
            <p className="mt-4 max-w-lg text-lg text-foreground/60">{texte}</p>
            <div className="mt-8">
                <Bouton label="Voir les projets" href="/projets" variante="contour"/>
            </div>
        </div>
    )
}