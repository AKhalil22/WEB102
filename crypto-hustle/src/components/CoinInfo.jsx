import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import "./CoinInfo.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CoinInfo({image, name, symbol}) {
  const [price, setPrice] = useState(null)

  useEffect(() => {
    const getCoinPrice = async () => {
      let response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`);
      let responseJson = await response.json();
      setPrice(responseJson);
    }
    getCoinPrice().catch(console.error);
  }, []);

  return (
    <div>
      {price && (
        <div className="main-list" key={symbol}>
          <Link
            style={{ color: "White" }}
            to={`/coinDetails/${symbol}`}
            key={symbol}
          >
            <img
              className="icons"
              src={`https://www.cryptocompare.com${image}`}
              alt={`Small icon for ${name} crypto coin`}
            />
            {name}
            {price && price.USD ? ` $${price.USD} USD` : null}
          </Link>
        </div>
      )}
    </div>
  )
}

export default CoinInfo