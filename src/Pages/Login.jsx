import { auth, googleProvider, db } from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "../css/Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleEmailAuth = async () => {
        try {
            setError("");

            if (isLogin) {
                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
            } else {
                const cred = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                await setDoc(
                    doc(db, "users", cred.user.uid),
                    {
                        email: cred.user.email,
                        displayName: "",
                        bio: "",
                        profilePicture: "",
                        major: "",
                        graduationYear: "",
                        createdAt: new Date()
                    }
                );
            }

            navigate("/");
        } catch (err) {
            let message;
            console.log(err)
            switch(err.code){

                case "auth/invalid-email":
                    message="The email address entered is invaild."
                break;
                case "auth/user-not-found":
                    message="These is no account with this email."
                break;
                case "auth/missing-password":
                    message="Missing password."
                break;
                case "auth/invalid-credential":
                    message="Incorrect password."
                break;
                default:
                    message="Something unexpected happened."
            }
            setError(message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            setError("");
            const result = await signInWithPopup(
                auth,
                googleProvider
            );
            await setDoc(
                doc(db, "users", result.user.uid),
                {
                    email: result.user.email,
                    displayName:
                        result.user.displayName || "",
                    profilePicture:
                        result.user.photoURL || "",
                    bio: "",
                    major: "",
                    graduationYear: "",
                    createdAt: new Date()
                },
                { merge: true }
            );
            navigate("/");
        } catch (err) {
            let message;
            console.log(err)
            message="There was an issue with Google sign in."
            setError(message);
        }
    };

    return (
        <div className="login">
            <h1>{isLogin ? "Log In" : "Sign Up"}</h1>

            <div className="inputrow">
                <label>Email:</label>
                <input className="emailinput" type="email" placeholder=" email@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <br></br>

            <div className="inputrow">
                <label>Password:</label>
                <input className="emailinput" type="password" placeholder=" Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="errormessage">
                {error && <p>{error} Please try again.</p>}
            </div>
            

            <br></br><br></br>

            <button className="loginbutton" onClick={handleEmailAuth} >
                {isLogin ? "Log In" : "Sign Up"}
            </button>

            <br></br>

            <button className="googlesignin" onClick={handleGoogleLogin}>
                <FcGoogle />
                Sign in with Google
            </button>

            <br></br><br></br>

            <div className="needaccounttext">
                {isLogin ? "Need an acoount?" : "Already have an account?"}
            </div>
            <br></br>
            <button className="needaccount" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign up" : "Login"}
            </button>
            <br></br><br></br>
        </div>


    );
}