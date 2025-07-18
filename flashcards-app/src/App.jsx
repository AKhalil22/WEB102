// Components
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import Navigation from './components/Nagivation';
import TextBox from './components/TextBox';

// Utils
import { isAnswerClose } from './utils/isAnswerClose';

// React
import { useState, useEffect } from 'react';

// JSON, CSS
import flashcard_data from './data/flashcard_data.json';
import './App.css';

function App() {
  // State Variables: Flashcard Component
  const [cards, setCards] = useState(flashcard_data);
  const [category, selectedCategory] = useState("All");
  const [difficulty, selectedDifficulty] = useState("All");
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // State Variables: Textbox Component
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); // null = unanswered, true/false = after submission
  const [hasSubmitted, setHasSubmitted] = useState(false); // Prevent duplicate entries

  // Create list of filterCards based upon selected catergoy & difficulty
  const filteredCards = cards.filter(card =>
    (category === "All" || card.category === selectedCategory) &&
      (difficulty === "All" || card.difficulty === selectedDifficulty)
  )

  // Update card's flipped status
  const handleFlip = () => {
    setIsFlipped(prev => !prev) // Use arrow function to prevent errors if batched state changes 
  }

  // useEffect = React Hook that propagates changes passed in states/props
  useEffect(() => {
    // Run when category or difficulty chages
    setIndex(0)
    setIsFlipped(false)
  }, [category, difficulty])

  // Update current card index position
  const handleClick = (isNext) => {
    // Reset flipped status before changing card
    setIsFlipped(false)

    // Conditions: Update index representing current card
    if (isNext) {
      setIndex(index => (index + 1) % filteredCards.length) // 3 % 3 == 0 (Wrap back to first card in deck)
    } else {
      setIndex(index => ((index - 1) + filteredCards.length) % filteredCards.length) // 0 - 1 == -1 + 3 % 3 == 2 (Wrap back to last card in deck)
    }
  } 

  // Use Fuzzy Matching to check answer in TextBox
  const handleSubmit = () => {
    console.log("Submitted:", userInput);

    // .trim() empty space & .toLowerCase() to allow for more accurate matching
    const correct = filteredCards[index]?.answer.trim().toLowerCase();
    const guess = userInput.trim().toLowerCase();

    // True = Correct | False = Incorrect
    const match = isAnswerClose(guess, correct);
    setIsCorrect(match);
    setHasSubmitted(true);

    // Show if correct
    alert(match ? "✅ Correct!" : "❌ Incorrect, revisit!");
  }

  return (
    <div className='App'>
      <Header numberOfCards={filteredCards.length}/>

      {/* Fetch current card data based on the set index '.?' = chaining = prevent error if out of bounds */}
      <Flashcard 
        question={filteredCards[index]?.question} 
        answer={filteredCards[index]?.answer} 
        category={filteredCards[index]?.categories[0]}
        diffculty={filteredCards[index]?.difficulty}
        isFlipped={isFlipped} 
        onFlip={handleFlip}
        color={filteredCards[index]?.color}
      />
      
      {/* Parent container holding prev & next navigation buttons */}
      <div className='nav-container'>
        {/* Structure click events as such: onClick={() => handleClick(false)} to prevent prematurely calling the function during render */}
        <Navigation direction="prev" onClick={() => handleClick(false)}/>
        <TextBox userInput={userInput} setUserInput={setUserInput} handleSubmit={handleSubmit} placeholder={"Answer here!"}/>
        <Navigation direction="next" onClick={() => handleClick(true)}/>
      </div>
    </div>
  )
}

export default App;