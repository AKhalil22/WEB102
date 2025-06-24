const TextBox = ({userInput, setUserInput, handleSubmit, placeholder}) => {
    // Event Handler: TextBox input changes
    const onInputChange = (e) => {
        setUserInput(e.target.value);
    }

    // Event Handler: Enter key hit
    const onEnterPress = (e) => {
        // Condition: Valiidate Enter Keystroke
        if (e.key === "Enter") {
            handleSubmit();
        }
    }
    
    return (
        <div className="text-box">
            <input
                type="text"
                value={userInput}
                onChange={onInputChange}
                onKeyDown={onEnterPress}
                placeholder={placeholder}
                className="input-field"
            />
            <button onClick={handleSubmit} className="submit-button">
                Submit
            </button>
        </div>
    );
}

export default TextBox;