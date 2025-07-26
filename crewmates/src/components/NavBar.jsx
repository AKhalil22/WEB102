import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav className="side-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/read">Summary</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;