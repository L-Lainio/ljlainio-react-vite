import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
        // You can send the form data to your server or an API endpoint here

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');

        // Display a popup message
        alert('Thank you for your message. Someone will contact you soon.');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="
                                shadow appearance-none
                                border rounded
                                w-full py-2 px-3
                                text-gray-700
                                leading-tight
                                focus:outline-none
                                focus:shadow-outline
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                            "
                            placeholder="Your name"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                                shadow appearance-none
                                border rounded
                                w-full py-2 px-3
                                text-gray-700
                                leading-tight
                                focus:outline-none
                                focus:shadow-outline
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                            "
                            placeholder="Your email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="
                                shadow appearance-none
                                border rounded
                                w-full py-2 px-3
                                text-gray-700
                                leading-tight
                                focus:outline-none
                                focus:shadow-outline
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                            "
                            placeholder="Your message"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-2">
                        <button
                            type="submit"
                            className="
                                w-full
                                px-4 py-2
                                text-white
                                bg-indigo-600
                                rounded-md
                                shadow-sm
                                hover:bg-indigo-700
                                focus:outline-none
                                focus:ring-2
                                focus:ring-offset-2
                                focus:ring-indigo-500
                            "
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm
