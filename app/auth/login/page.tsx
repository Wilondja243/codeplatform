'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, User, Lock, Eye, EyeOff } from 'lucide-react';
import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/nav-bar';

export default function RegisterForm() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center pb-20 pt-40">
                <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    <div className="hidden md:block w-1/2">
                        <img
                            src="/elearn.png"
                            alt="Illustration CodePlatform"
                            className="w-full h-auto max-h-[500px]"
                        />
                    </div>

                    <div className="w-full md:w-1/2 max-w-[420px]">
                        <div className="mb-10">
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                                Connectez-vous pour continuer à apprendre
                            </h1>
                        </div>

                        <form className="space-y-5">
                            <div className="space-y-1">
                                <div className="relative border border-gray-500 rounded-sm">
                                    <Mail
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                        size={18}
                                    />
                                    <input
                                        type="email"
                                        className="w-full h-14 pl-12 pr-4 rounded-sm focus:bg-white border-2 border-transparent focus:border-primary outline-none transition-all font-semibold"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <button className="w-full h-14 bg-slate-900 text-card rounded-md font-bold text-lg hover:bg-slate-900/80 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                Continuer
                                <ArrowRight size={20} />
                            </button>
                        </form>

                        <div className="relative flex items-center justify-center my-8">
                            <div className="w-full border-t border-slate-200"></div>
                            <span className="absolute px-4 bg-white text-xs font-bold text-slate-300 uppercase">
                                ou
                            </span>
                        </div>

                        <button className="bg-gray-200 w-full h-14 flex items-center justify-center gap-3 border-2 border-card-border rounded-md font-bold text-slate-600 hover:bg-gray-100 cursor-pointer">
                            <img
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                className="size-5"
                                alt="Google"
                            />
                            S'inscrire avec Google
                        </button>

                        <p className="mt-8 text-center text-sm font-bold text-slate-500">
                            Vous n'avez pas de compte ?{' '}
                            <Link
                                href="/auth/register"
                                className="text-primary hover:underline"
                            >
                                S'inscrire
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
