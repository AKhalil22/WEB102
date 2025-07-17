import ArticleCard from './components/ArticleCard';
import { useEffect, useState } from 'react'
import './App.css'

// Init: FinnHub - Company News Sentiments (https://finnhub.io/docs/api)
const API_KEY = "...";

function App() {
  // Init: UseState
  const [tickerInput, setTickerInput] = useState("");
  const [tickerSymbol, setTickerSymbol] = useState("AAPL");
  const [sentiment, setSentiment] = useState("N/A");
  const [articles, setArticles] = useState([]);
  const [dateFilter, setDateFilter] = useState("all");

  // Get Today's date
  const now = new Date();

  // Format in ISO: YYYY-MM-DD
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Month in 0-based
  const day = String(now.getDate()).padStart(2, '0');

  const endDate = `${year}-${month}-${day}`;
  const startDate = `${year - 1}-${month}-${day}`;

  // Sort aticles data
  const sortedArticles = articles.filter(article => {
    // Convert UNIX timestamp
    const articleDate = new Date(article.datetime * 1000);

    // Conditions: Sort copy of articles by dateFilter
    if (dateFilter === "today") {
      return articleDate.toDateString() === now.toDateString();

    } else if (dateFilter === "week") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      return articleDate >= oneWeekAgo;

    } else if (dateFilter === "month") {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(now.getMonth() - 1);
      return articleDate >= oneMonthAgo;

    } else {
      return true; // All Articles

    }
  });

  // UseEffect: Call API to fetch latest company articles (Two Responses due to StrictMode in Main.jsx)
  useEffect(() => {
    console.log("New Ticker:", tickerSymbol)

    // Edge Case: Validate Ticker Symbol
    if (!tickerSymbol || tickerSymbol.trim() === "") {
      setArticles([]);
      setSentiment([]);
      alert("Invalid Ticker!")
      return;
    }

    // Fetch news article's relating to stock within given date range
    const fetchNews = async () => {
      const res = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${tickerSymbol}&from=${startDate}&to=${endDate}&token=${API_KEY}`);
      const data = await res.json();

      // Condition: Valid Response
      if (data.length > 0) {
        setArticles(data);
      } else {
        setArticles([]);
      }
    };

    // Fetch insider sentiment on stock within range
    const fetchSentiment = async () => {
      const res = await fetch(`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${tickerSymbol}&from=${startDate}&to=${endDate}&token=${API_KEY}`);
      const data = await res.json();
      
      // Condition: Valid Response
      if (data.data && data.data.length > 0) {
        setSentiment(calculateSentiment(data));
        // console.log(sentiment)
      } else {
        setSentiment("N/A");
      }
    };

    // Calculate Sentiment
    const calculateSentiment = async (sentimentData) => {
      // Process Data
      const msprValues = sentimentData.data.map(item => item.mspr);
      const total = msprValues.reduce((sum, value) => sum + value, 0);
      const avg = total / msprValues.length;
      
      // Return Average
      return avg.toFixed(2)
    }

    // Call Methods
    fetchSentiment();
    fetchNews();

  }, [tickerSymbol]);

  // UI
  return (
    <div className='app'>

      <div className='search-container'>
        <input
          className='search-bar'
          type="text"
          value={tickerInput}
          onChange={(e) => setTickerInput(e.target.value)}
          placeholder='Enter ticker symbol (e.g. AAPL)'
        />

        <button onClick={() => setTickerSymbol(tickerInput)}>🔍 Search</button>
      </div>

      <h1>Insider Sentiment Score: {sentiment}</h1>
      <p>The MSPR ranges from -100 for the most negative to 100 for the most positive which can signal price changes in the coming 30-90 days.</p>
      
      <hr width="100%"></hr>

      <h2>Articles: {sortedArticles.length}</h2>

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
          />
        ))}
      </div>

    </div>
  )

}

export default App;