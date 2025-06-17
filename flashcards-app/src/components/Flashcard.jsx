// Unpack values from prop | style={{backgroundColor: color}}
const Flashcard = ({question, answer, category, diffculty, isFlipped, onFlip, color}) => {
    return (
      <div className="flashcard-container" onClick={onFlip}>

        {/* Use Ternary Operator to trigger flip effect based on className attribute change */}
        <div className={`flashcard ${isFlipped ? 'flipped': ''}`}>
            <div className="flashcard-content">
                {/* Style like LeetCode 🔥 */}
                <div className="tags-container">
                  <h4 className="tag">{category}</h4>
                  <h4 className="tag">{diffculty}</h4>
                </div>
                
                {/* Display question or answer based upon the isFlipped property */}
                <div className="flashcard-text">
                  <p>{isFlipped ? answer : question}</p>
                </div>

            </div>
        </div>
      </div>  
    );
}

export default Flashcard;