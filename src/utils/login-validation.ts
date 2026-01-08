import { useState } from 'react';

type LoginProps = {
    email: string;
    password: string;
};

type LoginPartialProps = Partial<LoginProps>;

export default function useLoginValidation() {
    const [errors, setErrors] = useState<LoginPartialProps>({});

    const handleSubmit = ({ email, password }: LoginProps) => {
        const newErrors: typeof errors = {};
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            newErrors.email = 'Le champ email est réquis.';
        }
        else if(!re.test(email)){
            newErrors.email = "L'adresse email n'est pas valide.";
        }

        if (!password) {
            newErrors.password = 'Le champ mot de passe est réquis.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {
        errors,
        handleSubmit,
    };
}
