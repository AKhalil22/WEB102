import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoinInfo from "./components/CoinInfo"


const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      try {
        const response = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?&api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setList(json);
        console.log(json);
        console.log(json.Data);
      } catch (error) {
        console.error(error.message);
      }
    } 

    fetchAllCoinData();

    /*
  const callAPI = async (query) => {
  const response = await fetch(query);
  const json = await response.json();
}
    */
  }, [])

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
          <ul>
              <li>TEST</li>
              {list &&
                Object.entries(list.Data).slice(0, 50)
                  // [key, value]
                  .filter(([_, coinData]) =>
                    coinData.IsTrading &&
                    coinData.Algorithm !== "N/A" &&
                    coinData.ProofType !== "N/A"
                  )
                  .map(([coin, coinData]) => (
                    <CoinInfo
                      image={list.Data[coin].ImageUrl}
                      name={list.Data[coin].FullName}
                      symbol={list.Data[coin].Symbol}
                    />
                  )
                )
              }

          </ul>
    </div>

  )
}

export default App
