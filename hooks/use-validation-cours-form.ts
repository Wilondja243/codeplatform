'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CoursFormValues, coursSchema } from '@/lib/cours-schema';

export const useValidateCourseForm = (
    defaultValues?: Partial<CoursFormValues>,
) => {
    const form = useForm<CoursFormValues>({
        resolver: zodResolver(coursSchema),
        defaultValues: {
            title: '',
            description: '',
            slug: '',
            lesson: 0,
            note: 0,
            ...defaultValues,
        },
    });

    return form;
};
