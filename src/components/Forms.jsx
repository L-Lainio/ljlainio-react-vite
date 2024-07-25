import React from 'react';

const Forms = () => {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase">
                    Contact Form
                </h1>
                <form name="contact" method="POST" data-netlify="true" className="mt-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700">Your name</span>
                            <input
                                type="text"
                                name="name"
                                className="
                                    w-full
                                    block px-16 py-2 mt-2
                                    border-gray-300
                                    rounded-md
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                "
                                placeholder="Jane Doe"
                            />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700">Email address</span>
                            <input
                                type="email"
                                name="email"
                                className="
                                    w-full
                                    block px-16 py-2 mt-2
                                    border-gray-300
                                    rounded-md
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                "
                                placeholder="jane.doe@example.com"
                            />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700">Message</span>
                            <textarea
                                name="message"
                                className="
                                    w-full
                                    block px-16 py-2 mt-2
                                    border-gray-300
                                    rounded-md
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                "
                                placeholder="Your message"
                            />
                        </label>
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
};

export default Forms
