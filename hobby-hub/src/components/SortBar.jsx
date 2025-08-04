const SortBar = ({ filter, setFilter }) => {
    return (
        <div className="sort-bar-container">
            <select className="dropdown-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="latest">Most Recent</option>
                <option value="oldest">Oldest</option>
                <option value="popular">Popular</option>
            </select>
        </div>
    );
}

export default SortBar;