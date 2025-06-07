import { Link } from "react-router"
import "../css/Navbar.css"; 

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
                
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div> 
        </nav>
    )
        
    
}

export default NavBar