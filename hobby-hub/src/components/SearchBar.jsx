const SearchBar = ({ setSearch }) => {
    return (
        <div className='search-bar-container'>
            <input
                className='search-bar'
                type="text"
                placeholder='Enter ticker symbol (e.g. AAPL)'
            />

            <button onClick={() => setSearch(search)}>🔍</button>
        </div>
    );
}

export default SearchBar;