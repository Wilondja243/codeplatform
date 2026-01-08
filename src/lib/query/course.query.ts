import { useQuery } from '@tanstack/react-query';
import { course, feature, module } from '../services/course.service';


export function useCourseQuery() {
    return useQuery({
        queryKey: ['courses', 'all'],
        queryFn: async () => await course(),
    });
}

export function useFeatureQuery() {
    return useQuery({
        queryKey: ['features', 'all'],
        queryFn: async () => await feature(),
    });
}

export function useModuleQuery() {
    return useQuery({
        queryKey: ['modules', 'all'],
        queryFn: async () => await module(),
    });
}