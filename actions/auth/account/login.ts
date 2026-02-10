'use server';

import { prisma } from '@/lib/prisma';
import { UserLoginSchema } from '@/lib/cours-schema';

export type ActionResponse = {
    success: boolean;
    message?: string;
    user?: any;
    errors?: Record<string, string[]>;
};

export async function loginAction(data: unknown): Promise<ActionResponse> {
    try {
        const validated = UserLoginSchema.safeParse(data);

        if (!validated.success) {
            return {
                success: false,
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { email } = validated.data;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return {
                success: false,
                message: 'User not found',
            };
        }

        return {
            success: true,
            message: 'User logged in',
            user,
        };
    } catch (error) {
        console.error('Login Error:', error);
        return {
            success: false,
            message: 'Server error.',
        };
    }
}
