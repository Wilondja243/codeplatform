'use server';

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { coursSchema } from '@/lib/cours-schema';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ courseId: string }> },
) {
    const { courseId } = await params;

    try {
        const retrieveCourse = await prisma.course.findUnique({
            where: { id: courseId },
        });

        if (!retrieveCourse) {
            return NextResponse.json(
                { error: 'Cours non trouvé' },
                { status: 404 },
            );
        }

        return NextResponse.json(retrieveCourse);
    } catch (error) {
        console.error('[COURSE_GET]', error);
        return NextResponse.json(
            { error: 'Erreur lors de la récupération.' },
            { status: 500 },
        );
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ courseId: string }> },
) {
    const body = await req.json();
    const validated = coursSchema.safeParse(body);
    const { courseId } = await params;

    if (!validated.success) {
        return NextResponse.json(
            { details: validated.error.flatten().fieldErrors },
            { status: 400 },
        );
    }

    try {
        const updatedCourse = await prisma.course.update({
            where: { id: courseId },
            data: validated.data,
        });

        return NextResponse.json(updatedCourse);
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Erreur lors de la mise à jour.' },
            { status: 400 },
        );
    }
}
