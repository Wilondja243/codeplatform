import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery
} from '@tanstack/react-query';
import {
    post,
    create_post,
    retrieve_post,
    comment_create,
    comment_list,
    post_like_create
} from '../services/post.service';
import { useRouter } from 'expo-router';
import { AxiosError } from 'axios';

import { useUserToken } from '../store/user.token.store';
import { useErrorHandler } from '@/hooks/use-error-handler';


export function usePostQuery() {
    const userToken = useUserToken((state) => state.userToken);

    return useQuery({
        queryKey: ['post', 'all'],
        queryFn: async () => await post(),
        enabled: !!userToken,
    });
}

export function useRetrievePostQuery(post_id: string){
    const userToken = useUserToken((state) => state.userToken);

    return useQuery({
        queryKey: ['user_post', post_id],
        queryFn: async () => await retrieve_post(post_id),
        enabled: !!userToken,
        staleTime: 0,
        cacheTime: 0,
    })
}

export function usePostCreateQuery() {
    const router = useRouter();
    const { handleError } = useErrorHandler();

    return useMutation({
        mutationFn: async (data: any) => await create_post(data),
        onSuccess: async (data) => {
            console.log('data: ', data);
            router.replace('/(tabs)');
        },
        onError: (error) => {
            const e = error as AxiosError;
            handleError(e);
        },
    });
}

export function usePostLikeCreateQuery() {
    const { handleError } = useErrorHandler();

    return useMutation({
        mutationFn: async (post_id: string) => await post_like_create(post_id),
        onSuccess: async (data) => {
            console.log('data: ', data);
        },
        onError: (error) => {
            const e = error as AxiosError;
            handleError(e);
        },
    });
}


// Comment query
export function useCommentCreateQuery(post_id: string) {
    const { handleError } = useErrorHandler();

    return useMutation({
        mutationFn: async (content: string) => await comment_create(post_id, content),
        onSuccess: async (data) => {
            console.log('data: ', data);
        },
        onError: (error) => {
            const e = error as AxiosError;
            handleError(e);
        },
    });
}

export function useListCommentQuery(post_id: string){
    const userToken = useUserToken((state) => state.userToken);

    return useQuery({
        queryKey: ['comment', post_id],
        queryFn: async () => await comment_list(post_id),
        enabled: !!userToken,
        staleTime: 0,
        cacheTime: 0,
    })
}