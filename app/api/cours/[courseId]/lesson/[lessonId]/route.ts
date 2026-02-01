'use server';

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { coursSchema, lessonSchema } from '@/lib/cours-schema';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ courseId: string; lessonId: string }> },
) {
    try {
        const { courseId, lessonId } = await params;

        const retrieveLesson = await prisma.lesson.findUnique({
            where: { id: lessonId, courseId: courseId },
            include: {
                contents: { orderBy: { order: 'asc' } },
            },
        });

        if (!retrieveLesson) {
            return NextResponse.json(
                { error: 'Cours non trouvé' },
                { status: 404 },
            );
        }

        return NextResponse.json(retrieveLesson);
    } catch (error) {
        console.error('[LESSON_GET]', error);
        return NextResponse.json(
            { error: 'Erreur lors de la récupération.' },
            { status: 500 },
        );
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ courseId: string; lessonId: string }> },
) {
    try {
        const { courseId, lessonId } = await params;
        const body = await req.json();
        const validated = lessonSchema.safeParse(body);

        if (!validated.success) {
            return NextResponse.json(
                { details: validated.error.flatten().fieldErrors },
                { status: 400 },
            );
        }

        const { title, description, order, contents } = validated.data;

        const updatedLesson = await prisma.lesson.update({
            where: { id: lessonId, courseId: courseId },
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

        return NextResponse.json(updatedLesson);
    } catch (error: any) {
        console.error('[LESSON_PATCH_ERROR]', error);
        return NextResponse.json(
            { error: 'Erreur lors de la mise à jour.' },
            { status: 400 },
        );
    }
}
