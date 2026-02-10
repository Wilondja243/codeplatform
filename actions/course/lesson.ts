'use server';

import { prisma } from '@/lib/prisma';
import { lessonSchema } from '@/lib/cours-schema';
import { revalidatePath } from 'next/cache';

export async function createLessonAction({
    courseId,
    moduleId,
    data,
}: {
    courseId: string;
    moduleId: string;
    data: unknown;
}) {
    try {
        const validated = lessonSchema.safeParse(data);

        if (!validated.success) {
            return {
                success: false,
                message: 'Données invalides',
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { title, description, order, contents } = validated.data;

        const lesson = await prisma.lesson.create({
            data: {
                title,
                description,
                order,
                moduleId: moduleId,
                courseId: courseId,
                contents: {
                    createMany: {
                        data: contents.map((content: any, index: number) => ({
                            type: content.type,
                            value: content.value || '',
                            order: index + 1,
                        })),
                    },
                },
            },
            include: { contents: true },
        });

        revalidatePath(`/admin-1001/cours/${courseId}/lessons`, 'page');
        revalidatePath(`/admin-1001/cours/${courseId}/lessons`);

        return { success: true, data: lesson };
    } catch (error) {
        console.error('[CREATE_LESSON_ACTION_ERROR]', error);
        return {
            success: false,
            message: 'Erreur lors de la création de la leçon.',
        };
    }
}

export async function getLessonsByModuleAction({
    moduleId,
    courseId,
}: {
    moduleId: string;
    courseId: string;
}) {
    try {
        const lessons = await prisma.lesson.findMany({
            where: { moduleId, courseId },
            orderBy: { order: 'asc' },
            include: { contents: true },
        });

        return { success: true, data: lessons };
    } catch (error) {
        console.error('[GET_LESSONS_ACTION_ERROR]', error);
        return {
            success: false,
            message: 'Erreur lors de la récupération des leçons.',
        };
    }
}

export async function getLessonByIdAction({
    lessonId,
    moduleId,
    courseId,
}: {
    lessonId: string;
    moduleId: string;
    courseId: string;
}) {
    try {
        const lesson = await prisma.lesson.findFirst({
            where: {
                id: lessonId,
                moduleId: moduleId,
                courseId: courseId,
            },
            include: {
                contents: { orderBy: { order: 'asc' } },
            },
        });

        if (!lesson) {
            return { success: false, message: 'Leçon non trouvée' };
        }

        return { success: true, data: lesson };
    } catch (error) {
        console.error('[LESSON_GET_ACTION]', error);
        return { success: false, message: 'Erreur lors de la récupération.' };
    }
}

export async function updateLessonAction(
    courseId: string,
    moduleId: string,
    lessonId: string,
    data: unknown,
) {
    const validated = lessonSchema.safeParse(data);

    if (!validated.success) {
        return {
            success: false,
            errors: validated.error.flatten().fieldErrors,
        };
    }

    const { title, description, order, contents } = validated.data;

    try {
        const updatedLesson = await prisma.lesson.update({
            where: {
                id: lessonId,
                moduleId: moduleId,
                courseId: courseId,
            },
            data: {
                title,
                order,
                description,
                contents: {
                    deleteMany: {},
                    createMany: {
                        data: contents.map((content: any, index: number) => ({
                            type: content.type,
                            value: content.value || '',
                            order: index + 1,
                        })),
                    },
                },
            },
        });

        revalidatePath(`/admin-1001/cours/${courseId}`);
        revalidatePath(`/admin-1001/cours/${courseId}/lessons/${lessonId}`);

        return {
            success: true,
            data: updatedLesson,
        };
    } catch (error) {
        console.error('[LESSON_PATCH_ACTION_ERROR]', error);
        return {
            success: false,
            message: 'Erreur lors de la mise à jour.',
        };
    }
}
