import { Link } from "react-router-dom"; 
import "../css/Navbar.css";

export default function Navbar({user}){
    return(  
        <nav className="navbar">  
            <div className="texts dropdown-parent">
            <Link to="/Photography">Photography</Link>
            <div className="dropdown">
                <Link to="/Photography/Sports">Sports</Link>
                <Link to="/Photography/Portraits">Portraits</Link>
                <Link to="/Photography/Fitness">Fitness</Link>
                <Link to="/Photography/Nature">Nature</Link>
                <Link to="/Photography/Other">Other</Link>
            </div>
            </div>
            <div className="texts">
            <Link to="/Projects">Projects</Link>
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