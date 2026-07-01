export default function OldArticle({image, alt, heading, subheading, number}){
    return(
        <article>
            <div><img src={image} alt={alt} /></div>
            <div className="flex-column">
                <span className="fs-500 text-red fw-800">{number}</span>
                <h3 className="fw-700 fs-400">{heading}</h3>
                <h4>{subheading}</h4>
            </div>
        </article>
    )
}