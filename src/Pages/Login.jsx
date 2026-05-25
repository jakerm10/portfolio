import { auth, googleProvider } from '../firebase.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailAuth = async () => {
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login">
            <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>

            <input
                type="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <button onClick={handleEmailAuth}>
                {isLogin ? 'Log In' : 'Sign Up'}
            </button>

            <button onClick={handleGoogleLogin}>
                <FcGoogle /> Sign in with Google
            </button>

            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Need an account? Sign Up" : "Have an account? Log In"}
            </button>
        </div>
    );
}