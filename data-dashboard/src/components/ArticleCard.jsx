const ArticleCard = ({headline, date, imageSrc, url}) => {
    return (
        <div className="article-card">
            <h4>{headline}</h4>

            {/* Convert Seconds -> Miliseconds & US Date format (local) */}
            <p>{new Date(date * 1000).toLocaleDateString()}</p>

            <img src={imageSrc === "https://s.yimg.com/rz/stage/p/yahoo_finance_en-US_h_p_finance_2.png" || !imageSrc ? "https://www.thebalancemoney.com/thmb/AjRuogEtMjNUtITgfEZeCir8PqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wallstreet-be6e21ad26e546dd8b015d7be5d71528.jpg" : imageSrc}></img>

            <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="more-info-btn">📄 Read</button>
            </a>
        </div>
    );
}

export default ArticleCard;