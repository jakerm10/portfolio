import { auth } from '../firebase.js';   //Firebase config file
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../css/Account.css';

export default function Account({user}) {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        await signOut(auth);
        navigate('/');
    };

    return(
        <div className="spacing">
            <h1>Hello, {user?.displayName}</h1>
            <br></br>
            <button className="logoutbutton" onClick={handleSignOut}>Sign out</button>
            <br></br>
        </div>
    );
}  