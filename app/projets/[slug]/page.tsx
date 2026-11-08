type Props ={
    params: Promise<{slug: string}>
}

export default async function PageProjet({params}: Props) {
    const { slug } = await params 
    return(
        
        <h1>Projet : {slug}</h1>
    )
}