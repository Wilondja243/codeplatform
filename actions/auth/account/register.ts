'use server';

import { prisma } from '@/lib/prisma';
import { UserRegisterSchema } from '@/lib/cours-schema';

export async function registerAction(data: unknown) {
    try {
        const validated = UserRegisterSchema.safeParse(data);

        if (!validated.success) {
            return {
                success: false,
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { name, email, is_active } = validated.data;

        const user = await prisma.user.create({
            data: {
                name,
                email,
                is_active,
            },
        });

        return {
            success: true,
            user,
        };
    } catch (error: any) {
        if (error.code === 'P2002') {
            return {
                success: false,
                message: 'Cet email est déjà utilisé.',
            };
        }

        console.error('Register Error:', error);
        return {
            success: false,
            message: 'Une erreur serveur est survenue.',
        };
    }
}
