"use client"
import { useState } from "react"

export default function BoutonJaime(){
    const [aime, setAime] = useState(true)
    const style = aime
        ? "border-foreground/30 text-foreground"
        : "border-red-500 bg-red-500 text-white"

    return(
        <button
            onClick={() => setAime(!aime)}
            className={`rounded border px-3 py-1 text-sm ${style}`}
        >
            {aime ? "J'aime" : "J'aime pas"}
        </button>
    )

        
}