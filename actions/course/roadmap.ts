'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { roadmapSchema } from '@/lib/cours-schema';

/*===== ROADMAP ACTIONS ======*/

export async function createRoadmapAction({
    courseId,
    data,
}: {
    courseId: string;
    data: unknown;
}) {
    const validated = roadmapSchema.safeParse(data);

    if (!validated.success) {
        return {
            success: false,
            errors: validated.error.flatten().fieldErrors,
        };
    }

    console.log('validate.data: ', validated.data);

    const { title, description, slug, steps } = validated.data;

    try {
        const roadmap = await prisma.roadmap.create({
            data: {
                title: title,
                description: description,
                slug: slug,
                steps: {
                    createMany: {
                        data: steps.map((step: any, index: number) => ({
                            order: index + 1,
                            title: step.title,
                            description: step.description,
                            icon: step.icon,
                            status: step.status,
                            topics: step.topics,
                            courseId: courseId,
                            moduleId: step.moduleId,
                        })),
                    },
                },
            },
        });

        revalidatePath('/admin-1001/cours');
        return { success: true, data: roadmap };
    } catch (error: any) {
        console.error('[CREATE_ROADMAP_ERROR]', error);

        if (error.code === 'P2002') {
            return {
                success: false,
                message: 'Slug or title already exist.',
            };
        }

        return {
            success: false,
            message: 'Une erreur technique est survenue.',
        };
    }
}

export async function updateRoadmapAction({
    courseId,
    roadmapId,
    data,
}: {
    courseId: string;
    roadmapId: string;
    data: unknown;
}) {
    const validated = roadmapSchema.safeParse(data);

    if (!validated.success) {
        return {
            success: false,
            errors: validated.error.flatten().fieldErrors,
        };
    }

    const { title, description, slug, steps } = validated.data;

    try {
        const roadmap = await prisma.roadmap.update({
            where: { id: roadmapId },
            data: {
                title,
                description,
                slug,
                steps: {
                    deleteMany: {},
                    createMany: {
                        data: steps.map((step: any, index: number) => ({
                            order: index + 1,
                            title: step.title,
                            description: step.description,
                            icon: step.icon,
                            status: step.status,
                            topics: step.topics,
                            courseId: courseId,
                            moduleId: step.moduleId,
                        })),
                    },
                },
            },
        });

        revalidatePath('/admin-1001/cours');
        return { success: true, data: roadmap };
    } catch (error: any) {
        console.error('[UPDATE_ROADMAP_ERROR]', error);

        if (error.code === 'P2002') {
            return {
                success: false,
                message: 'Roadmap not found.',
            };
        }

        return {
            success: false,
            message: 'Une erreur technique est survenue.',
        };
    }
}

export async function getRoadmapByIdAction({
    roadmapId,
}: {
    roadmapId: string;
}) {
    try {
        const module = await prisma.roadmap.findUnique({
            where: { id: roadmapId },
            include: { steps: true },
        });

        if (!module) {
            return { success: false, message: 'Roadmap not found' };
        }

        return { success: true, data: module };
    } catch (error) {
        console.error('[ROADMAP_GET_ACTION]', error);
        return { success: false, message: 'Erreur lors de la récupération.' };
    }
}

export async function getRoadmapByCourseId({ courseId }: { courseId: string }) {
    try {
        const roadmap = await prisma.roadmap.findFirst({
            where: {
                steps: {
                    some: { courseId: courseId },
                },
            },
            include: {
                steps: {
                    orderBy: { order: 'asc' },
                    include: {
                        module: true,
                    },
                },
            },
        });

        return {
            success: true,
            data: roadmap,
        };
    } catch (error) {
        return {
            success: false,
            message: 'Error to fetch roadmap data.',
        };
    }
}
