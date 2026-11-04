import Link from "next/link"

type Props ={
    label: string,
    href: string,
    variante?: "plein" | "contour"
}
export default function Bouton({label, href, variante = "plein"}: Props){
    const style = 
        variante === "plein"
            ? "bg-black text-white" // variante plein
            : "border border-black text-black" // variante contour
    return(
        <Link href="/HREF" className={`rounded px-5 py-2 ${style}`}>
            {label}
        </Link>
    )
}