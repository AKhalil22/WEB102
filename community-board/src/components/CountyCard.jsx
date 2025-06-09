const CountyCard = (props) => {
    return (
        <div className="county-card">
            <h2>{props.name}</h2>

            <img src={props.image} alt="County Image"></img>
            <p><strong>Population:</strong> {props.population.toLocaleString()}</p>
            <p><strong>Avg. Income:</strong> ${props.medianIncome.toLocaleString()}</p>
            <p><strong>Bachelor's Degree (25+):</strong> {props.bachelorPercent}%</p>

            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button className="more-info-btn">🔍 View More</button>
            </a>
        </div>
    );
}

export default CountyCard;