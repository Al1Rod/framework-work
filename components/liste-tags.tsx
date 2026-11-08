import Tag from "./tag"

type Props = {
    tags: string[]
}

export default function ListeTags({ tags }: Props){
    return (
        <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
                <li key={tag}>
                    <Tag label={tag} />
                </li>
            ))}
        </ul>
    )
}
