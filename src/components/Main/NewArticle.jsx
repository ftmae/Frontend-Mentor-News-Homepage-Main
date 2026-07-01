export default function NewArticle({heading, body}){
    return (
        <article className="flex-column">
            <h3 className="fw-700">{heading}</h3>
            <p className="text-blue-1">{body}</p>
        </article>
    )
}