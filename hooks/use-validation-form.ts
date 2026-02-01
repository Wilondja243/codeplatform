'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    CoursFormValues,
    coursSchema,
    LessonFormValues,
    lessonSchema,
} from '@/lib/cours-schema';

export const useValidateCourseForm = (
    initialData?: Partial<CoursFormValues>,
) => {
    const form = useForm<CoursFormValues>({
        resolver: zodResolver(coursSchema),
        values: initialData
            ? {
                  title: initialData.title || '',
                  description: initialData.description || '',
                  slug: initialData.slug || '',
                  lesson_count: initialData.lesson_count || 0,
                  note: initialData.note || 0,
                  tag: initialData.tag || '',
                  duration: initialData.duration || '',
                  rating: initialData.rating || 0,
                  icon: initialData.icon || '',
                  color: initialData.color || '#2563eb',
              }
            : undefined,
        defaultValues: {
            title: '',
            description: '',
            slug: '',
            lesson_count: 0,
            note: 0,
            rating: 0,
        },
    });

    return form;
};

// Lesson form validation
export const useValidateLessonForm = (
    initialData?: Partial<LessonFormValues>,
) => {
    const form = useForm<LessonFormValues>({
        resolver: zodResolver(lessonSchema),
        mode: 'all',
        values: {
            title: initialData?.title || '',
            description: initialData?.description || '',
            order: initialData?.order || 1,
            contents: (initialData?.contents as any) || [],
        },
    });

    return form;
};
