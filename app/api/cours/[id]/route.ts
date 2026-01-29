'use server';

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { coursSchema } from '@/lib/cours-schema';

export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string } },
) {
    const body = req.json();
    const validated = coursSchema.safeParse(body);

    if (!validated.success) {
        return NextResponse.json(
            { details: validated.error.flatten().fieldErrors },
            { status: 400 },
        );
    }

    try {
        const updatedCourse = await prisma.course.update({
            where: { id: params.courseId },
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
