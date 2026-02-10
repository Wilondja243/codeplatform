'use client';

import { useQuery } from '@tanstack/react-query';
import {
    getRoadmapByIdAction,
    getRoadmapByCourseId,
} from '@/actions/course/roadmap';

export function useRoadmapByIdQuery({ roadmapId }: { roadmapId: string }) {
    return useQuery({
        queryKey: ['roadmapSteps', roadmapId],
        queryFn: () => getRoadmapByIdAction({ roadmapId: String(roadmapId) }),
        retry: 3,
        staleTime: 100 * 60 * 5,
    });
}

export function useRoadmapByCourseQuery({ courseId }: { courseId: string }) {
    return useQuery({
        queryKey: ['roadmapStepsCourse', courseId],
        queryFn: () => getRoadmapByCourseId({ courseId: String(courseId) }),
        retry: 3,
        staleTime: 100 * 60 * 5,
    });
}
