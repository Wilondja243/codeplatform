import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ClipLoader } from 'react-spinners';
import useNotification from '../../hooks/use-taost-notification';
import useContactValidation from '../../utils/contact-validation';

export default function ContactForm() {
    const { notifySuccess } = useNotification();
    const { errors, handleSubmit } = useContactValidation();

    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [isSending, setIsSending] = useState(false);

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = handleSubmit({ title, email, description });

        if (isValid) {
            setIsSending(true);
            emailjs
                .send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                    {
                        from_name: email,
                        subject: title,
                        message: description,
                        reply_to: process.env.REACT_APP_EMAILJS_EMAIL,
                    },
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
                )
                .then(() => {
                    notifySuccess('Message envoyé avec success !');

                    setIsSending(false);
                    setEmail('');
                    setTitle('');
                    setDescription('');
                })
                .catch((error) => {
                    console.log('Error: ', error);
                    setIsSending(false);
                });
        }
    };

    return (
        <div className="p-8 bg-background-light rounded-xl border">
            <h3 className="text-2xl font-bold mb-6">Note rapide</h3>

            <form onSubmit={onFormSubmit} className="space-y-4" method="post">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 rounded-md bg-background-muted border border-gray-100 focus:border-primary"
                    placeholder="Titre"
                />
                {errors.title && (
                    <p className="text-red-600 -mt-1">{errors.title}</p>
                )}

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-md bg-background-muted border border-gray-100 focus:border-primary"
                    placeholder="Email"
                />
                {errors.email && (
                    <p className="text-red-600 -mt-1">{errors.email}</p>
                )}

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 rounded-md bg-background-muted border border-gray-100 focus:border-primary"
                    placeholder="Message"
                />
                {errors.description && (
                    <p className="text-red-600 -mt-1">{errors.description}</p>
                )}

                <button
                    type="submit"
                    className="w-full h-12 bg-primary text-text-light rounded-md font-bold cursor-pointer"
                >
                    {isSending ? (
                        <span className="flex items-center justify-center gap-2">
                            <ClipLoader size={20} color="#fff" />
                            Envoyé un message
                        </span>
                    ) : (
                        'Enoyé un message'
                    )}
                </button>
            </form>
        </div>
    );
}
