'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getCourses,
    retrieveCourse,
    createCourse,
    patchCourse,
    createLesson,
    getLessons,
    retrieveLesson,
    patchLesson,
} from '../services/services.cours';
import { CoursFormValues, LessonFormValues } from '../cours-schema';

// get all courses
export function useCoursesQuery() {
    return useQuery({
        queryKey: ['courses'],
        queryFn: () => getCourses(),
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,
        staleTime: 0,
        gcTime: 0,
    });
}

// retrieve course
export function useRetrieveCourseQuery(courseId: string) {
    return useQuery({
        queryKey: ['course'],
        queryFn: () => retrieveCourse(courseId),
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,
        staleTime: 0,
        gcTime: 0,
        enabled: !!courseId,
    });
}

// post course
export function usePostCourseQuery() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CoursFormValues) => createCourse(data),
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['courses'] });
        },
    });
}

// update course
export function usePatchCourseQuery() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: patchCourse,
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['courses'] });
        },
    });
}

// Lesson query
export function useCreateLessonQuery(courseId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: LessonFormValues) => createLesson(courseId, data),
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons'] });
        },
    });
}

// get all lessons
export function useLessonsQuery(courseId: string) {
    return useQuery({
        queryKey: ['lessons'],
        queryFn: () => getLessons(courseId),
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,
        staleTime: 0,
        gcTime: 0,
    });
}

// retrieve lesson
export function useRetrieveLessonQuery(courseId: string, lessonId: string) {
    return useQuery({
        queryKey: ['lesson'],
        queryFn: () => retrieveLesson(courseId, lessonId),
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,
        staleTime: 0,
        gcTime: 0,
        enabled: !!lessonId,
    });
}

// update lesson
export function usePatchLessonQuery() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: patchLesson,
        retry: 3,
        retryDelay: (attempt) => attempt * 1000,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lessons'] });
        },
    });
}
