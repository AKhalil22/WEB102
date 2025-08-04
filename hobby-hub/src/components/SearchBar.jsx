const SearchBar = ({ search, setSearch }) => {
    return (
        <div className='search-bar-container'>
            <input
                className='search-bar'
                type="text"
                placeholder='Search Posts'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => setSearch(search)}>🔍</button>
        </div>
    );
}

export default SearchBar;