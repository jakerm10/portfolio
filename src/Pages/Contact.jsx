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

        e.target.style.height="auto";
        e.target.style.height=`${e.target.scrollHeight}px`;
    }
    function handleReasonChange(e) {
        setReason(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            console.log(import.meta.env);
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: name,
                    email: email,
                    message: message,
                    phone: phone,
                    reason: reason
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
        
        <div className="columnforcenter">
            <h1 className="titlecontact">Contact Me</h1>
            <h2 className="subtitlecontact">Send me a message to book an appointment, change account details, or any other questions you might have</h2>
            <form onSubmit={handleSubmit}>
                <label className="formclass">
                    Name:
                    <input className="namebox" type="text" id="name" name="name" value={name} onChange={handleNameChange} required/>
                </label>
                <label className="formclass">
                    Email:
                    <input className="emailbox" type="email" id="email" name="email" value={email} onChange={handleEmailChange} required/>
                </label>
                <label className="formclass">
                    Phone:
                    <input className="phonebox" type="text" id="phone" name="phone" value={phone} onChange={handlePhoneChange}/>
                </label>
                <label className="formclass">
                    Inquiry Type:
                    <select className="inquirybox" id="reason" name="reason" value={reason} onChange={handleReasonChange} required>
                        <option value="">Select</option>
                        <option value="Booking">Booking</option>
                        <option value="Account">Account</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label className="formclass">
                    Message:
                    <textarea className="messagebox" id="message" name="message" value={message} onChange={handleMessageChange} style={{ overflow: "hidden" }} required/>
                </label>
                <div className="submitc">
                    <button className="submitb">Send</button>
                </div>
                
            </form>
        </div>
    );
}