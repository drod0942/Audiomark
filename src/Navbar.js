import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Audiomark</h1>
            <div className="links">
                <Link to="/Audiomark">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Sign Up/In</Link>
            </div>
        </nav>
    );
}

export default Navbar;