import "../css/Contact.css";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({user}) {
    const [name, setName] = useState(user?.displayName || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [message, setMessage] = useState("");
    const [reason, setReason] = useState("");


    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }
    function handleMessageChange(e) {
        setMessage(e.target.value);
    }
    function handleReasonChange(e) {
        setReason(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            console.log("Service:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
            console.log("Template:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
            console.log("Public:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: name,
                    email: email,
                    message: message,
                    phone: phone
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            alert('Message sent!');
        } catch (err) {
            console.error(err);
            alert('Failed to send message.');
        }
    };

    return (
        
        <div>
            <h1>Contact Me</h1>
            <h2>Send me a message to book an appointment, change account details, or introduce yourself</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: &nbsp;
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/>
                </label>
                <label>
                    Email: &nbsp;
                    <input type="text" id="email" name="email" value={email} onChange={handleEmailChange}/>
                </label>
                <label>
                    Phone: &nbsp;
                    <input type="text" id="phone" name="phone" value={phone} onChange={handlePhoneChange}/>
                </label>
                <label>
                    Inquiry Type: &nbsp;
                    <select id="reason" name="reason" value={reason} onChange={handleReasonChange}>
                        <option value="Booking">Booking</option>
                        <option value="Account">Account</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    Message: &nbsp;
                    <input type="text" id="message" name="message" value={message} onChange={handleMessageChange}/>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}