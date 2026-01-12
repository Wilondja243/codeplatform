import { useState } from 'react';

type ContactProps = {
    title: string;
    email: string;
    description: string;
};

type LoginPartialProps = Partial<ContactProps>;

export default function useContactValidation() {
    const [errors, setErrors] = useState<LoginPartialProps>({});

    const handleSubmit = ({ title, email, description }: ContactProps) => {
        const newErrors: typeof errors = {};
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!title) {
            newErrors.title = 'Le champ titre est réquis.';
        }

        if (!email) {
            newErrors.email = 'Le champ email est réquis.';
        } else if (!re.test(email)) {
            newErrors.email = "L'adresse email n'est pas valide.";
        }

        if (!description) {
            newErrors.description = 'Le champ mot de passe est réquis.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {
        errors,
        handleSubmit,
    };
}
