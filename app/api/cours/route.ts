'use server';

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { coursSchema } from '@/lib/cours-schema';

export async function POST(req: Request) {
    const body = await req.json();
    const validation = coursSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(
            { details: validation.error.flatten().fieldErrors },
            { status: 400 },
        );
    }

    try {
        const course = await prisma.course.create({
            data: validation.data,
        });

        return NextResponse.json(course, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Ce slug est déjà utilisé par un autre cours.' },
            { status: 500 },
        );
    }
}

export async function GET() {
    try {
        const fetchData = await prisma.course.findMany({
            orderBy: { created_at: 'desc' },
        });

        return NextResponse.json(fetchData);
    } catch (error) {
        console.error('Erreur Fetch:', error);

        return NextResponse.json(
            { error: 'Erreur lors de la récupération' },
            { status: 500 },
        );
    }
}
