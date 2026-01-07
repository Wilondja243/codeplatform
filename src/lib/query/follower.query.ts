import { useQuery, useMutation } from '@tanstack/react-query';
import { useUserToken } from '../store/user.token.store';
import { follower, follow, isFollowing, following } from '../services/follower.service';
import { AxiosError } from 'axios';

export function useFollowersQuery() {
    const userToken = useUserToken((state) => state.userToken);

    return useQuery({
        queryKey: ['followers', userToken],
        queryFn: async () => await follower(),
        enabled: !!userToken,
    });
}

export function useFollowQuery() {
    const mutation = useMutation({
        mutationFn: async (user_id: string) => await follow(user_id),

        onSuccess: async (data) => {
            console.log(`DATA: ${JSON.stringify(data, null, 4)}`);
        },
        onError: (error) => {
            const e = error as AxiosError;

            if (!e.response) {
                console.log(`Network Error: ${e.message}`);
                return;
            }

            console.log(`DATA: ${JSON.stringify(e?.response.data, null, 4)}`);
        },
    });

    return mutation;
}

export function useIsFollowingQuery(user_id: string) {
    const userToken = useUserToken((state) => state.userToken);

    return useQuery({
        queryKey: ['is-following', user_id],
        queryFn: () => isFollowing(user_id),
        enabled: !!userToken,
    });
}

export function useFollowingQuery() {
    const userToken = useUserToken((state) => state.userToken);

    return useQuery({
        queryKey: ['followers', userToken],
        queryFn: async () => await following(),
        enabled: !!userToken,
    });
}
