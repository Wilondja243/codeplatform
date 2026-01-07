import React, { useState } from 'react';
import { User, Mail, Lock, GraduationCap, ArrowRight } from 'lucide-react';
import NavBar from '../../lib/header/nav-bar';
import Footer from '../../lib/header/footer';
import useLoginValidation from '../../utils/login-validation';


export default function LoginForm() {
    const { handleSubmit, errors } = useLoginValidation();

    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const formSubmit =  (e: React.FormEvent)=> {
        e.preventDefault();

        const isValid = handleSubmit({
            identifier, password
        })

        if(isValid){
            alert("isValid")
        }
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="auth-container wrapper">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h2>Rejoindre codePlatform</h2>
                            <p>
                                Commencez votre voyage de Zéro à Héro
                                aujourd'hui.
                            </p>
                        </div>

                        <form onSubmit={formSubmit} method='post' className="auth-form">
                            <div className="input-group">
                                <label>Nom complet</label>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        value={identifier}
                                        onChange={(e)=> setIdentifier(e.target.value)}
                                        placeholder="Luckson premier"
                                    />
                                    <User size={18} className="field-icon" />
                                </div>
                                {errors.identifier && (
                                    <p className='error'>{errors.identifier}</p>
                                )}
                            </div>
                            <div className="input-group">
                                <label>Mot de passe</label>
                                <div className="input-wrapper">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value)}
                                        placeholder="••••••••"
                                    />
                                    <Lock size={18} className="field-icon" />
                                </div>
                                {errors.password && (
                                    <p className='error'>{errors.password}</p>
                                )}
                            </div>

                            <button type="submit" className="btn">
                                Connexion <ArrowRight size={20} />
                            </button>
                        </form>

                        <p className="auth-footer">
                            Vous n'avez pas de compte ? <a href="/register">Inscrivez-vous</a>
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
