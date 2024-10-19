"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [classDay, setClassDay] = useState('');
    const [classTime, setClassTime] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Explicitly define the type of the event parameter
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message,
            classDay,
            classTime,
        };

        emailjs.send('service_m63nitd', 'template_485udmr', templateParams, '8Rh1NjDZBC5ZgppVa')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Your message has been sent successfully!');
                setErrorMessage('');
                setName('');
                setEmail('');
                setMessage('');
                setClassDay('');
                setClassTime('');
            })
            .catch((err) => {
                console.error('Failed to send message:', err);
                setErrorMessage('There was an error sending your message. Please try again.');
                setSuccessMessage('');
            });
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        className="border rounded w-full p-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        className="border rounded w-full p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Class Day</label>
                    <input
                        type="text"
                        className="border rounded w-full p-2"
                        value={classDay}
                        onChange={(e) => setClassDay(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Class Time</label>
                    <input
                        type="text"
                        className="border rounded w-full p-2"
                        value={classTime}
                        onChange={(e) => setClassTime(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Message</label>
                    <textarea
                        className="border rounded w-full p-2"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded py-2 px-4"
                >
                    Send Message
                </button>
            </form>
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

            <div className="mt-6">
                <h2 className="text-xl font-bold">Join Our Community</h2>
                <p>Join our community for updates and discussions!</p>
                <a href="YOUR_COMMUNITY_LINK" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    Click here to join
                </a>
            </div>
        </div>
    );
}
