import { useState } from 'react';

export type SigninProps = {
    username: string;
    email: string;
    password: string;
    // acceptTerm: boolean;
    setOnBlur?: () => void;
};

export function useSigninValidation() {
    const [errors, setErrors] = useState<{
        username?: string;
        email?: string;
        password?: string;
        // acceptTerm?: string;
    }>({});

    const handleSubmit = ({
        username,
        email,
        password,
        // acceptTerm,
    }: SigninProps) => {
        const newErrors: typeof errors = {};

        if (!username) {
            newErrors.username = "Nom d'utilisateur requis.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            newErrors.email = 'Le champ email est requis.';
        } else if (!emailRegex.test(email)) {
            newErrors.email = "L'adresse email est invalide.";
        }

        if (!password) {
            newErrors.password = 'Le champ mot de passe est requis.';
        } else if (password.length < 8) {
            newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères.';
        }

        // if (!password2) {
        //     newErrors.password2 = 'Confirmation du mot de passe requise.';
        // } 
        // else if (password !== password2) {
        //     newErrors.password2 = 'Les mots de passe ne correspondent pas.';
        // }

        // if (!acceptTerm) {
        //     newErrors.acceptTerm = 'Vous devez accepter les conditions.';
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {
        errors,
        handleSubmit,
    };
}
