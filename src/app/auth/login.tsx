import React, { useState } from 'react';
import { User, Mail, Lock, GraduationCap, ArrowRight } from 'lucide-react';
import NavBar from '../../lib/header/nav-bar';
import Footer from '../../lib/header/footer';

export default function LoginForm() {
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

                        <form className="auth-form">
                            <div className="input-group">
                                <label>Nom complet</label>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Luckson premier"
                                    />
                                    <User size={18} className="field-icon" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Mot de passe</label>
                                <div className="input-wrapper">
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                    />
                                    <Lock size={18} className="field-icon" />
                                </div>
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
