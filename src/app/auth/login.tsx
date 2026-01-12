import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Unlock } from 'lucide-react';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import useLoginValidation from '../../utils/login-validation';
import useLoginQuery from '../../lib/query/login.query';
import NavBar from '../../features/shared/nav-bar';
import Footer from '../../features/shared/footer';

export default function LoginForm() {
    const navigate = useNavigate();
    const { handleSubmit, errors } = useLoginValidation();
    const { mutate, isPending } = useLoginQuery();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = handleSubmit({
            email,
            password,
        });

        if (isValid) {
            mutate(
                { email, password },
                {
                    onSuccess: () => {
                        setEmail('');
                        setPassword('');

                        navigate('/start/python');
                    },
                },
            );
        }
    };

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="auth-container wrapper">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h2>Connectez toi avec codePlatform</h2>
                            <p>
                                Commencez votre voyage de Zéro à Héro
                                aujourd'hui.
                            </p>
                        </div>

                        <form
                            onSubmit={formSubmit}
                            method="post"
                            className="auth-form"
                        >
                            <div className="input-group">
                                <label>Email</label>
                                <div className="input-wrapper">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="example@gmail.com"
                                    />
                                    <Mail size={18} className="field-icon" />
                                </div>
                                {errors.email && (
                                    <p className="error">{errors.email}</p>
                                )}
                            </div>
                            <div className="input-group">
                                <label>Mot de passe</label>
                                <div className="input-wrapper">
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="••••••••"
                                    />
                                    {isPasswordVisible ? (
                                        <Unlock size={18} onClick={()=> setIsPasswordVisible(p => !p)} className='field-icon cursor-pointer' />
                                    ):(
                                        <Lock size={18} onClick={()=> setIsPasswordVisible(p => !p)} className="field-icon cursor-pointer" />
                                    )}
                                    
                                </div>
                                {errors.password && (
                                    <p className="error">{errors.password}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <ClipLoader size={20} color="#ffffff" />
                                ) : (
                                    <>
                                        Connexion <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="auth-footer">
                            Vous n'avez pas de compte ?{' '}
                            <a href="/register">Inscrivez-vous</a>
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
