"use client"
 
import { useState, type ReactNode } from "react"
 
type Props = {
  question: string
  children: ReactNode
}
 
export default function Accordeon({ question, children }: Props) {
  const [ouvert, setOuvert] = useState(false)
 
  return (
    <div className="border-b border-foreground/15 py-4">
      <button onClick={() => setOuvert(!ouvert)} className="font-medium">
        {question}
      </button>
      {ouvert && <p className="mt-2 text-foreground/60">{children}</p>}
    </div>
  )
}
