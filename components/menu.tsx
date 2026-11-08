import Link from "next/link"

type Lien = {
    href: string
    label: string
}

const LIENS: Lien[] = [
    { href: "/", label: "Accueil"},
    { href: "/projets", label: "Projets"},
    { href: "/a-propos", label: "À propos"},
]

export default function Menu(){
    return(
        <nav className="flex items-center justify-between border-b border-foreground/15 py-4">
            <Link href="/" className="font-semibold text-2xl">Alain Rodhain</Link>
            <ul className="flex gap-6 text-sm text-foreground/70">
               {LIENS.map((lien) => (
                  <li key={lien.href}>
                    <Link href={lien.href}>{lien.label}</Link>
                  </li>  
               ))} 
            </ul>
        </nav>
    )
}