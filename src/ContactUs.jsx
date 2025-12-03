import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from './config';

export const ContactUs = () => {
    const form = useRef();
    const [formStatus, setFormStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    setFormStatus('success');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setFormStatus('error');
                },
            );
    };

    return (
        <div className="max-w-2xl mx-auto">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                        placeholder="Subject"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none resize-none"
                        placeholder="Your message here..."
                    />
                </div>
                <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:cursor-pointer"
                >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                    <p className="text-green-600 text-center">Thank you! Your message has been sent successfully.</p>
                )}
                {formStatus === 'error' && (
                    <p className="text-red-600 text-center">Sorry, there was an error sending your message. Please try again.</p>
                )}
            </form>
        </div>
    );
};

