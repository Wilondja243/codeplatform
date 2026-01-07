import { useState } from 'react';

type LoginProps = {
    identifier: string;
    password: string;
};

type LoginPartialProps = Partial<LoginProps>;

export default function useLoginValidation() {
    const [errors, setErrors] = useState<LoginPartialProps>({});

    const handleSubmit = ({ identifier, password }: LoginProps) => {
        const newErrors: typeof errors = {};

        if (!identifier) {
            newErrors.identifier = 'Le champ nom ou email est réquis.';
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
