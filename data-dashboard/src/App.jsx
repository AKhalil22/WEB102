// Import: Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import: Components + React
import Dashboard from './components/Dashboard';
import NewsDetail from './components/NewsDetail';
import { useEffect, useState } from 'react'
import './App.css'

// Init: FinnHub - Company News Sentiments (https://finnhub.io/docs/api)
const API_KEY = "d1qlvv1r01qo4qd8330gd1qlvv1r01qo4qd83310";

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

  console.log("Start & End Dates:", startDate, "-", endDate)

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

      // Debug console.log("@fetchSentiment - Response:", data.data);
      
      // Condition: Valid Response
      if (data.data && data.data.length > 0) {
        setSentiment(data.data);
      } else {
        setSentiment("N/A");
      }
    };

    // Call Methods
    fetchSentiment();
    fetchNews();

  }, [tickerSymbol]);

  // UI
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path = "/" element = {
            <Dashboard
              tickerInput={tickerInput}
              setTickerInput={setTickerInput}

              setTickerSymbol={setTickerSymbol}

              sentiment={sentiment}

              dateFilter={dateFilter}
              setDateFilter={setDateFilter}

              sortedArticles={sortedArticles}
            />
          } />
          <Route path = "/:encodedUrl" element = {
            <NewsDetail articles={articles}/>
          } />
        </Routes>
      </Router>
    </div>
  );

}

export default App;