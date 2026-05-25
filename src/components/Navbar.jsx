import { Link } from "react-router-dom"; 
import "../css/Navbar.css";

export default function Navbar({user}){
    return( 
        <nav className="navbar">  
            <div className="texts">
            <Link to="/Photography">Photography</Link>
            </div>
            <div className="texts">
            <Link to="/Process">My Process</Link>
            </div>
            <div className="texts">
            <Link to="/"> Jake Moore </Link>
            </div>
            <div className="texts">
            <Link to="/Contact">Contact</Link>
            </div>
            <div className="texts">
                {user ? <Link to="/Account">Account</Link> : <Link to="/Login">Login</Link> }
            </div>
        </nav>
    );
}