'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CoursFormValues, coursSchema } from '@/lib/cours-schema';

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
                  lesson: initialData.lesson || 0,
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
            lesson: 0,
            note: 0,
            rating: 0,
        },
    });

    return form;
};
