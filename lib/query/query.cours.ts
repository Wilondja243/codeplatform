'use client';

import { useQuery } from '@tanstack/react-query';
import { getCourses } from '../services/services.cours';

export function useCoursesQuery() {
    return useQuery({
        queryKey: ['courses'],
        queryFn: () => getCourses(),
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,
        staleTime: 1000 * 60 * 5,
    });
}
