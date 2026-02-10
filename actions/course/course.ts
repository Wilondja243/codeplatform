'use server';

import { prisma } from '@/lib/prisma';
import { coursSchema, moduleSchema } from '@/lib/cours-schema';
import { revalidatePath } from 'next/cache';

/*===== COURSE ACTIONS ======*/

export async function createCourseAction(data: unknown) {
    const validation = coursSchema.safeParse(data);

    if (!validation.success) {
        return {
            success: false,
            errors: validation.error.flatten().fieldErrors,
        };
    }

    try {
        const course = await prisma.course.create({
            data: validation.data,
        });

        revalidatePath('/');
        revalidatePath('/explore');

        return { success: true, data: course };
    } catch (error: any) {
        const message =
            error.code === 'P2002'
                ? 'Ce slug est déjà utilisé par un autre cours.'
                : 'Une erreur est survenue lors de la création.';

        return { success: false, message };
    }
}

export async function getCoursesAction() {
    try {
        const courses = await prisma.course.findMany({
            orderBy: { created_at: 'desc' },
            include: {
                modules: { orderBy: { createdAt: 'desc' } },
            },
        });

        return {
            success: true,
            data: courses,
        };
    } catch (error) {
        console.error('Erreur Fetch:', error);
        return {
            success: false,
            message: 'Erreur lors de la récupération',
        };
    }
}

export async function updateCourseAction(courseId: string, data: unknown) {
    try {
        const validated = coursSchema.safeParse(data);

        if (!validated.success) {
            return {
                success: false,
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const updatedCourse = await prisma.course.update({
            where: { id: courseId },
            data: validated.data,
        });

        revalidatePath(`/admin-1001/cours`);
        revalidatePath(`/admin-1001/cours/${courseId}`);

        return { success: true, data: updatedCourse };
    } catch (error: any) {
        console.error('[COURSE_PATCH_ACTION]', error);
        return {
            success: false,
            message: 'Erreur lors de la mise à jour.',
        };
    }
}

export async function getCourseByIdAction(courseId: string) {
    try {
        const course = await prisma.course.findUnique({
            where: { id: courseId },
        });

        if (!course) {
            return { success: false, message: 'Cours non trouvé' };
        }

        return { success: true, data: course };
    } catch (error) {
        console.error('[COURSE_GET_ACTION]', error);
        return { success: false, message: 'Erreur lors de la récupération.' };
    }
}

/*===== MODULES ACTIONS ======*/

export async function createModuleAction(courseId: string, data: unknown) {
    const validated = moduleSchema.safeParse(data);

    if (!validated.success) {
        return {
            success: false,
            errors: validated.error.flatten().fieldErrors,
        };
    }

    try {
        const course = await prisma.module.create({
            data: {
                ...validated.data,
                courseId: courseId,
            },
        });

        revalidatePath('/admin-1001/cours');
        revalidatePath('/explore');

        return { success: true, data: course };
    } catch (error: any) {
        if (error.code === 'P2002') {
            return {
                success: false,
                message: 'Une erreur est survenue lors de la création.',
            };
        }
    }
}

export async function getModulesAction() {
    try {
        const modules = await prisma.module.findMany({
            orderBy: { createdAt: 'desc' },
        });

        return {
            success: true,
            data: modules,
        };
    } catch (error) {
        console.error('Erreur Fetch:', error);
        return {
            success: false,
            message: 'Erreur lors de la récupération',
        };
    }
}

export async function updateModuleAction(
    moduleId: string,
    courseId: string,
    data: unknown,
) {
    try {
        const validated = moduleSchema.safeParse(data);

        if (!validated.success) {
            return {
                success: false,
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const updatedModule = await prisma.module.update({
            where: { id: moduleId, courseId: courseId },
            data: validated.data,
        });

        revalidatePath(`/admin-1001/cours`);
        revalidatePath(`/admin-1001/cours/${courseId}`);

        return { success: true, data: updatedModule };
    } catch (error: any) {
        console.error('[COURSE_PATCH_ACTION]', error);
        return {
            success: false,
            message: 'Erreur lors de la mise à jour.',
        };
    }
}

export async function getModuleByIdAction({ courseId }: { courseId: string }) {
    try {
        const modules = await prisma.module.findMany({
            where: { courseId: courseId },
        });

        if (!modules || modules.length === 0) {
            return {
                success: true,
                data: [],
                message: 'Aucun module trouvé pour ce cours.',
            };
        }

        return { success: true, data: modules };
    } catch (error) {
        console.error('[MODULE_GET_ACTION]', error);
        return { success: false, message: 'Erreur lors de la récupération.' };
    }
}

export async function deleteModuleAction({
    moduleId,
    courseId,
}: {
    moduleId: string;
    courseId: string;
}) {
    try {
        const module = await prisma.module.deleteMany({
            where: { id: moduleId, courseId: courseId },
        });

        if (!module) {
            return { success: false, message: 'Module not found' };
        }

        revalidatePath('/admin-1001/cours');

        return { success: true, data: module };
    } catch (error) {
        console.error('[MODULE_DELETE_ACTION]', error);
        return { success: false, message: 'Erreur lors de la suppression.' };
    }
}
