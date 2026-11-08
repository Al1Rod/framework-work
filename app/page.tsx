import Bouton from "@/components/bouton"
import Section from "@/components/section"
import Hero from "@/components/hero"
import Carte from "@/components/carte"
import Accordeon from "@/components/accordeon"

type Projet={
  id: number
  titre: string
  resume: string
  categorie: string
}
const PROJET: Projet[] = [
  {id: 1, titre: "brasserie", resume: "Identité visuelle", categorie:"Marque"},
  {id: 2, titre: "brasserie", resume: "Identité visuelle", categorie:"Marque"},
  {id: 3, titre: "brasserie", resume: "Identité visuelle", categorie:"Marque"}
]

type Questions = {
  id: number
  question: string
  children: string
}

const QUESTIONS: Questions[] = [
  { id: 1, question: "Ca va?", children: "oui très bien notre agence coule a flo"},
  { id: 2, question: "Comment accéder a vos service ?", children:"Nous contacter"},
  { id: 3, question: "Aimes tu la moto ?", children:"Oui j'aimerais pouvoir passer le permis"}
]
export default function Accueil(){
  return (
  <main className="mx-auto max-w-3xl px-6 py-16">

    <Hero
      titre="Des images, Des jeux, des sites"
      texte="Atelier brume est un studio de production"
    />

    <Bouton label="voir les projets" href="/projet" variante="contour"></Bouton>
    <Section titre="Nos projet">
      <div className="grid gap-4 sm:grid-cols-3">
        {PROJET.map((projet) =>
          <Carte 
            key={projet.id}
            titre={projet.titre}
            resume={projet.resume}
            categorie={projet.categorie}
          />
        )}
      </div>
      <div className="mt-5"><Bouton label="voir plus" href="/projet" variante="plein"></Bouton></div>
      
    </Section>
    <Section titre="Des questions">
      <div>
          {QUESTIONS.map((question) =>
            <Accordeon
              key={question.id}
              question={question.question}
              children={question.children}
             
            />
        )}
      </div>
    </Section>
    

  </main>
  )
}