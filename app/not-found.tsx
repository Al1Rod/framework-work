import Bouton from "@/components/bouton"

export default function PageIntrouvable(){
    return (
        <div className="py-16 text-center">
            <p className="text-sm text-foreground/60">Erreur 404</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Page introuvable</h1>
            <p className="mt-4 text-foreground/60">Cette page n'existe pas ou a été déplacée.</p>
            <div className="mt-8">
                <Bouton label="Retour à l'accueil" href="/" />
            </div>
        </div>
    )
}
