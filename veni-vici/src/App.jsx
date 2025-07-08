import { useState, useEffect } from 'react';
import './App.css';

// Import TheCatAPI Key (https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t)
const apiKey = "live_zEltfrhvBSpPcLlrKchVeKzVI2r5kswNHjkyneJzquSuvHQ61478EcpoUwNnBgsR";

function App() {
  // Init: useState React hooks to control/manage API requests
  const [catData, setCatData] = useState(null);
  const [banList, setBanList] = useState([]);

  // Function: Fetch random cat with set request parameters
  const fetchCat = async () => {
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1", {
        headers: {
          "x-api-key": apiKey
        }
      });
      const data = await res.json(); // Allow's vairables to be utilized
      const cat = data[0];
      console.log(cat)

      // Condition: Check if breed info is given
      if (cat.breeds && cat.breeds[0]) {
        const breed = cat.breeds[0];

        // Condition: Verify breed dosen't exist in banList
        if (!banList.includes(breed.name) && !banList.includes(breed.origin) && !banList.includes(breed.life_span)) {
          setCatData({
            image: cat.url,
            name: breed.name,
            origin: breed.origin,
            lifespan: breed.life_span
          });
        } else {
          // Refetch if banned
          fetchCat();
        }
      }
    } catch (error) {
      console.log("@fetchCat - Error:", error)
    }
  }

  const handleBan = (value) => {
    // Condition: Check if name value is not already in banList
    if (!banList.includes(value)) {
      setBanList([...banList, value]);
    }
  };

  const removeBan = (value) => {
    // Create banList copy & remove value
    setBanList(banList.filter(item => item !== value));
  }

  return (
    <div>
      {/* Prevent Init runtime errors when first running */}
      { catData && (
        <div>
          <img src={catData.image} alt={catData.name} className='cat-image'/>
          <p onClick={() => handleBan(catData.name)}>Breed: {catData.name}</p>
          <p onClick={() => handleBan(catData.origin)}>Origin: {catData.origin}</p>
          <p onClick={() => handleBan(catData.lifespan)}>Lifespan: {catData.lifespan} years</p>
        </div>
      )}
      <button onClick={fetchCat}>🐈 Discover New Cat</button>

      <h3>Ban List</h3>
      <div className='ban-list'>
        {banList.map((item, index) => (
        <p key={index} onClick={() => removeBan(item)}>
          {item} (click to remove)
        </p>
      ))}
      </div>
    </div>
  )
}

export default App;