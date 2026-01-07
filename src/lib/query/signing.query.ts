import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { register } from '../services/auth.service';
import { useUserToken } from '../store/user.token.store';
// import { useErrorHandler } from '@/hooks/use-error-handler';

type SingUpValidationProps = {
    setUsername: (v: string) => void;
    setEmail: (v: string) => void;
    setPassword: (v: string) => void;
    setPassword2: (v: string) => void;
    setVisible: (v: boolean) => void;
};

export default function useSigninQuery({
    setUsername,
    setEmail,
    setPassword,
    setPassword2,
    setVisible,
}: SingUpValidationProps) {
    const setUserToken = useUserToken((state) => state.setUserToken);
    // const { handleError } = useErrorHandler();

    const mutation = useMutation({
        mutationFn: async (data: any) => await register(data),

        onSuccess: async (data) => {
            setUserToken(data?.token);

            setUsername('');
            setEmail('');
            setPassword('');
            setPassword2('');
        },
        onError: (error) => {
            const e = error as AxiosError;

            if (!e.response) {
                console.log('Network Error', e.message);

                setVisible(true);
                return;
            }

            // handleError(e);
        },
    });

    return mutation;
}
