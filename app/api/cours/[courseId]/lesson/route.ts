'use server';

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { lessonApiSchema } from '@/lib/cours-schema';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validated = lessonApiSchema.safeParse(body);

        if (!validated.success) {
            return NextResponse.json(
                {
                    message: 'Données invalides',
                    errors: validated.error.flatten(),
                },
                { status: 400 },
            );
        }

        const { title, description, order, courseId, contents } =
            validated.data;

        const lesson = await prisma.lesson.create({
            data: {
                title,
                description,
                order: order,
                courseId,

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
        });

        return NextResponse.json(lesson, { status: 201 });
    } catch (error) {
        console.log('[LESSON_ERROR]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}

export async function GET(
    req: Request,
    { params }: { params: Promise<{ courseId: string }> },
) {
    try {
        const { courseId } = await params;

        const lessonData = await prisma.lesson.findMany({
            where: { courseId: courseId },
            orderBy: { order: 'asc' },
        });

        return NextResponse.json(lessonData);
    } catch (error) {
        console.error('Erreur Fetch:', error);

        return NextResponse.json(
            { error: 'Erreur lors de la récupération' },
            { status: 500 },
        );
    }
}
