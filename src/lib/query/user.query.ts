import {
    useQuery,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query';
import { getUsers, getUser } from '../services/auth.service';
import { useUserToken } from '../store/user.token.store';

export function useUserMeQuery() {
    const userToken = useUserToken((state) => state.userToken);

    return useQuery({
        queryKey: ['userme', userToken],
        queryFn: async () => await getUser(),
        enabled: !!userToken,
    });
}

export function useUsersQuery() {
    const userToken = useUserToken((state) => state.userToken);

    return useQuery({
        queryKey: ['users', 'all'],
        queryFn: async () => await getUsers(),
        enabled: !!userToken,
    });
}
