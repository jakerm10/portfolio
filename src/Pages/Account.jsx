import { auth } from '../firebase.js';   // your Firebase config file
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        await signOut(auth);
        navigate('/');
    };

    return(
        <div className="spacing">
            <h1>Test</h1>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    );
}