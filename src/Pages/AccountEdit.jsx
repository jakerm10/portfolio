import { doc, updateDoc, getDoc } from "firebase/firestore";
import "../css/AccountEdit.css";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { auth } from '../firebase.js';   //Firebase config file
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function AccountEdit({user}){

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

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

    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        
        try {
            await updateDoc(
                doc(db, "users", user.uid),
                {
                    email: newEmail,
                    phone: newPhone
                },
                {merge:true}
            );
        } catch (err) {
            console.error(err);
            alert('Failed to send message.');
        }
    };

    return(
        <div className="Edit">
            <h1>Your Information</h1>
            <div className="inputtitle">
                <label>Current Email: {userData?.email}</label>
            </div>
            <br></br>
            <form onSubmit={handleSubmitEmail => (e)}>
                Input:
                <input></input>
            </form>
                
        </div>
    )
}