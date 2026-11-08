type Props = {
    label: string
}

export default function Tag({ label }: Props){
    return (
        <span className="rounded-full border border-foreground/15 px-2 py-0.5 text-xs">
            {label}
        </span>
    )
}
