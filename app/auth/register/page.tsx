'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ClipLoader } from 'react-spinners';
import { ArrowRight, Mail, User, Lock, Eye, EyeOff } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import GoogleLoginButton from '@/utils/browser-window';
import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/nav-bar';
import { registerAction } from '@/actions/auth/account/register';
import { useUserRegisterValidationForm } from '@/hooks/use-validation-form';

export default function RegisterForm() {
    const router = useRouter();
    const handleLogin = GoogleLoginButton();
    const { data: session } = useSession();
    const [isPending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useUserRegisterValidationForm();
    const [error, setError] = useState<string | undefined | null>(null);

    const onSubmit = async (data: any) => {
        startTransition(async () => {
            const result = await registerAction(data);

            if (result.success) {
                const loginResult = await signIn('credentials', {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                });
                if (loginResult?.ok) {
                    window.location.href = '/explore';
                }
            } else {
                console.log('registerError: ', result.errors || result.message);
                setError(result.message);
            }
        });
    };

    return (
        <>
            <NavBar />
            <div className="bg-white min-h-screen flex items-center justify-center pb-20 pt-40">
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
                                Créer un compte
                            </h1>
                            <p className="text-slate-500 font-medium">
                                Accédez à votre espace d'apprentissage.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >
                            {error && (
                                <div className="border-l-2 border-red-500 p-3 bg-red-100 text-red-600">
                                    {error}
                                </div>
                            )}

                            <div className="space-y-1">
                                <div className="relative border border-gray-500 rounded-md">
                                    <User
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                        size={18}
                                    />
                                    <input
                                        type="text"
                                        required
                                        {...register('name')}
                                        className="w-full h-14 pl-12 pr-4 rounded-md border-2 border-transparent focus:border-primary outline-none transition-all font-semibold"
                                        placeholder="Nom complet"
                                    />
                                </div>
                                {errors.name && (
                                    <small className="text-red-500 pt-0.5 font-semibold">
                                        {errors.name.message}
                                    </small>
                                )}
                            </div>

                            <div className="space-y-1">
                                <div className="relative border border-gray-500 rounded-md">
                                    <Mail
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                        size={18}
                                    />
                                    <input
                                        type="email"
                                        required
                                        {...register('email')}
                                        className="w-full h-14 pl-12 pr-4 rounded-md focus:bg-white border border-transparent focus:border-primary outline-none transition-all font-semibold"
                                        placeholder="exemple@gmail.com"
                                    />
                                </div>
                                {errors.email && (
                                    <small className="text-red-500 pt-0.5 font-semibold">
                                        {errors.email.message}
                                    </small>
                                )}
                            </div>

                            <label className="flex items-center gap-3 cursor-pointer py-2">
                                <input
                                    type="checkbox"
                                    className="size-5 rounded-lg border border-slate-200 accent-primary cursor-pointer"
                                />
                                <span className="text-sm text-slate-500 font-medium">
                                    J'accepte les conditions d'utilisation
                                </span>
                            </label>

                            <button
                                disabled={isPending}
                                className={`w-full mt-10 py-3 rounded-lg font-semibold flex items-center justify-center gap-2
                                    ${isPending ? 'bg-indigo-700 text-gray-400 cursor-not-allowed' : 'bg-indigo-900 text-white hover:bg-slate-800'}
                                    transition-all group`}
                            >
                                {isPending ? (
                                    <>
                                        <ClipLoader
                                            size={18}
                                            color={
                                                isPending
                                                    ? '#b1b4b8'
                                                    : '#ffffff'
                                            }
                                        />
                                        Enregistrement...
                                    </>
                                ) : (
                                    <>
                                        S'enregistrer
                                        <ArrowRight
                                            size={18}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="relative flex items-center justify-center my-8">
                            <div className="w-full border-t border-slate-200"></div>
                            <span className="absolute px-4 bg-white text-xs font-bold text-slate-300 uppercase">
                                ou
                            </span>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="bg-gray-200 w-full h-14 flex items-center justify-center gap-3 border-2 border-card-border rounded-md font-bold text-slate-600 hover:bg-gray-100 cursor-pointer"
                        >
                            <img
                                src="/google.svg"
                                className="size-5"
                                alt="Google"
                            />
                            S'inscrire avec Google
                        </button>

                        <p className="mt-8 text-center text-sm font-bold text-slate-500">
                            Déjà membre ?{' '}
                            <Link
                                href="/auth/login"
                                className="text-primary hover:underline"
                            >
                                Se connecter
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
