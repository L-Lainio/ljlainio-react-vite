import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {


    return (
        <section className="formcarry-container">
            <form action="https://formcarry.com/s/W1HspA9A_v3" method="POST" encType="multipart/form-data">
                <div className="formcarry-block">
                    <label htmlFor="fc-generated-1-name">Full Name</label>
                    <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
                </div>

                <div className="formcarry-block">
                    <label htmlFor="fc-generated-1-email">Your Email Address</label>
                    <input type="email" name="email" id="fc-generated-1-email" placeholder="johndoe@email.com" />
                </div>

                <div className="formcarry-block">
                    <label htmlFor="fc-generated-1-message">Your message</label>
                    <textarea name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
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
        </section>
    );
}

export default ContactForm;
