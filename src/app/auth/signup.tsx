import React, { useState } from 'react';
import { User, Mail, Lock, GraduationCap, ArrowRight } from 'lucide-react';
import { useSigninValidation } from '../../utils/signin-validation';


export default function RegisterForm() {
    const { handleSubmit, errors } = useSigninValidation();

    // États Formulaire
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmit =  (e: React.FormEvent)=> {
        e.preventDefault();

        const isValid = handleSubmit({
            username, email, password
        })

        if(isValid){
            alert("isValid")
        }
    }

    return (
        <div className="auth-container wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Rejoindre codePlatform</h2>
                    <p>Commencez votre voyage de Zéro à Héro aujourd'hui.</p>
                </div>

                <form onSubmit={formSubmit} method='post' className="auth-form">
                    <div className="input-group">
                        <label>Nom complet</label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Luckson premier" />
                            <User size={18} className="field-icon" />
                        </div>
                        {errors.username && (
                            <p className='error'>{errors.username}</p>
                        )}
                    </div>
                    <div className="input-group">
                        <label>Address Email</label>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="exemple@gmail.com"
                            />
                            <Mail size={18} className="field-icon" />
                        </div>
                        {errors.email && (
                            <p className='error'>{errors.email}</p>
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
                        Créer mon compte <ArrowRight size={20} />
                    </button>
                </form>

                <p className="auth-footer">
                    Déjà inscrit ? <a href="/login">Connectez-vous</a>
                </p>
            </div>
        </div>
    );
}
