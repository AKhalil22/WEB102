// Unpack values from prop
const Flashcard = ({question, answer, category, diffculty, isFlipped, onFlip, color}) => {
    return (
      <div className="flashcard-container" onClick={onFlip} style={{backgroundColor: color}}>

        {/* Use Ternary Operator to trigger flip effect based on className attribute change */}
        <div className={`flashcard ${isFlipped ? 'flipped': ''}`}>
            <div className="flashcard-content">

                {/* Style like LeetCode 🔥 */}
                <h3 className="catergory">{category}</h3>
                <h3 className="difficulty">{diffculty}</h3>

                {/* Display question or answer based upon the isFlipped property */}
                <p>{isFlipped ? answer : question}</p>
            </div>
        </div>
      </div>  
    );
}

export default Flashcard;