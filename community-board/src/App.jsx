import './App.css';
import CountyCard from './components/CountyCard';
import Header from './components/Header';
import countiesData from './data/nyc_counties.json';

function App() {

  return (
    <div className="App">
      {/* Create header w/count of counties */}
      <Header count={countiesData.length}/>

      {/* Build grid of NYC counties */}
      <div className="card-grid">
        {countiesData.map((county) => (
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
