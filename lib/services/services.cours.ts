import { apiClient } from '../client/api-client';
import { CoursFormValues, LessonFormValues } from '../cours-schema';
import { Course, Lesson } from '@/app/generated/prisma';

export const getCourses = async () => {
    const { data } = await apiClient.get(`/cours`);
    return data;
};

export const retrieveCourse = async (courseId: string) => {
    const { data } = await apiClient.get(`/cours/${courseId}`);
    return data;
};

export const createCourse = async (data: CoursFormValues) => {
    const response = await apiClient.post(`/cours`, data);
    return response.data;
};

export const patchCourse = async ({
    courseId,
    data,
}: {
    courseId: string;
    data: Partial<Course>;
}) => {
    const response = await apiClient.patch(`/cours/${courseId}`, data);
    return response.data;
};

// Lesson services
export const createLesson = async (
    courseId: string,
    data: LessonFormValues,
) => {
    const response = await apiClient.post(`/cours/${courseId}/lesson`, data);
    return response.data;
};

// get all lessons
export const getLessons = async (courseId: string) => {
    const { data } = await apiClient.get(`/cours/${courseId}/lesson`);
    return data;
};

// retrieve lesson
export const retrieveLesson = async (courseId: string, lessonId: string) => {
    const { data } = await apiClient.get(
        `/cours/${courseId}/lesson/${lessonId}`,
    );
    return data;
};

export const patchLesson = async ({
    courseId,
    lessonId,
    data,
}: {
    courseId: string;
    lessonId: string;
    data: Partial<Lesson>;
}) => {
    const response = await apiClient.patch(
        `/cours/${courseId}/lesson/${lessonId}`,
        data,
    );
    return response.data;
};
