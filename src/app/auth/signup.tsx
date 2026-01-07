import React, { useState } from 'react';
import { User, Mail, Lock, GraduationCap, ArrowRight } from 'lucide-react';

export default function RegisterForm() {
    return (
        <div className="auth-container wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Rejoindre codePlatform</h2>
                    <p>Commencez votre voyage de Zéro à Héro aujourd'hui.</p>
                </div>

                <form className="auth-form">
                    <div className="input-group">
                        <label>Nom complet</label>
                        <div className="input-wrapper">
                            <input type="text" placeholder="Luckson premier" />
                            <User size={18} className="field-icon" />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Address Email</label>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                placeholder="exemple@gmail.com"
                            />
                            <Mail size={18} className="field-icon" />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Mot de passe</label>
                        <div className="input-wrapper">
                            <input type="password" placeholder="••••••••" />
                            <Lock size={18} className="field-icon" />
                        </div>
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
