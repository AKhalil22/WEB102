import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_APP_API_KEY

// image
// name
// symbol
const CoinInfo = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);

    useEffect(() => {
        const getCoinPrice = async () => {
            try {
                const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                setPrice(json);
            } catch (error) {
                console.error(error.message);
            }
        }
        getCoinPrice().catch(console.error);
    }, [symbol])

    
    return (
          <div>
            {price ? ( // rendering only if API call actually returned us data
                <li className="main-list" key={symbol}>
                    <img 
                        className="icons" 
                        src={`https://www.cryptocompare.com${image}`} 
                        alt={`Small icon for ${name} crypto coin`}
                    />
                    {name}
                    {price && price.USD ? ` $${price.USD} USD` : null}
                </li>
            ) : 
            null
            }
        </div>
    )
}

export default CoinInfo