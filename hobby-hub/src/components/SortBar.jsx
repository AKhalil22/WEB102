const SortBar = ({ setDateFilter }) => {
    return (
        <div className="sort-bar-container">
            <select className="dropdown-filter" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                <option value="latest">Most Recent</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
}

export default SortBar;