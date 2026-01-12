import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { User, Mail, Lock, ArrowRight, Unlock } from 'lucide-react';
import { useSigninValidation } from '../../utils/signin-validation';
import useSigninQuery from '../../lib/query/signing.query';

export default function RegisterForm() {
    const navigate = useNavigate();
    const { handleSubmit, errors } = useSigninValidation();
    const { mutate, isPending } = useSigninQuery();

    // États Formulaire
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = handleSubmit({
            username,
            email,
            password,
        });

        if (isValid) {
            mutate(
                { username, email, password },
                {
                    onSuccess: () => {
                        setUsername('');
                        setEmail('');
                        setPassword('');

                        navigate('/start/python');
                    },
                },
            );
        }
    };

    return (
        <div className="auth-container wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Rejoindre codePlatform</h2>
                    <p>Commencez votre voyage de Zéro à Héro aujourd'hui.</p>
                </div>

                <form onSubmit={formSubmit} method="post" className="auth-form">
                    <div className="input-group">
                        <label>Nom</label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="ex: Luckson"
                            />
                            <User size={18} className="field-icon" />
                        </div>
                        {errors.username && (
                            <p className="error">{errors.username}</p>
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
                            <p className="error">{errors.email}</p>
                        )}
                    </div>
                    <div className="input-group">
                        <label>Mot de passe</label>
                        <div className="input-wrapper">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                            />
                            {isPasswordVisible ? (
                                <Unlock size={18} onClick={()=> setIsPasswordVisible(p => !p)} className="field-icon cursor-pointer" />
                            ):(
                                <Lock size={18} onClick={()=> setIsPasswordVisible(p => !p)} className='field-icon cursor-pointer' />
                            )}
                            
                        </div>
                        {errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </div>

                    <button type="submit" className="btn" disabled={isPending}>
                        {isPending ? (
                            <ClipLoader size={20} color="#ffffff" />
                        ) : (
                            <>
                                Créer un compte <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <p className="auth-footer">
                    Déjà inscrit ? <a href="/login">Connectez-vous</a>
                </p>
            </div>
        </div>
    );
}
