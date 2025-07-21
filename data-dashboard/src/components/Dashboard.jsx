import Navbar from './Navbar';
import ArticleCard from './ArticleCard';
import SentimentChart from './SentimentChart';
import ArticleVolumeChart from './ArticleVolumeChart';
import { useEffect, useState } from 'react';

const Dashboard = ({tickerInput, setTickerInput, setTickerSymbol, sentiment, dateFilter, setDateFilter, sortedArticles}) => {
    const [avgSentiment, setAvgSentiment] = useState("N/A");

    // useEffect: Update avgSentiment score once async API call (fetchSentiment) is complete
    useEffect(() => {
        // Debug: console.log("@Dashboard.jsx/useEffect - Sentiment state updated:", sentiment);

        // Condition: Data undefined on first render (Common)
        if (Array.isArray(sentiment) && sentiment.length > 0) {
            // Calculate Sentiment
            const calculateSentiment = (sentimentData) => {
                // Process Data
                const msprValues = sentimentData.map(item => item.mspr);
                const total = msprValues.reduce((sum, value) => sum + value, 0);
                const avg = total / msprValues.length;
                
                // Return Average
                return avg.toFixed(2)
            };

            // Set avgSentiment
            setAvgSentiment(calculateSentiment(sentiment));
        } else {
            setAvgSentiment("N/A");
        }
    }, [sentiment]);
    
    return (
        <div className="dashboard">
            <Navbar
                tickerInput={tickerInput}
                setTickerInput={setTickerInput}
                setTickerSymbol={setTickerSymbol}
                isDetailView={false}
            />

            <h1>Insider Sentiment Score: {avgSentiment}</h1>
            <p>The MSPR ranges from -100 for the most negative to 100 for the most positive which can signal price changes in the coming 30-90 days.</p>
           
            {/* Conditionaly render only when sentiment data is avaible/fetched from API call */}
            {Array.isArray(sentiment) && sentiment.length > 0 && (
                <SentimentChart sentimentData={sentiment}/>
            )}

            <hr width="100%"></hr>

            <h2>Articles: {sortedArticles.length}</h2>
            {Array.isArray(sortedArticles) && sortedArticles.length > 0 && (
                <ArticleVolumeChart sortedArticles={sortedArticles}/>
            )}
            
            <hr width="100%"></hr>

            <div className='filter-container'>
                <select className="filter-dropdown" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                <option value="year">year</option>
                <option value="month">month</option>
                <option value="week">week</option>
                <option value="today">today</option>
                </select>
            </div>

            <div className='article-grid'>
                {sortedArticles.map((article) => (
                    <ArticleCard
                        key={article.url}
                        headline={article.headline}
                        date={article.datetime}
                        imageSrc={article.image}
                        url={article.url}
                        article={article} // Pass Reference for O(1) Lookup when viewing details
                        details={false} // Hide Summary
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;