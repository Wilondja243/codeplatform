import { useSession } from 'next-auth/react';
import { useUserQuery } from '@/lib/query/user.query';
import useNotification from './use-taost';

export default function useUser() {
    const { data: session, status } = useSession();
    const { notifyError } = useNotification();
    const userId = session?.user?.id;
    const { data, isLoading, error, isError } = useUserQuery(userId as string);

    if (isError) {
        notifyError(error.message);
    }

    return {
        data,
        isLoading,
    };
}
