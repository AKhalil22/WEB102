const Header = (props) => {
    return (
        <header>
            <h1>New York County Insights</h1>
            <p>Explore stats from {props.count} counties in the Empire State</p>
        </header>
    );
}

export default Header;