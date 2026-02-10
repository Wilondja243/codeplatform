'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    AdminRegisterSchema,
    AdminRegisterInput,
    AdminLoginSchema,
    AdminLoginInput,
    CoursFormValues,
    coursSchema,
    LessonFormValues,
    lessonSchema,
    UserLoginInput,
    UserLoginSchema,
    UserRegisterInput,
    UserRegisterSchema,
    ModuleFormSchema,
    moduleSchema,
    RoadmapFormSchema,
    roadmapSchema,
} from '@/lib/cours-schema';

/*====== ADMIN AUTH VALIDATION =======*/

export const useAdminRegisterValidationForm = () => {
    const form = useForm<AdminRegisterInput>({
        resolver: zodResolver(AdminRegisterSchema),
    });

    return form;
};

export const useAdminAuthValidationForm = () => {
    const form = useForm<AdminLoginInput>({
        resolver: zodResolver(AdminLoginSchema),
    });

    return form;
};

export const useUserRegisterValidationForm = () => {
    const form = useForm<UserRegisterInput>({
        resolver: zodResolver(UserRegisterSchema),
    });

    return form;
};

export const useUserLoginValidationForm = () => {
    const form = useForm<UserLoginInput>({
        resolver: zodResolver(UserLoginSchema),
    });

    return form;
};

/*====== COURSE VALIDATION =======*/

export const useValidateCourseForm = (
    initialData?: Partial<CoursFormValues>,
) => {
    const form = useForm<CoursFormValues>({
        resolver: zodResolver(coursSchema),
        values: {
            title: initialData?.title || '',
            description: initialData?.description || '',
            slug: initialData?.slug || '',
            lesson_count: initialData?.lesson_count || 0,
            note: initialData?.note || 0,
            tag: initialData?.tag || '',
            duration: initialData?.duration || '',
            rating: initialData?.rating || 0,
            icon: initialData?.icon || '',
            color: initialData?.color || '#2563eb',
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

/*===== MODULE FORM ======*/

export const useValidateModuleForm = (
    initialData?: Partial<ModuleFormSchema>,
) => {
    const form = useForm<ModuleFormSchema>({
        resolver: zodResolver(moduleSchema),
        mode: 'all',
        values: {
            title: initialData?.title || '',
            description: initialData?.description || '',
        },
    });

    return form;
};

export const useValidateRoadmapForm = (
    initialData?: Partial<RoadmapFormSchema>,
) => {
    const form = useForm({
        resolver: zodResolver(roadmapSchema),
        values: {
            title: initialData?.title || '',
            description: initialData?.description || '',
            slug: initialData?.slug || '',
            steps: (initialData?.steps as any) || [],
        },
    });

    return form;
};
