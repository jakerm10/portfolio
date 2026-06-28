import { auth } from '../firebase.js';   //Firebase config file
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../css/Account.css';
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function Account({user}) {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const handleSignOut = async () => {
        await signOut(auth);
        navigate('/');
    };

    useEffect(() => {
        const loadUserData = async () => {
            if (!user) return;
            const snap = await getDoc(
                doc(db, "users", user.uid)
            );
            if (snap.exists()) {
                setUserData(snap.data());
            }
        };
    
        loadUserData();
    }, [user]);

    return(
        <div className="spacing">
            <h1 className="accounttitle">{userData?.displayName ? `Hello,  ${userData.displayName}!` : "Hello!"}</h1>
            <br></br>
            <p className="subhead">Your Information:</p>
            <p className="info">
                Name: {userData?.displayName || "Not set"}
                <br></br>
                Email: {userData?.email || "Not set"}
                <br></br>
                Phone: {userData?.phone || "Not set"}
                <br></br>
            </p>
            <Link to="/AccountEdit">
                <button className="editbutton">Edit</button>
            </Link>
            <button className="logoutbutton" onClick={handleSignOut}>Sign out</button>
            <p className="bottomtext">
                Your account was created on {new Date(user?.metadata?.creationTime).toLocaleDateString("en-US",{year: "numeric", month: "long", day: "numeric"})}
            </p>
            <br></br>
        </div>
    );
}  