
import { useMutation } from '@tanstack/react-query';
import { useUserToken } from '../store/user.token.store';
import { login } from '../services/auth.service';
import { AxiosError } from 'axios';

type LoginValidationProps = {
    setIdentifier: (v: string) => void;
    setPassword: (v: string) => void;
    setIsErrorVisible: (v: boolean) => void;
};

export default function useLoginQuery({
    setIdentifier,
    setPassword,
    setIsErrorVisible,
}: LoginValidationProps) {
    const setUserToken = useUserToken((state) => state.setUserToken);

    const mutation = useMutation({
        mutationFn: async (data: any) => await login(data),
        onSuccess: async (data) => {
            console.log('data: ', data);
            // setUserToken(data?.token);

            setIdentifier('');
            setPassword('');
        },
        onError: (error) => {
            const e = error as AxiosError<any>;

            if (!e.response) {
                console.log('Network Error', e.message);

                setIsErrorVisible(true);
                return;
            }

            const { status, data } = e?.response;

            console.log('response_message', data?.response_message);

            if (status === 400 && data?.response_message) {
                const msg = Object.values(data.response_message)
                    .flat()
                    .map((err: any) => err.message || err);

                console.log(`response_message: ${msg}`);
                setIsErrorVisible(true);
                // setErrorMessage(msg[0]);
            }

            console.log(`DATA: ${JSON.stringify(e.response.data, null, 4)}`);
        },
    });

    return mutation;
}
