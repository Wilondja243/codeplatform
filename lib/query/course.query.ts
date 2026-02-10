'use client';

import { useQuery } from '@tanstack/react-query';
import {
    getCoursesAction,
    getModulesAction,
    getModuleByIdAction,
} from '@/actions/course/course';
import {
    getLessonsByModuleAction,
    getLessonByIdAction,
} from '@/actions/course/lesson';

export function useCoursesQuery() {
    return useQuery({
        queryKey: ['courses'],
        queryFn: () => getCoursesAction(),
        retry: 3,
        staleTime: 100 * 60 * 5,
    });
}

/*====== LESSON QUERY =======*/

export function useLessonsByModuleQuery({
    moduleId,
    courseId,
}: {
    moduleId: string;
    courseId: string;
}) {
    return useQuery({
        queryKey: ['lessons'],
        queryFn: () => getLessonsByModuleAction({ moduleId, courseId }),
        enabled: !!moduleId,
        retry: 3,
        staleTime: 100 * 60 * 5,
    });
}

export function useLessonQuery({
    courseId,
    moduleId,
    lessonId,
}: {
    courseId: string;
    moduleId: string;
    lessonId: string;
}) {
    return useQuery({
        queryKey: ['lesson'],
        queryFn: () => getLessonByIdAction({ courseId, moduleId, lessonId }),
        enabled: !!moduleId && !!lessonId,
        retry: 3,
        staleTime: 100 * 60 * 5,
    });
}

/*====== MODULE QUERY =======*/

export function useModulesQuery({ courseId }: { courseId: string }) {
    return useQuery({
        queryKey: ['modules'],
        queryFn: () => getModuleByIdAction({ courseId }),
        retry: 3,
        staleTime: 100 * 60 * 5,
    });
}

// export function useModulesQuery({courseId}:{courseId: string}) {
//     return useQuery({
//         queryKey: ['modules'],
//         queryFn: () => getModuleByIdAction({courseId}),
//         retry: 3,
//         staleTime: 100 * 60 * 5,
//     });
// }
