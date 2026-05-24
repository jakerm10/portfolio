import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar(){
    return( 
        <nav className="navbar">
            <Link to="/">Home</Link>  
            <Link to="/Photography">Photography</Link>
            Jake Moore
            <Link to="/Process">My Process</Link>
            <Link to="/Login">Login</Link>
            
            
        </nav>
    );
}