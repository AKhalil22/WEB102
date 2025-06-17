import Header from './components/Header';
import Flashcard from './components/Flashcard';
import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header/>
      <Flashcard question="?" answer={"..."} isFlipped={false} onFlip={() => {}}/>
    </div>
  )
}

export default App;