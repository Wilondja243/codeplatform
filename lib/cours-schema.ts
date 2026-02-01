import { z } from 'zod';

export const coursSchema = z.object({
    title: z.string().min(4, 'Le titre doit contenir au moins 4 caractères'),
    description: z.string().min(10, 'La description est trop courte'),
    slug: z
        .string()
        .min(2, 'Le slug est requis')
        .regex(/^[a-z0-0-]+$/, 'Format slug invalide'),

    lesson_count: z.coerce
        .number()
        .int()
        .min(0, 'Le nombre ne peut pas être négatif')
        .optional()
        .default(0),
    tag: z.string().optional(),
    duration: z.string().optional(),
    rating: z.coerce.number().min(0).max(5).optional(),
    note: z.coerce.number().min(0).optional(),
    icon: z.string().optional(),
    color: z
        .string()
        .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-91{3}])$/, 'Format hexa invalide')
        .optional()
        .or(z.literal('')),
});

export type CoursFormValues = z.infer<typeof coursSchema>;
export const updateCoursSchema = coursSchema.partial();

// Lesson schema
export const lessonSchema = z.object({
    title: z
        .string()
        .min(5, 'Le titre doit contenir au moins 5 caractères')
        .max(100, 'Le titre est trop long'),

    order: z.coerce.number().min(1, "L'ordre doit être au moins 1"),
    description: z
        .string()
        .min(10, 'La description est trop courte')
        .optional()
        .or(z.literal('')),

    contents: z
        .array(
            z.object({
                type: z.enum([
                    'PARAGRAPH',
                    'SECTION_TITLE',
                    'COMMAND',
                    'IMAGE',
                    'LINK',
                    'LIST_ITEM',
                ]),
                value: z.string().optional().or(z.literal('')),
                order: z.number(),
            }),
        )
        .min(1, 'Vous devez ajouter au moins un bloc de contenu'),
});

export const lessonApiSchema = lessonSchema.extend({
    courseId: z.string().min(1, "L'ID du cours est requis"),
});

export type LessonFormValues = z.infer<typeof lessonSchema>;
