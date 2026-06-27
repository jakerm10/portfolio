import { doc, updateDoc, getDoc } from "firebase/firestore";
import "../css/AccountEdit.css";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';

export default function AccountEdit({ user }) {
    const [userData, setUserData] = useState(null);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUserData = async () => {
            if (!user) return;
            const snap = await getDoc(doc(db, "users", user.uid));
            if (snap.exists()) {
                setUserData(snap.data());
                setNewName(snap.data().displayName || '');
                setNewEmail(snap.data().email || '');
                setNewPhone(snap.data().phone || '');
            }
        };
        loadUserData();
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, "users", user.uid), {
                displayName: newName,
                email: newEmail,
                phone: newPhone
            });
            setSuccess(true);
            setTimeout(() => navigate('/Account'), 1500);
        } catch (err) {
            console.error(err);
            alert('Failed to update.');
        }
    };

    return (
        <div className="Edit">
            <h1>Your Information</h1>
            <form onSubmit={handleSubmit}>
            <div className="inputtitle">
                    <label>Name:</label>
                    <input 
                        type="text"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                    />
                </div>
                <div className="inputtitle">
                    <label>Email:</label>
                    <input 
                        type="email"
                        value={newEmail}
                        onChange={e => setNewEmail(e.target.value)}
                    />
                </div>
                <div className="inputtitle">
                    <label>Phone:</label>
                    <input 
                        type="tel"
                        value={newPhone}
                        onChange={e => setNewPhone(e.target.value)}
                    />
                </div>
                {success && <p>Updated successfully!</p>}
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}