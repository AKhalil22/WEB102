import { Link } from 'react-router-dom';

const ArticleCard = ({headline, date, imageSrc, url, article, details}) => {
    // Unique ID used for routing
    const encodedUrl = encodeURIComponent(url);

    return (
        <div className="article-card">

            {/* Set Headline size in proportion to view */}
            {!details && (
                <h3>{headline}</h3>
            )}

            {details && (
                <h2>{headline}</h2>
            )}

            {/* Convert Seconds -> Miliseconds & US Date format (local) */}
            <div className='date-tag'>
                 <h4 className='tag'>{new Date(date * 1000).toLocaleDateString()}</h4>

                 {details && (
                    <>
                        <h4 className="tag">{article.category}</h4>
                        <h4 className='tag'>{article.related}</h4>
                        <h4 className='tag'>{article.source}</h4>
                    </>
                )}
            </div>
           

            <img src={imageSrc === "https://s.yimg.com/rz/stage/p/yahoo_finance_en-US_h_p_finance_2.png" || !imageSrc ? "https://www.thebalancemoney.com/thmb/AjRuogEtMjNUtITgfEZeCir8PqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wallstreet-be6e21ad26e546dd8b015d7be5d71528.jpg" : imageSrc}></img>
            
            {/* Show Sumary Details (&& == Logical Operator) */}
            {details && (
                <p>{article.summary}</p>
            )}
            
            <div className='buttons-container'>
                {/* Hide Mode Details Button in NewsDetail View */}
                {!details && (
                    <Link to={`/${encodedUrl}`} state={{ article }}>
                        <button className='more-info-btn'>🫆 More Details</button>
                    </Link>
                )}

                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="more-info-btn">📄 Read</button>
                </a>
            </div>
        </div>
    );
}

export default ArticleCard;