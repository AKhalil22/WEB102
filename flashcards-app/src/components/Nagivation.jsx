const Navigation = ({direction, onClick}) => {
    return(
        <button onClick={onClick} className="nav-button">
            {direction === 'next' ? "→" : "←"}
        </button>
    );
}

export default Navigation;