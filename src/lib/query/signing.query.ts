import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { register } from '../services/auth.service';
import { useUserToken } from '../store/user.token.store';
import useNotification from '../../hooks/use-taost-notification';
// import { useErrorHandler } from '@/hooks/use-error-handler';


export default function useSigninQuery() {
    const { notifyError } = useNotification();
    const setUserToken = useUserToken((state) => state.setUserToken);
    // const { handleError } = useErrorHandler();

    const mutation = useMutation({
        mutationFn: async (data: any) => await register(data),

        onSuccess: async (data) => {
            setUserToken(data?.token);
        },
        onError: (error) => {
    const e = error as AxiosError<any>;

    if (!e.response) {
        console.log('Network Error', e.message);
        return;
    }

    const { status, data } = e.response;

    console.log('DATA:', JSON.stringify(data, null, 4));

    if (status === 400) {
        const msg = Object.values(data)
            .flat()
            .map((err: any) => {
                if (typeof err === 'string') return err;
                return err?.message || err;
            });

        if (msg.length > 0) {
            notifyError(msg[0]); // le premier message d'erreur
        } else {
            notifyError("Une erreur de validation est survenue.");
        }

        console.log(`response_message: ${msg}`);
    }
},

    });

    return mutation;
}
