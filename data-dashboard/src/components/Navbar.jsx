// Import: Allow Backward Navigation Functionality from button
import { useNavigate } from 'react-router-dom';

const Navbar = ({tickerInput, setTickerInput, setTickerSymbol, isDetailView = false}) => {
    const navigate = useNavigate();
    
    return (
        <div className='search-container'>
            {isDetailView ? (
                // Show back button if in NewsDetail view
                <button className="back-button" onClick={() => navigate(-1)}>← Back to Dashboard</button>
            ) : (
                <>
                    <input
                        className='search-bar'
                        type="text"
                        value={tickerInput}
                        onChange={(e) => setTickerInput(e.target.value)}
                        placeholder='Enter ticker symbol (e.g. AAPL)'
                    />

                    <button onClick={() => setTickerSymbol(tickerInput)}>🔍 Search</button>
                </>
            )}
        </div>
    );
}

export default Navbar;