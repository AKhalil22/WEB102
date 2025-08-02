const SearchBar = ({ setSearch }) => {
    return (
        <div className='search-bar-container'>
            <input
                className='search-bar'
                type="text"
                value={searchInput}
                placeholder='Enter ticker symbol (e.g. AAPL)'
            />

            <button onClick={() => setSearch(searchInput)}>🔍 Search</button>
        </div>
    );
}

export default SearchBar;