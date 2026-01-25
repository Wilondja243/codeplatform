'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ClipLoader } from 'react-spinners';
import useNotification from '@/hooks/use-taost';
import useContactValidation from '@/utils/contact-validation';
import { Send } from 'lucide-react'; // Ajouté pour le look premium

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
                    notifySuccess('Message envoyé avec succès !');
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
        <div className="p-10 bg-white rounded-[2rem] border border-card-border shadow-2xl shadow-slate-100 relative overflow-hidden">
            {/* Décoration subtile en haut à droite */}
            <div className="absolute top-0 right-0 size-24 bg-primary/5 rounded-bl-full pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Send size={20} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-foreground tracking-tighter">
                        Note rapide
                    </h3>
                </div>

                <form
                    onSubmit={onFormSubmit}
                    className="space-y-6"
                    method="post"
                >
                    <div className="space-y-1">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full h-14 px-5 rounded-2xl bg-bg-muted border border-card-border text-foreground font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                            placeholder="Sujet de votre message"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs font-bold pl-2 pt-1 uppercase tracking-wider">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-14 px-5 rounded-2xl bg-bg-muted border border-card-border text-foreground font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                            placeholder="votre@email.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs font-bold pl-2 pt-1 uppercase tracking-wider">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1">
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className="w-full p-5 rounded-2xl bg-bg-muted border border-card-border text-foreground font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300 resize-none"
                            placeholder="Dites-nous tout..."
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs font-bold pl-2 pt-1 uppercase tracking-wider">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full h-14 bg-slate-900 text-white rounded-2xl font-black tracking-wide cursor-pointer hover:bg-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                        {isSending ? (
                            <>
                                <ClipLoader size={20} color="#fff" />
                                <span>Envoi en cours...</span>
                            </>
                        ) : (
                            <>
                                <span>Envoyer le message</span>
                                <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
