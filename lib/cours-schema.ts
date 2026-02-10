import { z } from 'zod';

/*====== AUTH SCHEMA =======*/

export const RoleEnum = z.enum(['USER', 'ADMIN']);

export const AdminRegisterSchema = z.object({
    name: z
        .string()
        .min(2, 'Le nom est trop court')
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Le nom ne doit contenir que des lettres'),
    email: z
        .string()
        .email("Format d'email invalide")
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "L'email contient des caractères non autorisés",
        ),
    password: z
        .string()
        .min(8, 'Mot de passe trop court')
        .regex(/[A-Z]/, 'Au moins une majuscule')
        .regex(/[0-9]/, 'Au moins un chiffre'),
    role: RoleEnum.default('USER'),
    is_active: z.boolean().default(true),
});
export type AdminRegisterInput = z.infer<typeof AdminRegisterSchema>;

export const AdminLoginSchema = z.object({
    email: z
        .string()
        .email("Format d'email invalide")
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "L'email contient des caractères non autorisés",
        ),
    password: z
        .string()
        .min(8, 'Mot de passe trop court')
        .regex(/[A-Z]/, 'Au moins une majuscule')
        .regex(/[0-9]/, 'Au moins un chiffre'),
});
export type AdminLoginInput = z.infer<typeof AdminLoginSchema>;

export const UserRegisterSchema = z.object({
    name: z
        .string()
        .min(2, 'Le nom est trop court')
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Le nom ne doit contenir que des lettres'),
    email: z
        .string()
        .email("Format d'email invalide")
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "L'email contient des caractères non autorisés",
        ),
    is_active: z.boolean().default(true),
});
export type UserRegisterInput = z.infer<typeof UserRegisterSchema>;

export const UserLoginSchema = z.object({
    email: z
        .string()
        .email("Format d'email invalide")
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "L'email contient des caractères non autorisés",
        ),
});
export type UserLoginInput = z.infer<typeof UserLoginSchema>;

/*====== COURSE SCHEMA =======*/

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

export type LessonFormValues = z.infer<typeof lessonSchema>;

/*====== MODULE SCHEMA =======*/

export const moduleSchema = z.object({
    title: z.string().min(5, 'Le titre est trop court.'),
    description: z
        .string()
        .min(10, 'La description est trop courte')
        .optional()
        .or(z.literal('')),
});
export type ModuleFormSchema = z.infer<typeof moduleSchema>;

/*====== ROADMAP SCHEMA =======*/

export const roadmapSchema = z.object({
    title: z.string().min(3, 'Le titre est requis'),
    description: z.string().optional(),
    slug: z.string().min(5, 'Slug est trop court'),
    steps: z
        .array(
            z.object({
                order: z.number().int(),
                title: z.string().min(2, "Titre de l'étape requis"),
                description: z.string().min(5, 'Description requise'),
                icon: z.string().default('book'),
                status: z
                    .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'])
                    .default('NOT_STARTED'),
                topics: z.preprocess((val) => {
                    if (Array.isArray(val)) return val;

                    if (typeof val === 'string') {
                        return val
                            .split(',')
                            .map((t) => t.trim())
                            .filter((t) => t != '');
                    }
                    return [];
                }, z.array(z.string())),
                moduleId: z.string().uuid('Module invalide'),
            }),
        )
        .min(1, 'Ajoutez au moins une étape'),
});
export type RoadmapFormSchema = z.infer<typeof roadmapSchema>;
