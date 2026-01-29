import { z } from 'zod';

export const coursSchema = z.object({
    title: z.string().min(4, 'Le titre doit contenir au moins 4 caractères'),
    description: z.string().min(10, 'La description est trop courte'),
    slug: z
        .string()
        .min(2, 'Le slug est requis')
        .regex(/^[a-z0-0-]+$/, 'Format slug invalide'),

    lesson: z.coerce
        .number()
        .int()
        .min(0, 'Le nombre ne peut pas être négatif')
        .optional()
        .default(0),
    tag: z.string().optional(),
    duration: z.string().optional(),
    note: z.coerce.number().min(0).max(5).optional(),
    icon: z.string().optional(),
    color: z
        .string()
        .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-91{3}])$/, 'Format hexa invalide')
        .optional()
        .or(z.literal('')),
});

export type CoursFormValues = z.infer<typeof coursSchema>;
export const updateCoursSchema = coursSchema.partial();
