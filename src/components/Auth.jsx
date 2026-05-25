import { auth, googleProvider } from '../firebase';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleEmailAuth = async () => {
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleSignOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="auth">
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
            <button onClick={handleEmailAuth}>
                {isLogin ? 'Log In' : 'Sign Up'}
            </button>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Need an account? Sign Up' : 'Have an account? Log In'}
            </button>
            <button onClick={handleGoogleLogin}>
                <FcGoogle /> Sign in with Google
            </button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}