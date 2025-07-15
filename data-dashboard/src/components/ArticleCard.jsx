const ArticleCard = ({headline, date, imageSrc, url}) => {
    return (
        <div className="article-card">
            <title>{headline} {date}</title>
            <img src={imageSrc}></img>

            <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="more-info-btn">📄 Read</button>
            </a>
        </div>
    );
}

export default ArticleCard;