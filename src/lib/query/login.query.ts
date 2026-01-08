import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useUserToken } from '../store/user.token.store';
import { login } from '../services/auth.service';
import { LoginRequest } from '../services/auth.service';
import useNotification from '../../hooks/use-taost-notification';


export default function useLoginQuery() {
    const setUserToken = useUserToken((state) => state.setUserToken);
    const { notifyError } = useNotification();

    const mutation = useMutation({
        mutationFn: async (data: LoginRequest) => await login(data),
        onSuccess: async (data: any) => {

            console.log('data: ', data);
            setUserToken(data?.token);
        },
        onError: (error) => {
            const e = error as AxiosError<any>;

            if (!e.response) {
                console.log('Network Error', e.message);
                return;
            }

            const { status, data } = e?.response;

            console.log('response_message', data?.response_message);

            if (status === 400 && data?.response_message) {
                const msg = Object.values(data.response_message)
                    .flat()
                    .map((err: any) => {
                        if(typeof err === 'string') return err;
                        return err?.message || err;
                    });

                if(msg.length > 0){
                    notifyError(msg[0]);
                }else{
                    notifyError("Une erreur de validation est survenue.");
                }

                console.log(`response_message: ${msg}`);
                
            }

            console.log(`DATA: ${JSON.stringify(e.response.data, null, 4)}`);
        },
    });

    return mutation;
}
