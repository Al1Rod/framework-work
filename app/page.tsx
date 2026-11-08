import Bouton from "@/components/bouton"
import Section from "@/components/section"
import Hero from "@/components/hero"
import GrilleProjets from "@/components/grille-projets"
import Accordeon from "@/components/accordeon"
import { PROJETS } from "@/data/projets"

type Question = {
  id: number
  question: string
  reponse: string
}

const QUESTIONS: Question[] = [
  { id: 1, question: "As-tu de l'expérience ?", reponse: "J'ai pu faire quelques stages qui m'ont appris à travailler au sein d'une entreprise"},
  { id: 2, question: "Par quoi es-tu joignable ?", reponse: "LinKedin notamment Alain Rodhain et vous devriez trouver"},
  { id: 3, question: "Aimes-tu la moto ?", reponse: "Oui j'aimerais pouvoir passer le permis"}
]

export default function Accueil(){
  return (
    <>
      <Hero
        titre="Des sites web et de la bonne humeur"
        texte="Jeune développeur en soif d'apprendre et de nouveautés"
      />

      <Section titre="Mes projets">
        <GrilleProjets projets={PROJETS.slice(0, 3)} />
        <div className="mt-6">
          <Bouton label="Voir tous les projets" href="/projets" variante="plein" />
        </div>
      </Section>

      <Section titre="Des questions ?">
        {QUESTIONS.map((question) => (
          <Accordeon key={question.id} question={question.question}>
            {question.reponse}
          </Accordeon>
        ))}
      </Section>
    </>
  )
}
