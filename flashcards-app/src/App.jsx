import Header from './components/Header';
import Flashcard from './components/Flashcard';
import Navigation from './components/Nagivation';
import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header/>
      <Flashcard question="?" answer={"..."} isFlipped={false} onFlip={() => {}}/>
        <div className='nav-container'>
          <Navigation direction="prev" onClick={() => {}}/>
          <Navigation direction="next" onClick={() => {}}/>
        </div>
    </div>
  )
}

export default App;