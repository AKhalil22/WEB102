import './App.css';
import CountyCard from './components/CountyCard';
import Header from './components/Header';
import countiesData from './data/nyc_counties.json';
import { useState } from 'react'; // Allows React variables to be remembered

function App() {
  // Init: React hooks 'useState'
  const [sortOption, setSortOption] = useState('default');

  // Logic to sort JSON of countries based on chosen option 
  const sortedCounties = [...countiesData].sort((a,b) => {
    switch (sortOption) {
      case 'pop-dec':
        return b.population - a.population;
      case 'pop-inc':
        return a.population - b.population;
      case 'income-dec':
        return b.medianIncome - a.medianIncome;
      case 'income-inc':
        return a.medianIncome - b.medianIncome;
      case 'degree-dec':
        return b.bachelorPercent - a.bachelorPercent;
      case 'degree-inc':
        return a.bachelorPercent - b.bachelorPercent;
      default:
        return 0; // Represents no sorting
    }
  });

  return (
    <div className="App">
      {/* Create header w/count of counties */}
      <Header count={countiesData.length}/>

      {/* Create dropdown menu of options to sort counties by */}
      <select className="sort-dropdown" onChange={(e) => setSortOption(e.target.value)}>
        <option value="default">Sort by...</option>
        <option value="pop-dec">Population ⬇</option>
        <option value="pop-inc">Population ⬆</option>
        <option value="income-dec">Income ⬇</option>
        <option value="income-inc">Income ⬆</option>
        <option value="degree-dec">Degree % ⬇</option>
        <option value="degree-inc">Degree % ⬆</option>
      </select>

      {/* Build grid of NYC counties */}
      <div className="card-grid">
        {sortedCounties.map((county) => (
          <CountyCard
            name={county.name}
            image={county.image}
            population={county.population}
            medianIncome={county.medianIncome}
            bachelorPercent={county.bachelorPercent}
            link={county.link}
          />
        ))}
      </div>
    </div>
  )
}

export default App
