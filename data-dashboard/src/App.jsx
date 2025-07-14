import { useEffect, useState } from 'react'
import './App.css'

// Init: FinnHub - Company News Sentiments (https://finnhub.io/docs/api)
import finnhub from 'finnhub';
const finnhubClient = new finnhub.DefaultApi("");
const API_KEY = "";

function App() {
  // Init: UseState
  const [tickerInput, setTickerInput] = useState("");

  // UseEffect: Call API to fetch latest company articles (Two Responses due to StrictMode in Main.jsx)
  useEffect(() => {

    // Fetch news article's relating to stock within given date range
    const fetchNews = async () => {
      const res = await fetch(`https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2025-06-13&to=2025-06-14&token=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    };

    // Fetch insider sentiment on stock within range
    const fetchSentiment = async () => {
      const res = await fetch(`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=AAPL&from=2025-06-13&to=2025-06-14&token=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    }

    // Call Methods
    // fetchSentiment();
    fetchNews();

  }, []);

  // UI
  return (
    <div className='app'>

      <div className='search-container'>
        <input
          className='search-bar'
          type="text"
          value={tickerInput}
          onChange={(e) => setTickerInput(e.target.value)}
          placeholder='Enter ticker symbol (e.g. APPL)'
        />

        <button onClick={() => setTickerInput(tickerInput)}>🔍 Search</button>
      </div>

    </div>
  )

}

export default App
