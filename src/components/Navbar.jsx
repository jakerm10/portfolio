import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/">Home</Link>  
            Jake Moore
            <Link to="/Photography">Photography</Link>
        </nav>
    );
}